import { NextRequest, NextResponse } from 'next/server';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private requests: Map<string, RateLimitEntry>;
  private cleanupInterval: NodeJS.Timeout | null;

  constructor() {
    this.requests = new Map();
    this.cleanupInterval = null;
    this.startCleanup();
  }

  private startCleanup() {
    // Clean up expired entries every 5 minutes
    this.cleanupInterval = setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of this.requests.entries()) {
        if (now > entry.resetTime) {
          this.requests.delete(key);
        }
      }
    }, 5 * 60 * 1000);
  }

  private getClientIdentifier(request: NextRequest): string {
    // Try to get IP from various headers (for different hosting platforms)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfConnectingIp = request.headers.get('cf-connecting-ip');

    const ip = cfConnectingIp || realIp || forwardedFor?.split(',')[0] || 'unknown';

    // Include user agent for better uniqueness
    const userAgent = request.headers.get('user-agent') || 'unknown';

    return `${ip}-${userAgent}`;
  }

  check(
    request: NextRequest,
    maxRequests: number,
    windowMs: number
  ): { allowed: boolean; remaining: number; resetTime: number } {
    const identifier = this.getClientIdentifier(request);
    const now = Date.now();
    const entry = this.requests.get(identifier);

    if (!entry || now > entry.resetTime) {
      // First request or window expired
      const resetTime = now + windowMs;
      this.requests.set(identifier, { count: 1, resetTime });
      return { allowed: true, remaining: maxRequests - 1, resetTime };
    }

    if (entry.count >= maxRequests) {
      // Rate limit exceeded
      return { allowed: false, remaining: 0, resetTime: entry.resetTime };
    }

    // Increment count
    entry.count++;
    this.requests.set(identifier, entry);
    return { allowed: true, remaining: maxRequests - entry.count, resetTime: entry.resetTime };
  }

  cleanup() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
    this.requests.clear();
  }
}

// Create singleton instance
const rateLimiter = new RateLimiter();

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export function withRateLimit(
  handler: (request: NextRequest) => Promise<NextResponse>,
  config: RateLimitConfig
) {
  return async (request: NextRequest) => {
    const { allowed, remaining, resetTime } = rateLimiter.check(
      request,
      config.maxRequests,
      config.windowMs
    );

    if (!allowed) {
      const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': retryAfter.toString(),
            'X-RateLimit-Limit': config.maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(resetTime).toISOString(),
          },
        }
      );
    }

    const response = await handler(request);

    // Add rate limit headers to successful responses
    response.headers.set('X-RateLimit-Limit', config.maxRequests.toString());
    response.headers.set('X-RateLimit-Remaining', remaining.toString());
    response.headers.set('X-RateLimit-Reset', new Date(resetTime).toISOString());

    return response;
  };
}

export { rateLimiter };
