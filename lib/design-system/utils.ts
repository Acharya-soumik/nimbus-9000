/**
 * Design System Utility Functions
 *
 * This file provides helper functions for accessing and working with theme tokens:
 * - Helper function for accessing nested theme tokens
 * - Utility for converting theme tokens to CSS variables
 * - Function to generate component-specific class names
 * - Type-safe token access with TypeScript generics
 *
 * Leverages existing cn() from /lib/utils.ts for className merging
 */

import { cn } from '@/lib/utils';
import { colors, getColor, type ThemeColors } from './theme';
import { gradients, type GradientName } from './gradients';
import { tokens, type ComponentTokens } from './tokens';

// =============================================================================
// THEME TOKEN ACCESS
// =============================================================================

/**
 * Get a nested theme token by dot-notation path
 * Provides type-safe access to any theme token (colors, gradients, component tokens)
 *
 * @param path - Dot-notation path to the token (e.g., 'primary.DEFAULT', 'badge.yellow.background')
 * @param tokenObject - The token object to search (defaults to all tokens)
 * @returns The token value
 * @throws Error if token path is invalid
 *
 * @example
 * getToken('primary.DEFAULT') => 'oklch(64% 0.18 15)'
 * getToken('badge.yellow.background') => 'oklch(82% 0.14 90)'
 */
export function getToken(path: string, tokenObject: any = { ...colors, ...tokens }): any {
  const parts = path.split('.');
  let result: any = tokenObject;

  for (const part of parts) {
    if (result && typeof result === 'object' && part in result) {
      result = result[part];
    } else {
      throw new Error(`Theme token not found: ${path}`);
    }
  }

  return result;
}

/**
 * Type-safe getter for color tokens
 * @param path - Color token path
 * @returns OKLCH color string
 *
 * @example
 * getColorToken('primary.DEFAULT') => 'oklch(64% 0.18 15)'
 */
export function getColorToken(path: string): string {
  return getColor(path);
}

/**
 * Get gradient CSS by name
 * @param name - Gradient preset name
 * @returns CSS gradient string
 *
 * @example
 * getGradientToken('hero') => 'radial-gradient(...)'
 */
export function getGradientToken(name: GradientName): string {
  const gradient = gradients[name];
  if (!gradient) {
    throw new Error(`Gradient token not found: ${name}`);
  }
  return gradient.css;
}

/**
 * Get component token by path
 * @param component - Component name (e.g., 'badge', 'button', 'card')
 * @param path - Dot-notation path within component tokens
 * @returns Token value
 *
 * @example
 * getComponentToken('badge', 'yellow.background') => 'oklch(82% 0.14 90)'
 * getComponentToken('button', 'sizes.lg.paddingX') => '2rem'
 */
export function getComponentToken(component: keyof ComponentTokens, path?: string): any {
  const componentTokens = tokens[component];
  if (!componentTokens) {
    throw new Error(`Component tokens not found: ${component}`);
  }

  if (!path) {
    return componentTokens;
  }

  return getToken(path, componentTokens);
}

// =============================================================================
// CSS VARIABLE CONVERSION
// =============================================================================

/**
 * Convert a theme token path to a CSS custom property name
 * @param path - Dot-notation token path
 * @param prefix - Custom property prefix (default: 'theme')
 * @returns CSS custom property name
 *
 * @example
 * toCSSVariable('primary.DEFAULT') => '--theme-primary'
 * toCSSVariable('badge.yellow.background', 'color') => '--color-badge-yellow-background'
 */
export function toCSSVariable(path: string, prefix = 'theme'): string {
  const parts = path.split('.');

  // Remove 'DEFAULT' from the path as it's redundant in CSS var names
  const filtered = parts.filter(part => part !== 'DEFAULT');

  return `--${prefix}-${filtered.join('-').toLowerCase()}`;
}

/**
 * Generate CSS custom properties object from theme tokens
 * Useful for inline styles or CSS-in-JS
 *
 * @param tokens - Object containing theme tokens
 * @param prefix - Custom property prefix
 * @returns Object with CSS custom property keys and token values
 *
 * @example
 * generateCSSVariables({ primary: 'oklch(...)' }, 'color')
 * => { '--color-primary': 'oklch(...)' }
 */
export function generateCSSVariables(
  tokens: Record<string, any>,
  prefix = 'theme'
): Record<string, string> {
  const cssVars: Record<string, string> = {};

  function flatten(obj: any, path: string[] = []): void {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = [...path, key];

      if (typeof value === 'string' || typeof value === 'number') {
        const varName = toCSSVariable(currentPath.join('.'), prefix);
        cssVars[varName] = String(value);
      } else if (typeof value === 'object' && value !== null) {
        flatten(value, currentPath);
      }
    }
  }

  flatten(tokens);
  return cssVars;
}

/**
 * Get inline style object with CSS custom properties
 * @param tokens - Object containing theme tokens
 * @param prefix - Custom property prefix
 * @returns React-compatible style object
 *
 * @example
 * const style = getInlineStyles({ primary: 'oklch(...)' })
 * <div style={style}>...</div>
 */
export function getInlineStyles(
  tokens: Record<string, any>,
  prefix = 'theme'
): React.CSSProperties {
  return generateCSSVariables(tokens, prefix) as React.CSSProperties;
}

// =============================================================================
// COMPONENT CLASS NAME GENERATION
// =============================================================================

/**
 * Generate component-specific class names with variants
 * Combines base classes, variant classes, and custom classes using cn()
 *
 * @param component - Component name
 * @param options - Class name options
 * @returns Merged class name string
 *
 * @example
 * componentClass('button', {
 *   variant: 'primary',
 *   size: 'lg',
 *   className: 'mt-4'
 * })
 * => 'button button--primary button--lg mt-4'
 */
export function componentClass(
  component: string,
  options: {
    variant?: string;
    size?: string;
    state?: string;
    className?: string;
  } = {}
): string {
  const { variant, size, state, className } = options;

  const classes = [
    component,
    variant && `${component}--${variant}`,
    size && `${component}--${size}`,
    state && `${component}--${state}`,
    className,
  ];

  return cn(...classes.filter(Boolean));
}

/**
 * Generate BEM-style class name
 * @param block - Block name
 * @param element - Element name (optional)
 * @param modifier - Modifier name (optional)
 * @returns BEM class name
 *
 * @example
 * bem('card', 'header', 'large') => 'card__header--large'
 * bem('button', null, 'primary') => 'button--primary'
 */
export function bem(block: string, element?: string, modifier?: string): string {
  let className = block;

  if (element) {
    className += `__${element}`;
  }

  if (modifier) {
    className += `--${modifier}`;
  }

  return className;
}

// =============================================================================
// RESPONSIVE HELPERS
// =============================================================================

/**
 * Create responsive class names for different breakpoints
 * @param baseClass - Base class name
 * @param breakpoints - Breakpoint-specific class names
 * @returns Merged responsive class names
 *
 * @example
 * responsive('text-sm', { md: 'text-base', lg: 'text-lg' })
 * => 'text-sm md:text-base lg:text-lg'
 */
export function responsive(
  baseClass: string,
  breakpoints: Partial<Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string>> = {}
): string {
  const classes = [baseClass];

  for (const [breakpoint, className] of Object.entries(breakpoints)) {
    if (className) {
      classes.push(`${breakpoint}:${className}`);
    }
  }

  return cn(...classes);
}

// =============================================================================
// COLOR MANIPULATION
// =============================================================================

/**
 * Add opacity to an OKLCH color
 * @param color - OKLCH color string
 * @param opacity - Opacity value (0-1)
 * @returns OKLCH color with opacity
 *
 * @example
 * addOpacity('oklch(64% 0.18 15)', 0.5) => 'oklch(64% 0.18 15 / 0.5)'
 */
export function addOpacity(color: string, opacity: number): string {
  // Validate opacity
  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity must be between 0 and 1');
  }

  // Remove existing alpha if present
  const baseColor = color.replace(/\s*\/\s*[\d.]+\s*\)$/, ')');

  // Add new alpha
  return baseColor.replace(')', ` / ${opacity})`);
}

/**
 * Get color with opacity from theme token path
 * @param path - Color token path
 * @param opacity - Opacity value (0-1)
 * @returns OKLCH color with opacity
 *
 * @example
 * getColorWithOpacity('primary.DEFAULT', 0.5) => 'oklch(64% 0.18 15 / 0.5)'
 */
export function getColorWithOpacity(path: string, opacity: number): string {
  const color = getColorToken(path);
  return addOpacity(color, opacity);
}

// =============================================================================
// TYPE GUARDS AND VALIDATION
// =============================================================================

/**
 * Check if a value is a valid token path
 * @param path - Token path to validate
 * @param tokenObject - Token object to check against
 * @returns True if path is valid
 */
export function isValidTokenPath(path: string, tokenObject: any = tokens): boolean {
  try {
    getToken(path, tokenObject);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate OKLCH color format
 * @param color - Color string to validate
 * @returns True if valid OKLCH color
 */
export function isValidOKLCH(color: string): boolean {
  const oklchRegex = /^oklch\(\s*\d+(?:\.\d+)?%\s+\d+(?:\.\d+)?\s+\d+(?:\.\d+)?(?:\s*\/\s*\d+(?:\.\d+)?)?\s*\)$/;
  return oklchRegex.test(color);
}

// =============================================================================
// UTILITY EXPORTS
// =============================================================================

/**
 * Re-export cn() function for convenience
 * This is the className merging utility from /lib/utils.ts
 */
export { cn };

/**
 * Batch export commonly used utilities
 */
export const themeUtils = {
  getToken,
  getColorToken,
  getGradientToken,
  getComponentToken,
  toCSSVariable,
  generateCSSVariables,
  getInlineStyles,
  componentClass,
  bem,
  responsive,
  addOpacity,
  getColorWithOpacity,
  isValidTokenPath,
  isValidOKLCH,
  cn,
} as const;

export default themeUtils;
