"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Legal Notice", href: "/send-legal-notice" },
  { label: "Consultation", href: "/legal-consultation" },
  { label: "Agreement Drafting", href: "/agreement-drafting" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function MobileNavClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open Menu"
        onClick={() => setOpen(true)}
        className="p-2 text-text-heading"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white dark:bg-black p-6"
          >
            <button
              className="mb-8 p-2 text-text-heading"
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col gap-6 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-text-body hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3">
              <Link
                href="/send-legal-notice"
                onClick={() => setOpen(false)}
                className="block w-full rounded-xl bg-primary py-3 text-center text-base font-semibold text-white shadow-md"
              >
                Send Legal Notice
              </Link>
              <Link
                href="/legal-consultation"
                onClick={() => setOpen(false)}
                className="block w-full rounded-xl border-2 border-primary py-3 text-center text-base font-semibold text-primary"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
