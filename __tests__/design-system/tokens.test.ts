/**
 * Design Token Tests
 *
 * Focused tests validating critical design token functionality:
 * - Badge tokens return correct values
 * - Button tokens support multiple size variants
 * - Card tokens provide proper shadow and spacing
 */

import { describe, expect, test } from '@jest/globals';
import {
  badgeTokens,
  buttonTokens,
  cardTokens,
  inputTokens,
  modalTokens,
  progressTokens,
  shadows,
  radii,
  spacing,
  transitions,
  zIndex,
} from '@/lib/design-system/tokens';

describe('Design Tokens', () => {
  describe('Badge Tokens', () => {
    test('should return correct background and text colors for all variants', () => {
      // Test yellow badge
      expect(badgeTokens.yellow.background).toBeTruthy();
      expect(badgeTokens.yellow.text).toBeTruthy();

      // Test green badge
      expect(badgeTokens.green.background).toBeTruthy();
      expect(badgeTokens.green.text).toBeTruthy();

      // Test orange badge
      expect(badgeTokens.orange.background).toBeTruthy();
      expect(badgeTokens.orange.text).toBeTruthy();
    });

    test('should have correct badge styling properties', () => {
      expect(badgeTokens.padding.x).toBe('0.75rem'); // 12px
      expect(badgeTokens.padding.y).toBe('0.25rem'); // 4px
      expect(badgeTokens.borderRadius).toBe('9999px');
      expect(badgeTokens.fontSize).toBe('0.75rem'); // 12px
      expect(badgeTokens.fontWeight).toBe(600); // semibold
    });
  });

  describe('Button Tokens', () => {
    test('should support multiple size variants', () => {
      // Small button
      expect(buttonTokens.sizes.sm.paddingX).toBe('1rem');
      expect(buttonTokens.sizes.sm.paddingY).toBe('0.5rem');
      expect(buttonTokens.sizes.sm.borderRadius).toBe('0.5rem');

      // Medium button
      expect(buttonTokens.sizes.md.paddingX).toBe('1.5rem');
      expect(buttonTokens.sizes.md.paddingY).toBe('0.75rem');
      expect(buttonTokens.sizes.md.borderRadius).toBe('0.75rem');

      // Large button
      expect(buttonTokens.sizes.lg.paddingX).toBe('2rem');
      expect(buttonTokens.sizes.lg.paddingY).toBe('1rem');
      expect(buttonTokens.sizes.lg.borderRadius).toBe('1rem');
    });

    test('should have primary and secondary variant colors', () => {
      expect(buttonTokens.primary.background).toBeTruthy();
      expect(buttonTokens.primary.foreground).toBeTruthy();
      expect(buttonTokens.primary.hover).toBeTruthy();

      expect(buttonTokens.secondary.background).toBeTruthy();
      expect(buttonTokens.secondary.foreground).toBeTruthy();
      expect(buttonTokens.secondary.border).toBeTruthy();
    });
  });

  describe('Card Tokens', () => {
    test('should provide proper shadow and spacing', () => {
      // Shadow
      expect(cardTokens.shadow).toBeTruthy();
      expect(cardTokens.shadowLg).toBeTruthy();

      // Padding
      expect(cardTokens.padding).toBe('1.5rem'); // 24px
      expect(cardTokens.paddingLg).toBe('2rem'); // 32px

      // Border radius
      expect(cardTokens.borderRadius).toBe('1rem'); // 16px
      expect(cardTokens.borderRadiusLg).toBe('1.5rem'); // 24px
    });

    test('should have background and border colors', () => {
      expect(cardTokens.background).toBeTruthy();
      expect(cardTokens.border).toBeTruthy();
    });
  });

  describe('Shadow System', () => {
    test('should define 7-level shadow system', () => {
      expect(shadows['2xs']).toBeTruthy();
      expect(shadows.xs).toBeTruthy();
      expect(shadows.sm).toBeTruthy();
      expect(shadows.md).toBeTruthy();
      expect(shadows.lg).toBeTruthy();
      expect(shadows.xl).toBeTruthy();
      expect(shadows['2xl']).toBeTruthy();
    });

    test('should have component-specific shadow aliases', () => {
      expect(shadows.card).toBe(shadows.xs);
      expect(shadows.cardHover).toBe(shadows.md);
      expect(shadows.modal).toBe(shadows['2xl']);
      expect(shadows.button).toBe(shadows.sm);
    });
  });

  describe('Border Radius System', () => {
    test('should define complete radius scale', () => {
      expect(radii['2xs']).toBe('0.25rem'); // 4px
      expect(radii.xs).toBe('0.375rem'); // 6px
      expect(radii.sm).toBe('0.5rem'); // 8px
      expect(radii.md).toBe('0.75rem'); // 12px
      expect(radii.lg).toBe('1rem'); // 16px
      expect(radii.xl).toBe('1.25rem'); // 20px
      expect(radii['2xl']).toBe('1.5rem'); // 24px
      expect(radii.full).toBe('9999px');
    });

    test('should have component-specific radius aliases', () => {
      expect(radii.card).toBe(radii.lg);
      expect(radii.button).toBe(radii.md);
      expect(radii.badge).toBe(radii.full);
      expect(radii.input).toBe(radii.md);
      expect(radii.modal).toBe(radii['2xl']);
    });
  });

  describe('Spacing System', () => {
    test('should define component-specific spacing', () => {
      expect(spacing.badge).toBe('0.75rem');
      expect(spacing.card).toBe('1.5rem');
      expect(spacing.cardLg).toBe('2rem');
      expect(spacing.section).toBe('4rem');
      expect(spacing.sectionLg).toBe('6rem');
      expect(spacing.formGap).toBe('1rem');
    });
  });

  describe('Transition System', () => {
    test('should define transition durations', () => {
      expect(transitions.fast).toBe('150ms');
      expect(transitions.base).toBe('200ms');
      expect(transitions.slow).toBe('300ms');
    });
  });

  describe('Z-Index System', () => {
    test('should define z-index layers in correct order', () => {
      expect(zIndex.dropdown).toBe(1000);
      expect(zIndex.sticky).toBe(1020);
      expect(zIndex.fixed).toBe(1030);
      expect(zIndex.modalBackdrop).toBe(1040);
      expect(zIndex.modal).toBe(1050);
      expect(zIndex.popover).toBe(1060);
      expect(zIndex.tooltip).toBe(1070);

      // Verify layers are in ascending order
      expect(zIndex.modal).toBeGreaterThan(zIndex.modalBackdrop);
      expect(zIndex.tooltip).toBeGreaterThan(zIndex.modal);
    });
  });
});
