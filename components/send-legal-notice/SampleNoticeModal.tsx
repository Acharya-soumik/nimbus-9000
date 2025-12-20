"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface SampleNoticeContent {
  /** Date of the notice */
  date: string;
  /** Title/subject of the legal notice */
  title: string;
  /** The body paragraphs of the notice */
  bodyParagraphs: string[];
}

export interface SampleNoticeModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal open state changes */
  onOpenChange: (open: boolean) => void;
  /** Optional className for the modal content */
  className?: string;
  /** The category/type of notice (e.g., "Money Recovery", "Divorce") */
  noticeCategory: string;
  /** Header subtitle text */
  headerSubtitle?: string;
  /** The notice content to display */
  noticeContent: SampleNoticeContent;
  /** CTA section icon label */
  ctaLabel?: string;
  /** CTA section subtitle */
  ctaSubtitle?: string;
  /** CTA button text */
  ctaButtonText?: string;
  /** Callback when CTA button is clicked */
  onCtaClick?: () => void;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* =============================================================================
 * NOTICE DOCUMENT COMPONENT
 * ============================================================================= */

interface NoticeDocumentProps {
  content: SampleNoticeContent;
}

function NoticeDocument({ content }: NoticeDocumentProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Date */}
      <p className="mb-5 text-center font-mono text-sm text-text-body sm:text-base">
        Dated: {content.date}
      </p>

      {/* Notice Title */}
      <div className="mb-6 text-center">
        <h4 className="inline-block border-b-2 border-text-heading pb-1 font-mono text-sm font-bold uppercase tracking-wide text-text-heading sm:text-base">
          {content.title}
        </h4>
      </div>

      {/* Body Paragraphs */}
      <div className="space-y-4 font-mono text-xs leading-relaxed text-text-body sm:text-sm">
        {content.bodyParagraphs.map((paragraph, index) => (
          <p key={index} className="text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

/* =============================================================================
 * SHARED COMPONENTS
 * ============================================================================= */

interface HeaderContentProps {
  noticeCategory: string;
  headerSubtitle: string;
}

function HeaderContent({ noticeCategory, headerSubtitle }: HeaderContentProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <DocumentIcon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-text-heading sm:text-xl pr-8">
          Sample Legal Notice — {noticeCategory}
        </h3>
        <p className="mt-1 text-sm text-text-muted">{headerSubtitle}</p>
      </div>
    </div>
  );
}

interface FooterContentProps {
  ctaLabel: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  onCtaClick?: () => void;
}

function FooterContent({
  ctaLabel,
  ctaSubtitle,
  ctaButtonText,
  onCtaClick,
}: FooterContentProps) {
  return (
    <div className="space-y-4">
      {/* CTA Info */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success/10">
          <PenIcon className="h-5 w-5 text-success" />
        </div>
        <div>
          <p className="text-sm font-semibold text-text-heading sm:text-base">
            {ctaLabel}
          </p>
          <p className="text-xs text-text-muted sm:text-sm">{ctaSubtitle}</p>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onCtaClick}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-text-heading px-6 py-4 text-base font-semibold text-white transition-all hover:bg-text-heading/90 active:scale-[0.98]"
      >
        {ctaButtonText}
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function SampleNoticeModal({
  open,
  onOpenChange,
  className,
  noticeCategory,
  headerSubtitle = "Actual notices are custom drafted as per your specific case details.",
  noticeContent,
  ctaLabel = "Need a notice like this?",
  ctaSubtitle = "Our lawyers draft & send it for you.",
  ctaButtonText = "Generate Your Own Notice",
  onCtaClick,
}: SampleNoticeModalProps) {
  const isMobile = useIsMobile();

  // Mobile: Full-height bottom sheet
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent
          className={cn(
            // Full height drawer - no mt-24, use max-h-[96vh] for nearly full screen
            "!mt-0 !max-h-[96vh] h-[96vh] flex flex-col",
            className
          )}
        >
          {/* Drag handle */}
          <div className="mx-auto my-3 h-1.5 w-12 shrink-0 rounded-full bg-gray-300" />

          {/* Header - Fixed */}
          <DrawerHeader className="shrink-0 border-b-0 px-5 pb-4 pt-0">
            <div className="flex items-start justify-between gap-2">
              <HeaderContent
                noticeCategory={noticeCategory}
                headerSubtitle={headerSubtitle}
              />
              <DrawerClose className="shrink-0 rounded-full p-2 hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5 text-text-muted" />
              </DrawerClose>
            </div>
            <DrawerTitle className="sr-only">
              Sample Legal Notice — {noticeCategory}
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              {headerSubtitle}
            </DrawerDescription>
          </DrawerHeader>

          {/* Body - Scrollable only when content overflows */}
          <div className="flex-1 overflow-y-auto px-5 pb-4">
            <NoticeDocument content={noticeContent} />
          </div>

          {/* Footer - Fixed at bottom */}
          <div className="shrink-0 border-t border-gray-100 bg-white px-5 pb-6 pt-4">
            <FooterContent
              ctaLabel={ctaLabel}
              ctaSubtitle={ctaSubtitle}
              ctaButtonText={ctaButtonText}
              onCtaClick={onCtaClick}
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  // Desktop: Dialog/Modal
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex max-h-[90vh] flex-col overflow-hidden sm:max-w-lg",
          className
        )}
      >
        {/* Header */}
        <DialogHeader className="shrink-0 px-6 pt-6">
          <HeaderContent
            noticeCategory={noticeCategory}
            headerSubtitle={headerSubtitle}
          />
          <DialogTitle className="sr-only">
            Sample Legal Notice — {noticeCategory}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {headerSubtitle}
          </DialogDescription>
        </DialogHeader>

        {/* Body - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <NoticeDocument content={noticeContent} />
        </div>

        {/* Footer - Fixed */}
        <div className="shrink-0 border-t border-gray-100 px-6 pb-6 pt-4">
          <FooterContent
            ctaLabel={ctaLabel}
            ctaSubtitle={ctaSubtitle}
            ctaButtonText={ctaButtonText}
            onCtaClick={onCtaClick}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SampleNoticeModal;
