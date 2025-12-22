"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MovingBorder } from "@/components/aceternity/moving-border-cta";

interface MovingBorderInputWrapperProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  borderRadius?: string;
  containerClassName?: string;
  borderClassName?: string;
}

export function MovingBorderInputWrapper({
  children,
  className,
  duration = 3000,
  borderRadius = "0.75rem", // Default to match typical input radius
  containerClassName,
  borderClassName,
}: MovingBorderInputWrapperProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-transparent p-[2px]",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(var(--color-primary)_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-white backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
