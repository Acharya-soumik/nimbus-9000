"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNavClient from "./MobileNavClient";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  if (pathname === "/start-legal-notice") return null;
  const [isAtTop, setIsAtTop] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  const rafIdRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    // Skip if RAF already scheduled - prevents queuing multiple callbacks
    if (rafIdRef.current !== null) return;

    rafIdRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the very top of the page
      if (currentScrollY < 10) {
        setIsAtTop(true);
        setVisible(true);
        rafIdRef.current = null;
        return;
      }

      setIsAtTop(false);

      // Hide navbar while scrolling
      setVisible(false);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Show navbar after scrolling stops (150ms delay)
      scrollTimeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 150);

      lastScrollY.current = currentScrollY;
      rafIdRef.current = null;
    });
  }, []);

  useEffect(() => {
    // Set initial state
    setIsAtTop(window.scrollY < 10);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-white dark:bg-black border-b mb-[74px]",
        "transition-all duration-300 ease-in-out",
        visible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
      )}
    >
      <div className="mx-auto max-w-7xl h-[72px] flex items-center justify-between px-4">
        {/* Logo – server rendered */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="VakilTech"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <DesktopNav />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileNavClient />
        </div>
      </div>
    </header>
  );
}
