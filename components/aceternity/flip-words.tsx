"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Calculate minimum width based on longest word to prevent CLS
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    const computedStyle = window.getComputedStyle(containerRef.current);
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.font = computedStyle.font;
    tempSpan.style.fontSize = computedStyle.fontSize;
    tempSpan.style.fontWeight = computedStyle.fontWeight;
    tempSpan.style.fontFamily = computedStyle.fontFamily;
    tempSpan.style.letterSpacing = computedStyle.letterSpacing;
    document.body.appendChild(tempSpan);
    
    let maxWidth = 0;
    words.forEach(word => {
      tempSpan.textContent = word;
      maxWidth = Math.max(maxWidth, tempSpan.offsetWidth);
    });
    document.body.removeChild(tempSpan);
    setMinWidth(maxWidth + 2); // Add small buffer
  }, [words]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span
      ref={containerRef}
      className={cn(
        "inline-block transition-opacity duration-500 ease-out",
        className
      )}
      key={currentIndex}
      style={{
        animation: "flipIn 0.5s ease-out",
        minWidth: minWidth ? `${minWidth}px` : undefined,
        contain: 'layout style',
      }}
    >
      {words[currentIndex]}
      <style jsx>{`
        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  );
};
