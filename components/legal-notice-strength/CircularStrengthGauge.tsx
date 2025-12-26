"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CircularStrengthGaugeProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  animate?: boolean;
}

/**
 * CircularStrengthGauge Component
 *
 * SVG-based circular progress indicator for displaying case strength score.
 * - Animates from 0 to target score on mount
 * - Dynamic color based on score bucket (red/yellow/green)
 * - Displays percentage in center
 */
export function CircularStrengthGauge({
  score,
  size = 120,
  strokeWidth = 10,
  className,
  animate = true,
}: CircularStrengthGaugeProps) {
  const [displayScore, setDisplayScore] = React.useState(animate ? 0 : score);

  // Calculate circle properties
  const radius = 40; // Percentage of viewBox
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (displayScore / 100) * circumference;

  // Determine color based on score
  const getColor = (value: number): string => {
    if (value >= 80) return "text-green-500"; // Very Strong
    if (value >= 60) return "text-green-500"; // Strong
    if (value >= 40) return "text-yellow-500"; // Moderate
    return "text-red-500"; // Weak
  };

  const colorClass = getColor(displayScore);

  // Animate score on mount
  React.useEffect(() => {
    if (!animate) return;

    const duration = 1000; // 1 second
    const steps = 60;
    const stepValue = score / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setDisplayScore(Math.min(currentStep * stepValue, score));

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayScore(score);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [score, animate]);

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      {/* SVG Circle */}
      <svg
        className="w-full h-full -rotate-90"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth / 5}
          fill="transparent"
          className="text-gray-200"
        />

        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth / 5}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn(
            "transition-all duration-1000 ease-out",
            colorClass
          )}
        />
      </svg>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-text-heading">
          {Math.round(displayScore)}%
        </span>
      </div>
    </div>
  );
}
