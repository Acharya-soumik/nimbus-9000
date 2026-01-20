"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration}>
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  // Use pure CSS animation instead of useAnimationFrame
  // This runs on the GPU and doesn't block the main thread
  const animationDuration = `${duration}ms`;
  
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: rx || '30%' }}>
      <div 
        className="absolute w-20 h-20"
        style={{
          animation: `movingBorder ${animationDuration} linear infinite`,
          top: '-10px',
          left: '-10px',
        }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes movingBorder {
          0% {
            top: -10px;
            left: -10px;
          }
          25% {
            top: -10px;
            left: calc(100% - 10px);
          }
          50% {
            top: calc(100% - 10px);
            left: calc(100% - 10px);
          }
          75% {
            top: calc(100% - 10px);
            left: -10px;
          }
          100% {
            top: -10px;
            left: -10px;
          }
        }
      `}</style>
    </div>
  );
};
