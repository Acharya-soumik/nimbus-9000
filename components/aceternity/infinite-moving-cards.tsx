"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = <T,>({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  renderItem,
}: {
  items: T[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  renderItem?: (item: T) => React.ReactNode;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative max-w-full shrink-0 md:w-auto"
            key={idx}
          >
            {renderItem ? renderItem(item) : (
             <div className="relative w-[350px] max-w-full shrink-0 overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-md md:w-[450px]">
                {/* Gradient Left Border */}
                <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b from-warning-yellow via-warning to-primary" />
    
                <blockquote className="pl-2">
                  {/* Quote Icon */}
                  <svg
                    className="mb-4 h-8 w-8 text-primary opacity-40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
    
                  <span className="relative z-20 text-base leading-relaxed font-normal text-text-body">
                    {(item as any).quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-semibold text-text-heading">
                        {(item as any).name}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal text-text-medium">
                        {(item as any).title}
                      </span>
                    </span>
                  </div>
                </blockquote>
             </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
