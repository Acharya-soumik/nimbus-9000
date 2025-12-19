/**
 * Design System Gradient Presets
 *
 * This file defines reusable gradient patterns extracted from the 11 layout screenshots.
 * All gradients use OKLCH color space for smooth, perceptual color transitions.
 *
 * Each gradient includes:
 * - Name and description
 * - CSS gradient string
 * - Visual reference to source screenshot
 * - Color stops using theme colors
 */

import { colors } from './theme';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type GradientType = 'linear' | 'radial' | 'conic';

export interface GradientPreset {
  /** Gradient preset name */
  name: string;
  /** Human-readable description */
  description: string;
  /** CSS gradient string */
  css: string;
  /** Reference to source screenshot */
  screenshot: string;
  /** Gradient type */
  type: GradientType;
  /** Color stops */
  colors: {
    from: string;
    to: string;
  };
}

// =============================================================================
// GRADIENT PRESETS
// =============================================================================

/**
 * Hero Background Gradient
 * Radial gradient from top-left corner creating a soft peach to pink glow
 * Used in: Hero sections, landing page backgrounds
 * Reference: layout-screenshots/hero-section.png
 */
export const heroGradient: GradientPreset = {
  name: 'hero',
  description: 'Radial peach to pink gradient for hero backgrounds',
  css: `radial-gradient(circle at top left, ${colors.background.peach} 0%, ${colors.background.pinkLight} 100%)`,
  screenshot: 'hero-section.png',
  type: 'radial',
  colors: {
    from: colors.background.peach,
    to: colors.background.pinkLight,
  },
};

/**
 * Pricing Border Gradient
 * Linear left-to-right gradient from bright yellow to orange
 * Used in: Pricing card borders, special offer outlines
 * Reference: layout-screenshots/pricing-card.png
 */
export const pricingGradient: GradientPreset = {
  name: 'pricing',
  description: 'Linear yellow to orange gradient for pricing card borders',
  css: `linear-gradient(90deg, ${colors.warning.yellowBright} 0%, ${colors.warning.yellowOrange} 100%)`,
  screenshot: 'pricing-card.png',
  type: 'linear',
  colors: {
    from: colors.warning.yellowBright,
    to: colors.warning.yellowOrange,
  },
};

/**
 * Info Card Gradient
 * Diagonal gradient from coral to light orange
 * Used in: Information cards, feature highlights
 * Reference: layout-screenshots/reusableinfo-variant-3.png
 */
export const infoCardGradient: GradientPreset = {
  name: 'infoCard',
  description: 'Diagonal coral to orange gradient for info cards',
  css: `linear-gradient(135deg, ${colors.warning.coral} 0%, ${colors.warning.light} 100%)`,
  screenshot: 'reusableinfo-variant-3.png',
  type: 'linear',
  colors: {
    from: colors.warning.coral,
    to: colors.warning.light,
  },
};

/**
 * Banner Gradient
 * Horizontal gradient from bright to dark orange
 * Used in: Banner headers, urgency messaging, special offers
 * Reference: layout-screenshots/multi-step-form-retain-payment.png
 */
export const bannerGradient: GradientPreset = {
  name: 'banner',
  description: 'Horizontal orange gradient for banners and urgency states',
  css: `linear-gradient(90deg, ${colors.warning.DEFAULT} 0%, ${colors.warning.dark} 100%)`,
  screenshot: 'multi-step-form-retain-payment.png',
  type: 'linear',
  colors: {
    from: colors.warning.DEFAULT,
    to: colors.warning.dark,
  },
};

/**
 * Subtle Card Depth Gradient
 * Subtle radial gradient from white to very light gray
 * Used in: Card backgrounds, subtle depth effects
 * Reference: Multiple card-based screenshots
 */
export const cardSubtleGradient: GradientPreset = {
  name: 'cardSubtle',
  description: 'Subtle radial gradient for card depth',
  css: `radial-gradient(circle at top, ${colors.background.white} 0%, ${colors.background.gray} 100%)`,
  screenshot: 'pricing-card.png, reusableinfo-variant-1.png',
  type: 'radial',
  colors: {
    from: colors.background.white,
    to: colors.background.gray,
  },
};

// =============================================================================
// GRADIENT COLLECTION
// =============================================================================

export const gradients = {
  hero: heroGradient,
  pricing: pricingGradient,
  infoCard: infoCardGradient,
  banner: bannerGradient,
  cardSubtle: cardSubtleGradient,
} as const;

export type GradientName = keyof typeof gradients;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get gradient CSS string by name
 * @param name - Gradient preset name
 * @returns CSS gradient string
 * @example getGradientCSS('hero') => 'radial-gradient(...)'
 */
export function getGradientCSS(name: GradientName): string {
  const gradient = gradients[name];
  if (!gradient) {
    throw new Error(`Gradient preset not found: ${name}`);
  }
  return gradient.css;
}

/**
 * Get all gradient presets
 * @returns Object containing all gradient presets
 */
export function getAllGradients(): typeof gradients {
  return gradients;
}

/**
 * Get gradient preset by name
 * @param name - Gradient preset name
 * @returns Complete gradient preset object
 */
export function getGradient(name: GradientName): GradientPreset {
  const gradient = gradients[name];
  if (!gradient) {
    throw new Error(`Gradient preset not found: ${name}`);
  }
  return gradient;
}

/**
 * Create a custom gradient with theme colors
 * @param type - Gradient type (linear, radial, conic)
 * @param angle - Angle or position (e.g., '90deg', 'circle at top')
 * @param fromColor - Starting color (theme color string)
 * @param toColor - Ending color (theme color string)
 * @returns CSS gradient string
 * @example createCustomGradient('linear', '45deg', colors.primary.DEFAULT, colors.primary.dark)
 */
export function createCustomGradient(
  type: GradientType,
  angle: string,
  fromColor: string,
  toColor: string
): string {
  if (type === 'linear') {
    return `linear-gradient(${angle}, ${fromColor} 0%, ${toColor} 100%)`;
  } else if (type === 'radial') {
    return `radial-gradient(${angle}, ${fromColor} 0%, ${toColor} 100%)`;
  } else if (type === 'conic') {
    return `conic-gradient(from ${angle}, ${fromColor} 0%, ${toColor} 100%)`;
  }
  throw new Error(`Invalid gradient type: ${type}`);
}

/**
 * Convert gradient to CSS custom property format
 * @param name - Gradient preset name
 * @returns CSS custom property name
 * @example toGradientVar('hero') => '--gradient-hero'
 */
export function toGradientVar(name: GradientName): string {
  return `--gradient-${name}`;
}

/**
 * Get gradient with custom opacity on color stops
 * @param name - Gradient preset name
 * @param opacity - Opacity value (0-1)
 * @returns CSS gradient string with opacity applied
 */
export function getGradientWithOpacity(name: GradientName, opacity: number): string {
  const gradient = gradients[name];
  const fromWithOpacity = gradient.colors.from.replace(')', ` / ${opacity})`);
  const toWithOpacity = gradient.colors.to.replace(')', ` / ${opacity})`);

  if (gradient.type === 'linear') {
    const angle = gradient.css.match(/linear-gradient\(([^,]+),/)?.[1] || '90deg';
    return `linear-gradient(${angle}, ${fromWithOpacity} 0%, ${toWithOpacity} 100%)`;
  } else if (gradient.type === 'radial') {
    const position = gradient.css.match(/radial-gradient\(([^,]+),/)?.[1] || 'circle at top';
    return `radial-gradient(${position}, ${fromWithOpacity} 0%, ${toWithOpacity} 100%)`;
  }

  return gradient.css;
}

// =============================================================================
// EXPORTS
// =============================================================================

export default gradients;
