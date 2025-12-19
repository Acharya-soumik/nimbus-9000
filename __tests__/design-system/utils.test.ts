/**
 * Design System Utils Tests
 *
 * Focused tests validating critical utility functionality:
 * - Token access functions work correctly
 * - CSS variable conversion functions
 * - TypeScript types enforce proper usage
 */

import { describe, expect, test } from '@jest/globals';
import {
  getToken,
  getColorToken,
  getComponentToken,
  toCSSVariable,
  componentClass,
  addOpacity,
  isValidOKLCH,
} from '@/lib/design-system/utils';

describe('Design System Utils', () => {
  describe('Token Access Functions', () => {
    test('should get color tokens by path', () => {
      const primaryColor = getColorToken('primary.DEFAULT');
      expect(primaryColor).toBeTruthy();
      expect(typeof primaryColor).toBe('string');
      expect(primaryColor).toContain('oklch');
    });

    test('should get component tokens by path', () => {
      const badgeYellow = getComponentToken('badge', 'yellow.background');
      expect(badgeYellow).toBeTruthy();
      expect(typeof badgeYellow).toBe('string');

      const buttonSizeLg = getComponentToken('button', 'sizes.lg.paddingX');
      expect(buttonSizeLg).toBe('2rem');
    });

    test('should throw error for invalid token path', () => {
      expect(() => getColorToken('invalid.path.here')).toThrow();
      expect(() => getComponentToken('badge', 'nonexistent.token')).toThrow();
    });
  });

  describe('CSS Variable Conversion', () => {
    test('should convert token path to CSS variable name', () => {
      expect(toCSSVariable('primary.DEFAULT')).toBe('--theme-primary');
      expect(toCSSVariable('badge.yellow.background', 'color')).toBe('--color-badge-yellow-background');
    });

    test('should remove DEFAULT from CSS variable names', () => {
      const cssVar = toCSSVariable('primary.DEFAULT');
      expect(cssVar).not.toContain('default');
      expect(cssVar).toBe('--theme-primary');
    });
  });

  describe('Component Class Name Generation', () => {
    test('should generate component class with variants', () => {
      const className = componentClass('button', {
        variant: 'primary',
        size: 'lg',
      });

      expect(className).toContain('button');
      expect(className).toContain('button--primary');
      expect(className).toContain('button--lg');
    });

    test('should merge custom className', () => {
      const className = componentClass('card', {
        className: 'mt-4 shadow-lg',
      });

      expect(className).toContain('card');
      expect(className).toContain('mt-4');
      expect(className).toContain('shadow-lg');
    });
  });

  describe('Color Manipulation', () => {
    test('should add opacity to OKLCH color', () => {
      const baseColor = 'oklch(64% 0.18 15)';
      const withOpacity = addOpacity(baseColor, 0.5);

      expect(withOpacity).toContain('/ 0.5');
      expect(withOpacity).toBe('oklch(64% 0.18 15 / 0.5)');
    });

    test('should replace existing opacity', () => {
      const colorWithAlpha = 'oklch(64% 0.18 15 / 0.8)';
      const newOpacity = addOpacity(colorWithAlpha, 0.3);

      expect(newOpacity).toContain('/ 0.3');
      expect(newOpacity).not.toContain('/ 0.8');
    });

    test('should throw error for invalid opacity values', () => {
      const color = 'oklch(64% 0.18 15)';
      expect(() => addOpacity(color, -0.5)).toThrow();
      expect(() => addOpacity(color, 1.5)).toThrow();
    });
  });

  describe('OKLCH Validation', () => {
    test('should validate correct OKLCH format', () => {
      expect(isValidOKLCH('oklch(64% 0.18 15)')).toBe(true);
      expect(isValidOKLCH('oklch(64% 0.18 15 / 0.5)')).toBe(true);
      expect(isValidOKLCH('oklch(100% 0 0)')).toBe(true);
    });

    test('should reject invalid OKLCH format', () => {
      expect(isValidOKLCH('rgb(255, 0, 0)')).toBe(false);
      expect(isValidOKLCH('#FF0000')).toBe(false);
      expect(isValidOKLCH('oklch(invalid)')).toBe(false);
      expect(isValidOKLCH('not a color')).toBe(false);
    });
  });
});
