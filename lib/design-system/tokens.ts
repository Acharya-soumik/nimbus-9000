/**
 * Design System Component Tokens
 *
 * This file defines design tokens for all UI components including:
 * - Badge tokens (backgrounds, text colors, padding, border radius)
 * - Button tokens (variants, sizes, states)
 * - Card tokens (backgrounds, borders, shadows, padding)
 * - Input tokens (backgrounds, borders, focus states)
 * - Modal tokens (backgrounds, shadows, sizing)
 * - Progress indicator tokens (colors, heights)
 * - Shadow system (7 levels + component aliases)
 * - Border radius scale (8 levels + component aliases)
 * - Spacing system (component-specific spacing)
 * - Transition durations
 * - Z-index layers
 */

import { colors } from './theme';

// =============================================================================
// BADGE TOKENS
// Used for: Status badges, labels, tags
// =============================================================================

export const badgeTokens = {
  /** Yellow badge variant - for "BEST VALUE PACK", "POPULAR" badges */
  yellow: {
    background: colors.warning.yellow,
    text: colors.warning.yellowBrown,
  },

  /** Green badge variant - for "VERIFIED", "SUCCESS" badges */
  green: {
    background: colors.success.light,
    text: colors.success.darker,
  },

  /** Orange badge variant - for "LIMITED TIME", urgency badges */
  orange: {
    background: colors.warning.yellowOrange,
    text: colors.warning.brown,
  },

  /** Blue badge variant - for informational badges */
  blue: {
    background: colors.info.light,
    text: colors.info.DEFAULT,
  },

  /** Padding configuration */
  padding: {
    x: '0.75rem', // 12px - horizontal padding
    y: '0.25rem', // 4px - vertical padding
  },

  /** Border radius - fully rounded pill shape */
  borderRadius: '9999px',

  /** Font size - small text */
  fontSize: '0.75rem', // 12px

  /** Font weight - semi-bold for emphasis */
  fontWeight: 600,
} as const;

// =============================================================================
// BUTTON TOKENS
// Used for: CTA buttons, form buttons, navigation
// =============================================================================

export const buttonTokens = {
  /** Primary button variant - main CTAs */
  primary: {
    background: colors.primary.DEFAULT,
    foreground: colors.primary.foreground,
    hover: colors.primary.coral,
  },

  /** Secondary button variant - back buttons, alternative actions */
  secondary: {
    background: colors.background.white,
    foreground: colors.text.base,
    border: colors.border.DEFAULT,
  },

  /** Button size variants */
  sizes: {
    /** Small button */
    sm: {
      paddingX: '1rem', // 16px
      paddingY: '0.5rem', // 8px
      borderRadius: '0.5rem', // 8px
      fontSize: '0.875rem', // 14px
    },
    /** Medium button (default) */
    md: {
      paddingX: '1.5rem', // 24px
      paddingY: '0.75rem', // 12px
      borderRadius: '0.75rem', // 12px
      fontSize: '1rem', // 16px
    },
    /** Large button */
    lg: {
      paddingX: '2rem', // 32px
      paddingY: '1rem', // 16px
      borderRadius: '1rem', // 16px
      fontSize: '1.125rem', // 18px
    },
  },

  /** Font weight - semi-bold for all buttons */
  fontWeight: 600,
} as const;

// =============================================================================
// CARD TOKENS
// Used for: Info cards, pricing cards, content containers
// =============================================================================

export const cardTokens = {
  /** Card background - pure white */
  background: colors.background.white,

  /** Card border color */
  border: colors.border.DEFAULT,

  /** Default card shadow - subtle elevation (xs) */
  shadow: '0 1px 3px oklch(0% 0 0 / 0.1), 0 1px 2px oklch(0% 0 0 / 0.06)',

  /** Large card shadow - prominent elevation (lg) */
  shadowLg: '0 10px 15px oklch(0% 0 0 / 0.1), 0 4px 6px oklch(0% 0 0 / 0.05)',

  /** Default card padding */
  padding: '1.5rem', // 24px

  /** Large card padding */
  paddingLg: '2rem', // 32px

  /** Default card border radius */
  borderRadius: '1rem', // 16px

  /** Large card border radius */
  borderRadiusLg: '1.5rem', // 24px
} as const;

// =============================================================================
// INPUT TOKENS
// Used for: Form inputs, text fields, selects, textareas
// =============================================================================

export const inputTokens = {
  /** Input background - light gray */
  background: colors.background.grayLight,

  /** Input border color */
  border: colors.border.input,

  /** Input border on focus */
  borderFocus: colors.primary.DEFAULT,

  /** Input text color */
  text: colors.text.body,

  /** Placeholder text color */
  placeholder: colors.text.muted,

  /** Input padding */
  padding: {
    x: '1rem', // 16px
    y: '0.75rem', // 12px
  },

  /** Input border radius */
  borderRadius: '0.75rem', // 12px

  /** Focus ring - primary color at 10% opacity */
  focusRing: '0 0 0 3px oklch(64% 0.18 15 / 0.1)',
} as const;

// =============================================================================
// MODAL TOKENS
// Used for: Modals, dialogs, popups
// =============================================================================

export const modalTokens = {
  /** Modal background - pure white */
  background: colors.background.white,

  /** Modal shadow - strong elevation (2xl) */
  shadow: '0 25px 50px oklch(0% 0 0 / 0.25)',

  /** Modal border radius - large */
  borderRadius: '1.5rem', // 24px

  /** Modal max width */
  maxWidth: '32rem', // 512px

  /** Modal padding */
  padding: '2rem', // 32px

  /** Modal backdrop overlay - 50% opacity */
  backdrop: colors.special.backdrop,
} as const;

// =============================================================================
// PROGRESS INDICATOR TOKENS
// Used for: Progress bars, loading indicators, step indicators
// =============================================================================

export const progressTokens = {
  /** Progress bar background - light gray */
  background: colors.border.DEFAULT,

  /** Progress bar fill color - coral red */
  fill: colors.primary.DEFAULT,

  /** Default progress bar height */
  height: '0.5rem', // 8px

  /** Small progress bar height */
  heightSm: '0.25rem', // 4px

  /** Border radius - fully rounded ends */
  borderRadius: '9999px',
} as const;

// =============================================================================
// SHADOW SYSTEM
// 7-level shadow system using OKLCH black with varying opacity (5% to 25%)
// =============================================================================

export const shadows = {
  /** Extra extra small shadow - minimal elevation */
  '2xs': '0 1px 2px oklch(0% 0 0 / 0.05)',

  /** Extra small shadow - subtle elevation */
  xs: '0 1px 3px oklch(0% 0 0 / 0.1), 0 1px 2px oklch(0% 0 0 / 0.06)',

  /** Small shadow - light elevation */
  sm: '0 2px 4px oklch(0% 0 0 / 0.1), 0 1px 2px oklch(0% 0 0 / 0.06)',

  /** Medium shadow - moderate elevation */
  md: '0 4px 6px oklch(0% 0 0 / 0.1), 0 2px 4px oklch(0% 0 0 / 0.06)',

  /** Large shadow - significant elevation */
  lg: '0 10px 15px oklch(0% 0 0 / 0.1), 0 4px 6px oklch(0% 0 0 / 0.05)',

  /** Extra large shadow - strong elevation */
  xl: '0 20px 25px oklch(0% 0 0 / 0.1), 0 10px 10px oklch(0% 0 0 / 0.04)',

  /** Extra extra large shadow - maximum elevation */
  '2xl': '0 25px 50px oklch(0% 0 0 / 0.25)',

  // Component-specific shadow aliases
  /** Card shadow - subtle elevation */
  card: '0 1px 3px oklch(0% 0 0 / 0.1), 0 1px 2px oklch(0% 0 0 / 0.06)',

  /** Card hover shadow - moderate elevation */
  cardHover: '0 4px 6px oklch(0% 0 0 / 0.1), 0 2px 4px oklch(0% 0 0 / 0.06)',

  /** Modal shadow - maximum elevation */
  modal: '0 25px 50px oklch(0% 0 0 / 0.25)',

  /** Button shadow - light elevation */
  button: '0 2px 4px oklch(0% 0 0 / 0.1), 0 1px 2px oklch(0% 0 0 / 0.06)',
} as const;

// =============================================================================
// BORDER RADIUS SYSTEM
// 8-level radius scale from 4px to full rounding
// =============================================================================

export const radii = {
  /** Extra extra small - 4px */
  '2xs': '0.25rem',

  /** Extra small - 6px */
  xs: '0.375rem',

  /** Small - 8px */
  sm: '0.5rem',

  /** Medium - 12px */
  md: '0.75rem',

  /** Large - 16px */
  lg: '1rem',

  /** Extra large - 20px */
  xl: '1.25rem',

  /** Extra extra large - 24px */
  '2xl': '1.5rem',

  /** Full rounding - 9999px */
  full: '9999px',

  // Component-specific radius aliases
  /** Card border radius - 16px */
  card: '1rem',

  /** Button border radius - 12px */
  button: '0.75rem',

  /** Badge border radius - fully rounded */
  badge: '9999px',

  /** Input border radius - 12px */
  input: '0.75rem',

  /** Modal border radius - 24px */
  modal: '1.5rem',
} as const;

// =============================================================================
// SPACING SYSTEM EXTENSIONS
// Component-specific spacing tokens
// =============================================================================

export const spacing = {
  /** Badge horizontal padding - 12px */
  badge: '0.75rem',

  /** Card padding - 24px */
  card: '1.5rem',

  /** Large card padding - 32px */
  cardLg: '2rem',

  /** Section vertical spacing - 64px */
  section: '4rem',

  /** Large section spacing - 96px */
  sectionLg: '6rem',

  /** Gap between form fields - 16px */
  formGap: '1rem',
} as const;

// =============================================================================
// TRANSITION DURATIONS
// Standard timing for animations and transitions
// =============================================================================

export const transitions = {
  /** Fast transitions - 150ms */
  fast: '150ms',

  /** Base transitions - 200ms */
  base: '200ms',

  /** Slow transitions - 300ms */
  slow: '300ms',
} as const;

// =============================================================================
// Z-INDEX LAYERS
// Stacking order for overlays and layered elements
// =============================================================================

export const zIndex = {
  /** Dropdown menus - 1000 */
  dropdown: 1000,

  /** Sticky positioned elements - 1020 */
  sticky: 1020,

  /** Fixed positioned elements - 1030 */
  fixed: 1030,

  /** Modal backdrop overlay - 1040 */
  modalBackdrop: 1040,

  /** Modal dialogs - 1050 */
  modal: 1050,

  /** Popovers - 1060 */
  popover: 1060,

  /** Tooltips - 1070 */
  tooltip: 1070,
} as const;

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type BadgeVariant = 'yellow' | 'green' | 'orange' | 'blue';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ShadowLevel = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type RadiusLevel = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ComponentTokens {
  badge: typeof badgeTokens;
  button: typeof buttonTokens;
  card: typeof cardTokens;
  input: typeof inputTokens;
  modal: typeof modalTokens;
  progress: typeof progressTokens;
  shadows: typeof shadows;
  radii: typeof radii;
  spacing: typeof spacing;
  transitions: typeof transitions;
  zIndex: typeof zIndex;
}

// =============================================================================
// COMPLETE TOKENS OBJECT
// =============================================================================

export const tokens: ComponentTokens = {
  badge: badgeTokens,
  button: buttonTokens,
  card: cardTokens,
  input: inputTokens,
  modal: modalTokens,
  progress: progressTokens,
  shadows,
  radii,
  spacing,
  transitions,
  zIndex,
} as const;

// =============================================================================
// EXPORTS
// =============================================================================

export default tokens;
