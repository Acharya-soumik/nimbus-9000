/**
 * Tests for gradient and typography utilities
 * Task Group 2.1: Write 2-4 focused tests for gradient and typography utilities
 *
 * This test suite validates:
 * - Gradient utility functions generate valid CSS
 * - Font loading and fallback configuration
 * - Typography scale values are accessible
 */

import {
  getGradientCSS,
  getAllGradients,
  GradientPreset,
} from '@/lib/design-system/gradients';

import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  getTypographyScale,
} from '@/lib/design-system/typography';

describe('Gradient Utilities', () => {
  test('gradient utility functions generate valid CSS', () => {
    // Test hero gradient generates valid CSS
    const heroGradient = getGradientCSS('hero');
    expect(heroGradient).toContain('radial-gradient');
    expect(heroGradient).toContain('oklch');
    expect(heroGradient).toMatch(/oklch\([^)]+\)/);

    // Test pricing gradient generates valid CSS
    const pricingGradient = getGradientCSS('pricing');
    expect(pricingGradient).toContain('linear-gradient');
    expect(pricingGradient).toContain('oklch');

    // Test info card gradient
    const infoGradient = getGradientCSS('infoCard');
    expect(infoGradient).toContain('linear-gradient');
    expect(infoGradient).toContain('135deg'); // Diagonal angle

    // Test banner gradient
    const bannerGradient = getGradientCSS('banner');
    expect(bannerGradient).toContain('linear-gradient');
    expect(bannerGradient).toContain('90deg'); // Horizontal

    // Test subtle card gradient
    const cardGradient = getGradientCSS('cardSubtle');
    expect(cardGradient).toContain('radial-gradient');
  });

  test('getAllGradients returns all gradient presets', () => {
    const allGradients = getAllGradients();

    expect(allGradients).toHaveProperty('hero');
    expect(allGradients).toHaveProperty('pricing');
    expect(allGradients).toHaveProperty('infoCard');
    expect(allGradients).toHaveProperty('banner');
    expect(allGradients).toHaveProperty('cardSubtle');

    // Verify each gradient has required properties
    expect(allGradients.hero).toHaveProperty('name');
    expect(allGradients.hero).toHaveProperty('css');
    expect(allGradients.hero).toHaveProperty('screenshot');
  });
});

describe('Typography Configuration', () => {
  test('font loading and fallback configuration', () => {
    // Test sans-serif font (Acme) has proper fallbacks
    expect(fonts.sans).toContain('Acme');
    expect(fonts.sans).toContain('system-ui');
    expect(fonts.sans).toContain('sans-serif');

    // Test monospace font (B612 Mono) has proper fallbacks
    expect(fonts.mono).toContain('B612 Mono');
    expect(fonts.mono).toContain('monospace');

    // Test serif font has proper fallbacks
    expect(fonts.serif).toContain('Georgia');
    expect(fonts.serif).toContain('serif');
  });

  test('typography scale values are accessible', () => {
    // Test 8-level typography scale
    expect(fontSizes.display).toBe('3.75rem'); // 60px
    expect(fontSizes.h1).toBe('2.25rem'); // 36px
    expect(fontSizes.h2).toBe('1.75rem'); // 28px
    expect(fontSizes.h3).toBe('1.5rem'); // 24px
    expect(fontSizes.price).toBe('3rem'); // 48px
    expect(fontSizes.body).toBe('1rem'); // 16px
    expect(fontSizes.small).toBe('0.875rem'); // 14px
    expect(fontSizes.tiny).toBe('0.75rem'); // 12px

    // Test font weights
    expect(fontWeights.normal).toBe(400);
    expect(fontWeights.medium).toBe(500);
    expect(fontWeights.semibold).toBe(600);
    expect(fontWeights.bold).toBe(700);

    // Test line heights
    expect(lineHeights.tight).toBe(1.25);
    expect(lineHeights.normal).toBe(1.5);
    expect(lineHeights.relaxed).toBe(1.625);
    expect(lineHeights.loose).toBe(2);

    // Test letter spacing
    expect(letterSpacing.tighter).toBe('-0.05em');
    expect(letterSpacing.normal).toBe('0');
    expect(letterSpacing.wide).toBe('0.025em');
    expect(letterSpacing.widest).toBe('0.1em');
  });

  test('getTypographyScale returns complete typography configuration', () => {
    const scale = getTypographyScale();

    expect(scale).toHaveProperty('fonts');
    expect(scale).toHaveProperty('sizes');
    expect(scale).toHaveProperty('weights');
    expect(scale).toHaveProperty('lineHeights');
    expect(scale).toHaveProperty('letterSpacing');

    // Verify it returns the same values as individual exports
    expect(scale.fonts).toEqual(fonts);
    expect(scale.sizes).toEqual(fontSizes);
  });
});
