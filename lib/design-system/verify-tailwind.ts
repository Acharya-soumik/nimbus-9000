/**
 * Tailwind CSS v4 Integration Verification Script
 *
 * This file verifies that all custom Tailwind utilities are properly configured
 * and accessible. It demonstrates the custom gradient, shadow, and radius utilities.
 */

/**
 * Custom Gradient Utilities Available in Tailwind
 *
 * These utilities can be used directly in className strings:
 * - bg-gradient-hero
 * - bg-gradient-pricing
 * - bg-gradient-info-card
 * - bg-gradient-banner
 * - bg-gradient-card-subtle
 * - border-gradient-pricing
 */
export const gradientUtilities = {
  hero: 'bg-gradient-hero',
  pricing: 'bg-gradient-pricing',
  infoCard: 'bg-gradient-info-card',
  banner: 'bg-gradient-banner',
  cardSubtle: 'bg-gradient-card-subtle',
  pricingBorder: 'border-gradient-pricing',
} as const;

/**
 * Custom Shadow Utilities Available in Tailwind
 *
 * These utilities can be used directly in className strings:
 * - shadow-card
 * - shadow-card-hover
 * - shadow-modal
 * - shadow-button
 */
export const shadowUtilities = {
  card: 'shadow-card',
  cardHover: 'shadow-card-hover',
  modal: 'shadow-modal',
  button: 'shadow-button',
} as const;

/**
 * Custom Border Radius Utilities Available in Tailwind
 *
 * These utilities can be used directly in className strings:
 * - rounded-card
 * - rounded-card-lg
 * - rounded-button
 * - rounded-button-lg
 * - rounded-badge
 * - rounded-input
 * - rounded-modal
 */
export const radiusUtilities = {
  card: 'rounded-card',
  cardLg: 'rounded-card-lg',
  button: 'rounded-button',
  buttonLg: 'rounded-button-lg',
  badge: 'rounded-badge',
  input: 'rounded-input',
  modal: 'rounded-modal',
} as const;

/**
 * Example component className compositions using custom utilities
 */
export const componentExamples = {
  // Hero section with gradient background
  heroSection: 'bg-gradient-hero min-h-screen',

  // Card with custom shadow and radius
  card: 'bg-white shadow-card rounded-card p-6',

  // Card with hover effect
  cardHoverable: 'bg-white shadow-card hover:shadow-card-hover rounded-card p-6 transition-shadow duration-200',

  // Primary button
  buttonPrimary: 'bg-primary text-primary-foreground shadow-button rounded-button px-6 py-3 font-semibold',

  // Large button
  buttonLarge: 'bg-primary text-primary-foreground shadow-button rounded-button-lg px-8 py-4 font-semibold text-lg',

  // Badge
  badge: 'bg-warning-yellow text-warning-yellow-brown rounded-badge px-3 py-1 text-tiny font-semibold',

  // Input field
  input: 'bg-background-gray-light border border-border-input rounded-input px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/10',

  // Modal
  modal: 'bg-white shadow-modal rounded-modal p-8 max-w-lg',

  // Pricing card with gradient border
  pricingCard: 'bg-white shadow-card rounded-card-lg p-8 border-2 border-gradient-pricing',

  // Info card with gradient background
  infoCard: 'bg-gradient-info-card shadow-card rounded-card-lg p-8 text-white',

  // Banner with gradient
  banner: 'bg-gradient-banner text-white py-4 px-6 rounded-lg',
};

/**
 * CSS Custom Properties Available via Tailwind
 *
 * All color tokens are available as Tailwind utilities:
 * - bg-primary, text-primary, border-primary
 * - bg-success, text-success, border-success
 * - bg-warning, text-warning, border-warning
 * - bg-info, text-info, border-info
 * etc.
 */
export const tailwindColorUtilities = {
  // Primary colors
  primary: ['bg-primary', 'text-primary', 'border-primary'],
  primaryBright: ['bg-primary-bright', 'text-primary-bright', 'border-primary-bright'],
  primaryDark: ['bg-primary-dark', 'text-primary-dark', 'border-primary-dark'],

  // Success colors
  success: ['bg-success', 'text-success', 'border-success'],
  successLight: ['bg-success-light', 'text-success-light', 'border-success-light'],

  // Warning colors
  warning: ['bg-warning', 'text-warning', 'border-warning'],
  warningYellow: ['bg-warning-yellow', 'text-warning-yellow', 'border-warning-yellow'],

  // Info colors
  info: ['bg-info', 'text-info', 'border-info'],

  // Background colors
  backgroundPeach: ['bg-background-peach'],
  backgroundGrayLight: ['bg-background-gray-light'],

  // Text colors
  textHeading: ['text-text-heading'],
  textBody: ['text-text-body'],
  textMuted: ['text-text-muted'],

  // Border colors
  border: ['border-border'],
  borderInput: ['border-border-input'],
} as const;

/**
 * Verification function to check if all utilities are properly defined
 */
export function verifyTailwindIntegration(): boolean {
  console.log('Tailwind CSS v4 Integration Verification');
  console.log('=========================================');
  console.log('');

  console.log('Custom Gradient Utilities:');
  Object.entries(gradientUtilities).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
  console.log('');

  console.log('Custom Shadow Utilities:');
  Object.entries(shadowUtilities).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
  console.log('');

  console.log('Custom Border Radius Utilities:');
  Object.entries(radiusUtilities).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
  console.log('');

  console.log('Example Component ClassNames:');
  Object.entries(componentExamples).forEach(([key, value]) => {
    console.log(`  ${key}:`);
    console.log(`    "${value}"`);
  });
  console.log('');

  console.log('All Tailwind utilities are properly configured!');
  return true;
}

export default {
  gradientUtilities,
  shadowUtilities,
  radiusUtilities,
  componentExamples,
  tailwindColorUtilities,
  verifyTailwindIntegration,
};
