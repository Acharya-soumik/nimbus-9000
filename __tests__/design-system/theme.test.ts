/**
 * Theme Configuration Tests
 *
 * Focused tests validating core theme functionality:
 * - Color tokens are valid OKLCH values
 * - Programmatic color access functions work correctly
 * - TypeScript types enforce correct token usage
 */

import {
  colors,
  primary,
  success,
  warning,
  info,
  background,
  text,
  border,
  getColor,
  isValidOKLCH,
  getFlatColors,
  toCSSVar,
  withOpacity,
} from '@/lib/design-system/theme';

describe('Theme Color Tokens', () => {
  describe('OKLCH Color Validation', () => {
    test('all primary colors are valid OKLCH values', () => {
      expect(isValidOKLCH(primary.DEFAULT)).toBe(true);
      expect(isValidOKLCH(primary.bright)).toBe(true);
      expect(isValidOKLCH(primary.dark)).toBe(true);
      expect(isValidOKLCH(primary.coral)).toBe(true);
      expect(isValidOKLCH(primary.foreground)).toBe(true);
    });

    test('all success colors are valid OKLCH values', () => {
      expect(isValidOKLCH(success.DEFAULT)).toBe(true);
      expect(isValidOKLCH(success.base)).toBe(true);
      expect(isValidOKLCH(success.dark)).toBe(true);
      expect(isValidOKLCH(success.light)).toBe(true);
    });

    test('all warning colors are valid OKLCH values', () => {
      expect(isValidOKLCH(warning.DEFAULT)).toBe(true);
      expect(isValidOKLCH(warning.yellow)).toBe(true);
      expect(isValidOKLCH(warning.gold)).toBe(true);
    });

    test('background colors are valid OKLCH values', () => {
      expect(isValidOKLCH(background.white)).toBe(true);
      expect(isValidOKLCH(background.peach)).toBe(true);
      expect(isValidOKLCH(background.grayLight)).toBe(true);
    });

    test('text colors are valid OKLCH values', () => {
      expect(isValidOKLCH(text.heading)).toBe(true);
      expect(isValidOKLCH(text.body)).toBe(true);
      expect(isValidOKLCH(text.muted)).toBe(true);
    });

    test('border colors are valid OKLCH values', () => {
      expect(isValidOKLCH(border.DEFAULT)).toBe(true);
      expect(isValidOKLCH(border.input)).toBe(true);
    });

    test('gradient color stops are valid OKLCH values', () => {
      expect(isValidOKLCH(colors.gradients.hero.from)).toBe(true);
      expect(isValidOKLCH(colors.gradients.hero.to)).toBe(true);
      expect(isValidOKLCH(colors.gradients.pricing.from)).toBe(true);
      expect(isValidOKLCH(colors.gradients.pricing.to)).toBe(true);
    });
  });

  describe('Programmatic Color Access', () => {
    test('getColor returns correct color for valid path', () => {
      expect(getColor('primary.DEFAULT')).toBe('oklch(64% 0.18 15)');
      expect(getColor('success.light')).toBe('oklch(92% 0.06 145)');
      expect(getColor('warning.yellow')).toBe('oklch(82% 0.14 90)');
      expect(getColor('text.heading')).toBe('oklch(15% 0 0)');
    });

    test('getColor throws error for invalid path', () => {
      expect(() => getColor('invalid.path')).toThrow('Color token not found');
      expect(() => getColor('primary.nonexistent')).toThrow('Color token not found');
    });

    test('getFlatColors returns all colors with dot notation keys', () => {
      const flatColors = getFlatColors();

      expect(flatColors['primary.DEFAULT']).toBe('oklch(64% 0.18 15)');
      expect(flatColors['success.light']).toBe('oklch(92% 0.06 145)');
      expect(flatColors['background.peach']).toBe('oklch(98% 0.01 30)');
      expect(Object.keys(flatColors).length).toBeGreaterThan(30);
    });

    test('toCSSVar converts color paths to CSS custom property names', () => {
      expect(toCSSVar('primary.DEFAULT')).toBe('--color-primary');
      expect(toCSSVar('success.light')).toBe('--color-success-light');
      expect(toCSSVar('warning.yellowBright')).toBe('--color-warning-yellowbright');
      expect(toCSSVar('background.grayLight')).toBe('--color-background-graylight');
    });

    test('withOpacity adds opacity to color tokens', () => {
      const result = withOpacity('primary.DEFAULT', 0.5);
      expect(result).toContain('oklch(64% 0.18 15 / 0.5)');

      const resultWithExisting = withOpacity('special.backdrop', 0.3);
      expect(resultWithExisting).toContain('/ 0.3)');
    });
  });

  describe('TypeScript Type Safety', () => {
    test('color object structure matches ThemeColors type', () => {
      expect(colors).toHaveProperty('primary');
      expect(colors).toHaveProperty('success');
      expect(colors).toHaveProperty('warning');
      expect(colors).toHaveProperty('info');
      expect(colors).toHaveProperty('background');
      expect(colors).toHaveProperty('text');
      expect(colors).toHaveProperty('border');
      expect(colors).toHaveProperty('special');
      expect(colors).toHaveProperty('dark');
      expect(colors).toHaveProperty('gradients');
    });

    test('primary color tokens have expected properties', () => {
      expect(primary).toHaveProperty('DEFAULT');
      expect(primary).toHaveProperty('bright');
      expect(primary).toHaveProperty('dark');
      expect(primary).toHaveProperty('coral');
      expect(primary).toHaveProperty('foreground');
    });

    test('gradient presets have from and to properties', () => {
      expect(colors.gradients.hero).toHaveProperty('from');
      expect(colors.gradients.hero).toHaveProperty('to');
      expect(colors.gradients.pricing).toHaveProperty('from');
      expect(colors.gradients.pricing).toHaveProperty('to');
    });
  });

  describe('Color Token Values', () => {
    test('OKLCH values follow correct format', () => {
      // Primary color should have lightness around 64%, chroma 0.18, hue 15
      expect(primary.DEFAULT).toMatch(/oklch\(64% 0\.18 15\)/);

      // Success color should have green hue (around 145-165)
      expect(success.DEFAULT).toMatch(/oklch\(\d+% 0\.\d+ 16[0-9]\)/);

      // White should have 100% lightness and 0 chroma
      expect(background.white).toBe('oklch(100% 0 0)');

      // Backdrop should have 0% lightness with alpha
      expect(colors.special.backdrop).toMatch(/oklch\(0% 0 0 \/ 0\.\d+\)/);
    });
  });
});
