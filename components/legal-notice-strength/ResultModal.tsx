"use client";

import * as React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { CircularStrengthGauge } from "./CircularStrengthGauge";
import { getScoreBucket, type ScoreBucket } from "./calculator-data";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/mixpanel";

export interface CaseStrengthResult {
  score: number;
  confidence: "low" | "medium" | "high";
  strength_factors?: string[];
  risk_factors?: string[];
  notice_type: string;
}

interface ResultModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: CaseStrengthResult;
  onPrimaryCTA: () => void;
  onSecondaryCTA?: () => void;
}

/**
 * ResultModal Component
 *
 * Displays the case strength assessment result in a modal/drawer.
 * Shows:
 * - Circular strength gauge with score
 * - Case strength label and recommendation
 * - Key insights (strengths/risks)
 * - Action buttons based on score bucket
 */
export function ResultModal({
  open,
  onOpenChange,
  result,
  onPrimaryCTA,
  onSecondaryCTA,
}: ResultModalProps) {
  const bucket = getScoreBucket(result.score);

  React.useEffect(() => {
    if (open) {
      trackEvent("Strength Checker Result Viewed", {
        score: result.score,
        confidence: result.confidence,
        bucket: getScoreBucket(result.score).label,
        notice_type: result.notice_type,
      });
    }
  }, [open, result]);

  const getStatusLabel = (bucket: ScoreBucket): string => {
    return bucket.label;
  };

  const getSummaryText = (bucket: ScoreBucket): string => {
    return bucket.recommendation;
  };

  const getConfidenceBadge = (
    confidence: "low" | "medium" | "high"
  ): React.ReactNode => {
    const badges = {
      low: (
        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
          Low Confidence
        </span>
      ),
      medium: (
        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
          Medium Confidence
        </span>
      ),
      high: (
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
          High Confidence
        </span>
      ),
    };
    return badges[confidence];
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="max-w-md">
        <ModalHeader className="text-center">
          <ModalTitle>Case Strength Assessment</ModalTitle>
          <div className="mt-2 flex items-center justify-center gap-2">
            {getConfidenceBadge(result.confidence)}
          </div>
        </ModalHeader>

        <ModalBody className="flex flex-col items-center gap-6 max-h-[60vh] overflow-y-auto sm:max-h-none scrollbar-hide">
          {/* Circular Progress Gauge */}
          <CircularStrengthGauge score={result.score} size={140} />

          {/* Status Label */}
          <div className="text-center space-y-2">
            <h3
              className={cn(
                "text-lg font-semibold",
                bucket.color === "red" && "text-red-600",
                bucket.color === "yellow" && "text-yellow-600",
                bucket.color === "green" && "text-green-600"
              )}
            >
              {getStatusLabel(bucket)}
            </h3>
            <p className="text-sm text-text-muted max-w-sm">
              {getSummaryText(bucket)}
            </p>
          </div>

          {/* Strength Factors */}
          {result.strength_factors && result.strength_factors.length > 0 && (
            <div className="w-full space-y-2">
              <h4 className="text-sm font-semibold text-text-heading">
                Strengths:
              </h4>
              <ul className="space-y-1">
                {result.strength_factors.map((factor, index) => (
                  <li
                    key={index}
                    className="text-sm text-text-medium flex items-start gap-2"
                  >
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Risk Factors */}
          {result.risk_factors && result.risk_factors.length > 0 && (
            <div className="w-full space-y-2">
              <h4 className="text-sm font-semibold text-text-heading">
                Areas to Consider:
              </h4>
              <ul className="space-y-1">
                {result.risk_factors.map((risk, index) => (
                  <li
                    key={index}
                    className="text-sm text-text-medium flex items-start gap-2"
                  >
                    <span className="text-yellow-500 mt-0.5">⚠</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal Disclaimer */}
          <div className="w-full rounded-lg bg-gray-50 p-3 text-xs text-text-muted">
            <p>
              This assessment is preliminary guidance only. Your actual case
              strength can only be determined by a lawyer reviewing all
              documents and circumstances.
            </p>
          </div>
        </ModalBody>

        <ModalFooter className="flex flex-col gap-3 pb-8 sm:pb-3 sm:flex-row-reverse sm:gap-2">
          <Button onClick={onPrimaryCTA} className="w-full sm:w-auto">
            {bucket.primary_cta}
          </Button>
          {bucket.secondary_cta && onSecondaryCTA && (
            <Button
              onClick={onSecondaryCTA}
              variant="outline"
              className="w-full sm:w-auto"
            >
              {bucket.secondary_cta}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
