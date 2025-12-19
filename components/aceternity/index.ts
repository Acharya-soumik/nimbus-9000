/**
 * Aceternity UI Components - Centralized Exports
 *
 * All Aceternity components are theme-aware and use CSS custom properties.
 * Components using framer-motion animations should be lazy-loaded for optimal performance.
 *
 * Lazy Loading Recommendations:
 * - All components in this package use framer-motion
 * - Import them dynamically with next/dynamic for SSR: false
 * - See /components/aceternity/lazy.ts for pre-configured lazy loaders
 */

export { FlipWords } from "./flip-words";

export { Timeline } from "./timeline";

export { TextGenerateEffect } from "./text-generate-effect";

export { HeroHighlight, Highlight } from "./hero-highlight";

export { MovingBorder } from "./moving-border-cta";

export { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
