"use client";

import {
  InfoSectionVariant1,
  type InfoSectionVariant1Props,
} from "./InfoSectionVariant1";
import {
  InfoSectionVariant2,
  type InfoSectionVariant2Props,
} from "./InfoSectionVariant2";
import {
  InfoSectionVariant3,
  type InfoSectionVariant3Props,
} from "./InfoSectionVariant3";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export type InfoSectionVariant = 1 | 2 | 3;

export type InfoSectionProps =
  | ({ variant: 1 } & InfoSectionVariant1Props)
  | ({ variant: 2 } & InfoSectionVariant2Props)
  | ({ variant: 3 } & InfoSectionVariant3Props);

/* =============================================================================
 * MAIN COMPONENT
 * Unified InfoSection component that renders different variants based on prop
 * ============================================================================= */

export function InfoSection(props: InfoSectionProps) {
  switch (props.variant) {
    case 1: {
      const { variant, ...rest } = props;
      return <InfoSectionVariant1 {...rest} />;
    }
    case 2: {
      const { variant, ...rest } = props;
      return <InfoSectionVariant2 {...rest} />;
    }
    case 3: {
      const { variant, ...rest } = props;
      return <InfoSectionVariant3 {...rest} />;
    }
    default:
      return null;
  }
}

export default InfoSection;

/* =============================================================================
 * RE-EXPORTS
 * Export individual variants for direct usage
 * ============================================================================= */

export { InfoSectionVariant1 } from "./InfoSectionVariant1";
export { InfoSectionVariant2 } from "./InfoSectionVariant2";
export { InfoSectionVariant3 } from "./InfoSectionVariant3";

export type { InfoSectionVariant1Props } from "./InfoSectionVariant1";
export type { InfoSectionVariant2Props } from "./InfoSectionVariant2";
export type { InfoSectionVariant3Props } from "./InfoSectionVariant3";

