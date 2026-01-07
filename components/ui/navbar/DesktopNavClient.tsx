"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface NavItem {
  label: string;
  href?: string;
  content?: string;
}

const items: NavItem[] = [
  { label: "Legal Notice", href: "/send-legal-notice" },
  { label: "Consultation", href: "/legal-consultation" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
  { label: "Agreement Drafting", href: "/agreement-drafting" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function DesktopNavClient() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative flex items-center gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => item.content && setActive(item.label)}
          onMouseLeave={() => setActive(null)}
          className="relative"
        >
          {item.href ? (
            <Link
              href={item.href}
              className="cursor-pointer font-medium text-text-body hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="cursor-pointer font-medium">{item.label}</span>
          )}

          {item.content && active === item.label && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2 bg-white dark:bg-black border rounded-xl shadow-xl p-4 w-64"
            >
              {item.content}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
