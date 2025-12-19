/**
 * Design System Theme Configuration
 *
 * This file contains all color tokens in OKLCH color space for perceptual uniformity.
 * All colors are extracted from the 11 layout screenshots and converted to OKLCH.
 *
 * OKLCH Format: oklch(lightness% chroma hue / alpha)
 * - Lightness: 0-100% (perceived brightness)
 * - Chroma: 0-0.4 (colorfulness, can exceed 0.4)
 * - Hue: 0-360 (color angle)
 * - Alpha: 0-1 (opacity, optional)
 */

// =============================================================================
// PRIMARY ACTION COLORS (Coral/Red Family)
// Used for: CTA buttons, progress bars, primary actions
// =============================================================================

export const primary = {
  /** Main coral red - Primary CTA buttons, progress bars (#EF5A6F) */
  DEFAULT: 'oklch(64% 0.18 15)',

  /** Bright red - Accent, warnings (#EF4444) */
  bright: 'oklch(63% 0.22 25)',

  /** Dark red - Badges, urgency states (#DC2626) */
  dark: 'oklch(58% 0.22 25)',

  /** Alternative coral shade - Hover states (#E8505B) */
  coral: 'oklch(61% 0.20 18)',

  /** White text on primary backgrounds */
  foreground: 'oklch(100% 0 0)',
} as const;

// =============================================================================
// SUCCESS COLORS (Green Family)
// Used for: Checkmarks, success states, pricing displays
// =============================================================================

export const success = {
  /** Emerald green - Pricing, success states (#10B981) */
  DEFAULT: 'oklch(67% 0.15 165)',

  /** Green - Checkmarks (#4CAF50) */
  base: 'oklch(65% 0.16 145)',

  /** Dark green - Emphasis (#2E7D32) */
  dark: 'oklch(50% 0.14 145)',

  /** Very dark green - Savings text (#166534) */
  darker: 'oklch(42% 0.12 150)',

  /** Light green background - Savings badges (#D4F4DD) */
  light: 'oklch(92% 0.06 145)',

  /** White text on success backgrounds */
  foreground: 'oklch(100% 0 0)',
} as const;

// =============================================================================
// WARNING/URGENCY COLORS (Orange/Yellow Family)
// Used for: Badges, highlights, urgency messaging, countdown timers
// =============================================================================

export const warning = {
  /** Orange - Banner backgrounds (#FB923C) */
  DEFAULT: 'oklch(72% 0.16 50)',

  /** Bright orange - Icons (#F97316) */
  bright: 'oklch(70% 0.18 45)',

  /** Coral orange - Gradients (#FF8C69) */
  coral: 'oklch(70% 0.16 30)',

  /** Light orange - Gradients (#FFA366) */
  light: 'oklch(75% 0.14 45)',

  /** Mid orange - Gradients (#FF9966) */
  mid: 'oklch(73% 0.15 40)',

  /** Dark orange - Badges (#D97706) */
  dark: 'oklch(62% 0.16 55)',

  /** Yellow - Badges (#F5C842) */
  yellow: 'oklch(82% 0.14 90)',

  /** Bright yellow - Gradients (#FFD54F) */
  yellowBright: 'oklch(87% 0.13 95)',

  /** Orange yellow - Gradients (#FFB74D) */
  yellowOrange: 'oklch(80% 0.14 70)',

  /** Gold yellow - Icons (#FBBF24) */
  gold: 'oklch(80% 0.13 85)',

  /** Dark gold - Text, icons (#CA8A04) */
  goldDark: 'oklch(60% 0.13 80)',

  /** Very dark brown - Text on yellow (#92400E) */
  brown: 'oklch(35% 0.10 65)',

  /** Dark yellow brown - Badge text (#8B6914) */
  yellowBrown: 'oklch(45% 0.11 75)',
} as const;

// =============================================================================
// INFO/ACCENT COLORS (Blue Family)
// Used for: Icons, informational elements, accents
// =============================================================================

export const info = {
  /** Blue - Icons, accents (#3B82F6) */
  DEFAULT: 'oklch(60% 0.18 250)',

  /** Light blue background (#DBEAFE) */
  light: 'oklch(92% 0.05 250)',

  /** White text on info backgrounds */
  foreground: 'oklch(100% 0 0)',
} as const;

// =============================================================================
// TEAL ACCENT COLORS (For Agreement Drafting Service)
// Used for: Agreement page primary actions, badges, accents
// =============================================================================

export const teal = {
  /** Main teal - Primary accent for agreement pages (#14B8A6) */
  DEFAULT: 'oklch(65% 0.16 175)',

  /** Light teal - Backgrounds, badges (#CCFBF1) */
  light: 'oklch(92% 0.05 175)',

  /** Very light teal - Hero gradient (#F0FDFA) */
  lighter: 'oklch(97% 0.02 175)',

  /** Dark teal - Hover states (#0D9488) */
  dark: 'oklch(55% 0.14 175)',

  /** Darker teal - Emphasis (#0F766E) */
  darker: 'oklch(48% 0.12 175)',

  /** White text on teal backgrounds */
  foreground: 'oklch(100% 0 0)',
} as const;

// =============================================================================
// BACKGROUND COLORS (Peach/Pink/White/Gray Family)
// Used for: Page backgrounds, card backgrounds, section backgrounds
// =============================================================================

export const background = {
  /** Pure white - Cards, modals, buttons (#FFFFFF) */
  white: 'oklch(100% 0 0)',

  /** Very light peach - Hero background (#FFF5F2) */
  peach: 'oklch(98% 0.01 30)',

  /** Light pink/peach - Gradients (#FFE8E0) */
  pinkLight: 'oklch(95% 0.03 30)',

  /** Very light yellow - Badge backgrounds (#FFF9E6) */
  yellowLight: 'oklch(98% 0.02 90)',

  /** Light yellow/cream - Badge backgrounds (#FEF3C7) */
  cream: 'oklch(95% 0.05 90)',

  /** Very light pink - Badge backgrounds (#FDE8E8) */
  pinkPale: 'oklch(95% 0.03 20)',

  /** Light red/pink - Countdown backgrounds (#FEE2E2) */
  redLight: 'oklch(93% 0.04 20)',

  /** Very light gray - Input backgrounds, sections (#F9FAFB) */
  grayLight: 'oklch(99% 0 0)',

  /** Light gray - Backgrounds (#F5F5F5) */
  gray: 'oklch(97% 0 0)',
} as const;

// =============================================================================
// TEXT COLORS (Gray/Black Family)
// Used for: Headings, body text, labels, muted text
// =============================================================================

export const text = {
  /** Very dark gray/black - Headings, prices (#1A1A1A) */
  heading: 'oklch(15% 0 0)',

  /** Dark gray - Headings, input text (#1F2937) */
  dark: 'oklch(20% 0 0)',

  /** Dark gray - Body text (#2C2C2C) */
  body: 'oklch(22% 0 0)',

  /** Medium-dark gray - Titles (#374151) */
  title: 'oklch(28% 0 0)',

  /** Medium gray - Body text (#4B5563) */
  medium: 'oklch(38% 0 0)',

  /** Gray - Text (#666666) */
  base: 'oklch(45% 0 0)',

  /** Medium-light gray - Subheadings, labels (#6B7280) */
  label: 'oklch(50% 0 0)',

  /** Light gray - Muted text, placeholders (#9CA3AF) */
  muted: 'oklch(67% 0 0)',

  /** White text - For dark backgrounds */
  white: 'oklch(100% 0 0)',
} as const;

// =============================================================================
// BORDER COLORS (Gray Family)
// Used for: Borders, dividers, separators
// =============================================================================

export const border = {
  /** Light gray - Borders, dividers, progress backgrounds (#E5E7EB) */
  DEFAULT: 'oklch(92% 0 0)',

  /** Gray - Input borders (#D1D5DB) */
  input: 'oklch(86% 0 0)',

  /** Very light for subtle borders */
  subtle: 'oklch(95% 0 0)',
} as const;

// =============================================================================
// SPECIAL COLORS
// Used for: Overlays, unique elements
// =============================================================================

export const special = {
  /** Black backdrop overlay - 50% opacity */
  backdrop: 'oklch(0% 0 0 / 0.5)',

  /** Brown - Badge backgrounds (#8B4513) */
  brown: 'oklch(35% 0.08 50)',
} as const;

// =============================================================================
// DARK MODE COLORS (Future-proof)
// These will be used when dark mode is implemented
// =============================================================================

export const dark = {
  background: {
    /** Dark background base */
    DEFAULT: 'oklch(15% 0 0)',

    /** Slightly lighter for cards */
    card: 'oklch(20% 0 0)',

    /** Input backgrounds */
    input: 'oklch(18% 0 0)',
  },

  text: {
    /** Primary text in dark mode */
    DEFAULT: 'oklch(95% 0 0)',

    /** Muted text in dark mode */
    muted: 'oklch(70% 0 0)',
  },

  border: {
    /** Borders in dark mode */
    DEFAULT: 'oklch(30% 0 0)',
  },
} as const;

// =============================================================================
// GRADIENT PRESETS
// Gradient color stops for common gradient patterns
// =============================================================================

export const gradients = {
  /** Hero background gradient - Radial from top-left */
  hero: {
    from: background.peach,
    to: background.pinkLight,
  },

  /** Pricing card border gradient - Linear left to right */
  pricing: {
    from: warning.yellowBright,
    to: warning.yellowOrange,
  },

  /** Info card gradient - Diagonal */
  infoCard: {
    from: warning.coral,
    to: warning.light,
  },

  /** Banner gradient - Horizontal */
  banner: {
    from: warning.DEFAULT,
    to: warning.dark,
  },

  /** Subtle card depth gradient - Radial */
  cardSubtle: {
    from: background.white,
    to: background.gray,
  },
} as const;

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type ThemeColors = {
  primary: typeof primary;
  success: typeof success;
  warning: typeof warning;
  info: typeof info;
  teal: typeof teal;
  background: typeof background;
  text: typeof text;
  border: typeof border;
  special: typeof special;
  dark: typeof dark;
  gradients: typeof gradients;
};

export const colors: ThemeColors = {
  primary,
  success,
  warning,
  info,
  teal,
  background,
  text,
  border,
  special,
  dark,
  gradients,
} as const;

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get a color token by path
 * @example getColor('primary.DEFAULT') => 'oklch(64% 0.18 15)'
 * @example getColor('success.light') => 'oklch(92% 0.06 145)'
 */
export function getColor(path: string): string {
  const parts = path.split('.');
  let result: any = colors;

  for (const part of parts) {
    if (result && typeof result === 'object' && part in result) {
      result = result[part];
    } else {
      throw new Error(`Color token not found: ${path}`);
    }
  }

  if (typeof result === 'string') {
    return result;
  }

  throw new Error(`Invalid color token path: ${path}`);
}

/**
 * Validate if a string is a valid OKLCH color
 * @param color - The color string to validate
 * @returns true if valid OKLCH color
 */
export function isValidOKLCH(color: string): boolean {
  // OKLCH format: oklch(L% C H) or oklch(L% C H / A)
  const oklchRegex = /^oklch\(\s*\d+(?:\.\d+)?%\s+\d+(?:\.\d+)?\s+\d+(?:\.\d+)?(?:\s*\/\s*\d+(?:\.\d+)?)?\s*\)$/;
  return oklchRegex.test(color);
}

/**
 * Get all colors as a flat object with dot notation keys
 * Useful for CSS custom property generation
 * @returns Object with flattened color tokens
 */
export function getFlatColors(): Record<string, string> {
  const flat: Record<string, string> = {};

  function flatten(obj: any, prefix = ''): void {
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'string') {
        flat[newKey] = value;
      } else if (typeof value === 'object' && value !== null) {
        flatten(value, newKey);
      }
    }
  }

  flatten(colors);
  return flat;
}

/**
 * Convert a color token path to a CSS custom property name
 * @example toCSSVar('primary.DEFAULT') => '--color-primary'
 * @example toCSSVar('success.light') => '--color-success-light'
 */
export function toCSSVar(path: string): string {
  const parts = path.split('.');

  // Remove 'DEFAULT' from the path as it's redundant in CSS var names
  const filtered = parts.filter(part => part !== 'DEFAULT');

  return `--color-${filtered.join('-').toLowerCase()}`;
}

/**
 * Get color with custom opacity
 * @param path - Color token path
 * @param opacity - Opacity value (0-1)
 * @returns OKLCH color string with opacity
 */
export function withOpacity(path: string, opacity: number): string {
  const color = getColor(path);

  // Remove existing alpha if present
  const baseColor = color.replace(/\s*\/\s*[\d.]+\s*\)$/, ')');

  // Add new alpha
  return baseColor.replace(')', ` / ${opacity})`);
}

// =============================================================================
// EXPORTS
// =============================================================================

export default colors;
