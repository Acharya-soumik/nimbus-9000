/**
 * Design System Typography Configuration
 *
 * This file defines the complete typography system including:
 * - Custom font families (Acme, B612 Mono)
 * - 8-level typography scale with significant size differences
 * - Font weights, line heights, and letter spacing
 *
 * Typography Hierarchy:
 * - Display (60px): Hero headings, large impact text
 * - H1 (36px): Main section headings
 * - H2 (28px): Card headings, subsection headings
 * - H3 (24px): Subheadings, card titles
 * - Price (48px): Large price displays
 * - Body (16px): Standard body text
 * - Small (14px): Labels, metadata
 * - Tiny (12px): Badges, small labels
 */

// =============================================================================
// FONT FAMILIES
// =============================================================================

/**
 * Font family configurations with proper fallback stacks
 */
export const fonts = {
  /**
   * Sans-serif font family for headings and UI
   * Primary: Acme (bold, impactful headings)
   * Fallbacks: system-ui, -apple-system, sans-serif
   */
  sans: "'Acme', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",

  /**
   * Monospace font family for code and technical content
   * Primary: B612 Mono (readable monospace)
   * Fallbacks: Courier New, monospace
   */
  mono: "'B612 Mono', 'Courier New', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",

  /**
   * Serif font family for decorative text
   * Primary: Georgia (elegant, readable serif)
   * Fallbacks: Times New Roman, serif
   */
  serif: "Georgia, 'Times New Roman', Times, serif",
} as const;

// =============================================================================
// FONT SIZES
// 8-level typography scale with significant size differences
// =============================================================================

export const fontSizes = {
  /** Display text - 60px - Hero headings, large impact text */
  display: '3.75rem',

  /** Heading 1 - 36px - Main section headings */
  h1: '2.25rem',

  /** Heading 2 - 28px - Card headings, subsection headings */
  h2: '1.75rem',

  /** Heading 3 - 24px - Subheadings, card titles */
  h3: '1.5rem',

  /** Price display - 48px - Large price displays, special numbers */
  price: '3rem',

  /** Body text - 16px - Standard body text, paragraphs */
  body: '1rem',

  /** Small text - 14px - Labels, metadata, secondary text */
  small: '0.875rem',

  /** Tiny text - 12px - Badges, small labels, fine print */
  tiny: '0.75rem',
} as const;

// =============================================================================
// FONT WEIGHTS
// =============================================================================

export const fontWeights = {
  /** Normal weight - 400 - Body text, regular content */
  normal: 400,

  /** Medium weight - 500 - Emphasized text, labels */
  medium: 500,

  /** Semi-bold weight - 600 - Badges, buttons, subheadings */
  semibold: 600,

  /** Bold weight - 700 - Headings, strong emphasis */
  bold: 700,
} as const;

// =============================================================================
// LINE HEIGHTS
// =============================================================================

export const lineHeights = {
  /** Tight line height - 1.25 - Headings, compact text */
  tight: 1.25,

  /** Normal line height - 1.5 - Standard body text */
  normal: 1.5,

  /** Relaxed line height - 1.625 - Comfortable reading */
  relaxed: 1.625,

  /** Loose line height - 2 - Very spacious text, large headings */
  loose: 2,
} as const;

// =============================================================================
// LETTER SPACING
// =============================================================================

export const letterSpacing = {
  /** Tighter spacing - -0.05em - Large headings */
  tighter: '-0.05em',

  /** Normal spacing - 0 - Standard text */
  normal: '0',

  /** Wide spacing - 0.025em - Labels, small text */
  wide: '0.025em',

  /** Widest spacing - 0.1em - All-caps text, badges */
  widest: '0.1em',
} as const;

// =============================================================================
// TYPOGRAPHY SCALE PRESETS
// Predefined combinations for common use cases
// =============================================================================

export const typographyPresets = {
  /** Display heading preset */
  display: {
    fontSize: fontSizes.display,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tighter,
    fontFamily: fonts.sans,
  },

  /** H1 heading preset */
  h1: {
    fontSize: fontSizes.h1,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.normal,
    fontFamily: fonts.sans,
  },

  /** H2 heading preset */
  h2: {
    fontSize: fontSizes.h2,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.normal,
    fontFamily: fonts.sans,
  },

  /** H3 heading preset */
  h3: {
    fontSize: fontSizes.h3,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
    fontFamily: fonts.sans,
  },

  /** Price display preset */
  price: {
    fontSize: fontSizes.price,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tighter,
    fontFamily: fonts.sans,
  },

  /** Body text preset */
  body: {
    fontSize: fontSizes.body,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal,
    fontFamily: fonts.sans,
  },

  /** Small text preset */
  small: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wide,
    fontFamily: fonts.sans,
  },

  /** Tiny text preset (badges) */
  tiny: {
    fontSize: fontSizes.tiny,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.widest,
    fontFamily: fonts.sans,
  },

  /** Code/monospace preset */
  code: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal,
    fontFamily: fonts.mono,
  },
} as const;

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LineHeight = keyof typeof lineHeights;
export type LetterSpacing = keyof typeof letterSpacing;
export type TypographyPreset = keyof typeof typographyPresets;

export interface TypographyConfig {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
  fontFamily: string;
}

export interface TypographyScale {
  fonts: typeof fonts;
  sizes: typeof fontSizes;
  weights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  letterSpacing: typeof letterSpacing;
  presets: typeof typographyPresets;
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get complete typography scale configuration
 * @returns Complete typography scale object
 */
export function getTypographyScale(): TypographyScale {
  return {
    fonts,
    sizes: fontSizes,
    weights: fontWeights,
    lineHeights,
    letterSpacing,
    presets: typographyPresets,
  };
}

/**
 * Get typography preset by name
 * @param preset - Typography preset name
 * @returns Typography configuration object
 * @example getTypographyPreset('h1') => { fontSize: '2.25rem', ... }
 */
export function getTypographyPreset(preset: TypographyPreset): TypographyConfig {
  return typographyPresets[preset];
}

/**
 * Create custom typography configuration
 * @param options - Typography options
 * @returns Typography configuration object
 */
export function createTypography(options: {
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  spacing?: LetterSpacing;
  family?: keyof typeof fonts;
}): TypographyConfig {
  return {
    fontSize: options.size ? fontSizes[options.size] : fontSizes.body,
    fontWeight: options.weight ? fontWeights[options.weight] : fontWeights.normal,
    lineHeight: options.lineHeight ? lineHeights[options.lineHeight] : lineHeights.normal,
    letterSpacing: options.spacing ? letterSpacing[options.spacing] : letterSpacing.normal,
    fontFamily: options.family ? fonts[options.family] : fonts.sans,
  };
}

/**
 * Convert font size name to CSS custom property
 * @param size - Font size name
 * @returns CSS custom property name
 * @example toFontSizeVar('h1') => '--font-size-h1'
 */
export function toFontSizeVar(size: FontSize): string {
  return `--font-size-${size}`;
}

/**
 * Convert font weight name to CSS custom property
 * @param weight - Font weight name
 * @returns CSS custom property name
 * @example toFontWeightVar('bold') => '--font-weight-bold'
 */
export function toFontWeightVar(weight: FontWeight): string {
  return `--font-weight-${weight}`;
}

/**
 * Get font loading configuration for @font-face declarations
 * @returns Array of font face configurations
 */
export function getFontFaceConfig() {
  return [
    {
      family: 'Acme',
      src: [
        { path: '/fonts/acme/acme-regular.ttf', format: 'truetype' },
      ],
      weight: 400,
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'B612 Mono',
      src: [
        { path: '/fonts/b612-mono/b612-mono-regular.ttf', format: 'truetype' },
      ],
      weight: 400,
      style: 'normal',
      display: 'swap',
    },
    {
      family: 'B612 Mono',
      src: [
        { path: '/fonts/b612-mono/b612-mono-bold.ttf', format: 'truetype' },
      ],
      weight: 700,
      style: 'normal',
      display: 'swap',
    },
  ];
}

/**
 * Generate @font-face CSS declarations
 * @returns CSS string with all @font-face rules
 */
export function generateFontFaceCSS(): string {
  const configs = getFontFaceConfig();

  return configs
    .map(config => {
      const srcDeclarations = config.src
        .map(src => `url('${src.path}') format('${src.format}')`)
        .join(',\n       ');

      return `@font-face {
  font-family: '${config.family}';
  src: ${srcDeclarations};
  font-weight: ${config.weight};
  font-style: ${config.style};
  font-display: ${config.display};
}`;
    })
    .join('\n\n');
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  typographyPresets,
};
