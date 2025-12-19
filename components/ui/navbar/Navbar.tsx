"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNavClient from "./MobileNavClient";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Always show navbar at the very top of the page
    if (currentScrollY < 10) {
      setIsAtTop(true);
      setVisible(true);
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
    };
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-black border-b mb-[74px]"
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
    </motion.header>
  );
}
