"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NOTICE_TYPES, type NoticeType } from "./calculator-data";

interface NoticeTypeSelectorProps {
  onSelect: (noticeType: NoticeType) => void;
  className?: string;
}

/**
 * NoticeTypeSelector Component
 *
 * Displays available notice types for user selection.
 */
import { SimpleCombobox } from "@/components/ui/simple-combobox";
import { Button } from "@/components/ui/button";

// ... existing imports

export function NoticeTypeSelector({
  onSelect,
  className,
}: NoticeTypeSelectorProps) {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const selectedNoticeType = React.useMemo(() => 
    NOTICE_TYPES.find((t) => t.notice_type === selectedValue),
  [selectedValue]);

  const comboboxOptions = React.useMemo(() => 
    NOTICE_TYPES.map((t) => ({
      value: t.notice_type,
      label: t.display_name,
    })),
  []);

  const handleStartAssessment = () => {
    if (selectedNoticeType) {
      onSelect(selectedNoticeType.notice_type);
    }
  };

  const getIcon = (iconType: string) => {
    // ... existing getIcon implementation (keep it)
    switch (iconType) {
      case "rupee":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3c4.97 0 9-2.686 9-6h-9" />
          </svg>
        );
      case "cheque":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path d="M7 15l2 2 4-4" />
            <path d="M16 10h1" />
          </svg>
        );
      case "home":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case "shield":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "building":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
          </svg>
        );
      case "family":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "alert":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case "document":
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
          </svg>
        );
      default:
        return (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
          </svg>
        );
    }
  };

  return (
    <section className={cn("py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200">
            {NOTICE_TYPES.length} Notice Types Available
          </Badge>
          <h2 className="text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl text-center">
            Select Legal Notice Type
          </h2>
          <p className="mt-3 text-base text-text-medium lg:text-lg text-center max-w-2xl mx-auto">
            Search and select the category that best matches your situation to get an accurate strength assessment.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-xl shadow-orange-500/5">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-heading">
                Search Notice Type
              </label>
              <SimpleCombobox
                options={comboboxOptions}
                value={selectedValue}
                onValueChange={setSelectedValue}
                placeholder="Select a notice type (e.g., Divorce, Cheque Bounce)..."
                searchPlaceholder="Type to search..."
                className="w-full"
              />
            </div>

            {selectedNoticeType ? (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="relative overflow-hidden rounded-xl border border-orange-200 bg-orange-50/50 p-6">
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-sm border border-orange-100">
                      {getIcon(selectedNoticeType.icon)}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div>
                        <h3 className="text-xl font-bold text-text-heading">
                          {selectedNoticeType.display_name}
                        </h3>
                        <p className="text-text-medium mt-1">
                          {selectedNoticeType.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Takes about {selectedNoticeType.estimated_time_minutes} minutes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button 
                    onClick={handleStartAssessment}
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-orange-500/20"
                  >
                    Start Assessment →
                  </Button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50/50 p-8 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-text-muted">
                  Search for a notice type above to view details and start your assessment
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Helper Text */}
        <div className="mt-8 text-center text-sm text-text-muted">
          <p>
            Not sure which one to choose? <a href="/legal-consultation" className="text-orange-600 hover:underline font-medium">Talk to a lawyer</a>
          </p>
        </div>
      </div>
    </section>
  );
}
// Helper component for badge
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", className)}>
      {children}
    </span>
  );
}
