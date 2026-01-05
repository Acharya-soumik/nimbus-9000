"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface PostPaymentQuestionProps {
  className?: string;
  onAnswer?: (answer: string) => void;
}

export function PostPaymentQuestion({ className, onAnswer }: PostPaymentQuestionProps) {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [customAnswer, setCustomAnswer] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const options = [
    "Will they reply?",
    "Am I missing something?",
    "What if they ignore it?",
    "What should I do next?",
    "Other"
  ];

  const handleSubmit = () => {
    const answer = selectedOption === "Other" ? customAnswer : selectedOption;
    if (answer) {
      console.log("User worry:", answer);
      // Here you would typically send this to your analytics or backend
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "post_payment_survey",
          question: "What worries you the most right now?",
          answer: answer
        });
      }
      setIsSubmitted(true);
      onAnswer?.(answer);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("bg-success-light/30 border border-success-light rounded-xl p-6 text-center", className)}
      >
        <p className="text-success-darker font-medium">
          Thank you for sharing. We've noted your concern and our team will guide you.
        </p>
      </motion.div>
    );
  }

  return (
    <div className={cn("bg-white border border-gray-200 rounded-xl p-6 shadow-sm", className)}>
      <h3 className="text-lg font-bold text-text-heading mb-4">
        One quick question while we prepare your file...
      </h3>
      <p className="text-text-medium mb-6">
        What worries you the most right now?
      </p>

      <div className="space-y-3">
        {options.map((option) => (
          <div key={option}>
            <label 
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
                selectedOption === option 
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
              )}
            >
              <input
                type="radio"
                name="worry"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="text-text-body">{option}</span>
            </label>
            
            <AnimatePresence>
              {selectedOption === "Other" && option === "Other" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Tell us what's on your mind..."
                    value={customAnswer}
                    onChange={(e) => setCustomAnswer(e.target.value)}
                    className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedOption || (selectedOption === "Other" && !customAnswer)}
        className="mt-6 w-full rounded-xl bg-primary py-3 px-4 text-white font-semibold shadow-md transition-all hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Response
      </button>
    </div>
  );
}
