"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { Question, NoticeType, Option } from "./calculator-data";
import { getNoticeTypeConfig } from "./calculator-data";
import type { AnswerValue, CaseSession } from "./scoring-utils";
import { calculateCaseStrength } from "./scoring-utils";
import type { CaseStrengthResult } from "./ResultModal";

interface CalculatorFormProps {
  noticeType: NoticeType;
  onComplete: (result: CaseStrengthResult) => void;
  className?: string;
}

/**
 * CalculatorForm Component
 *
 * Multi-step questionnaire for case strength assessment.
 * Renders questions dynamically based on notice type.
 */
export function CalculatorForm({
  noticeType,
  onComplete,
  className,
}: CalculatorFormProps) {
  const config = getNoticeTypeConfig(noticeType);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, AnswerValue>>({});

  if (!config) {
    return <div>Invalid notice type selected</div>;
  }

  const questions = config.questions;
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: AnswerValue) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Calculate result and complete
      const session: CaseSession = {
        notice_type: noticeType,
        answers,
      };
      const result = calculateCaseStrength(session);
      onComplete(result);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isAnswered =
    answers[currentQuestion.key] !== null &&
    answers[currentQuestion.key] !== undefined;

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-medium">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-text-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange to-orange-dark transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
        {/* Question Label */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-text-heading mb-2">
            {currentQuestion.label}
          </h3>
          {currentQuestion.help_text && (
            <p className="text-sm text-text-muted">
              {currentQuestion.help_text}
            </p>
          )}
          {currentQuestion.critical && (
            <span className="inline-flex mt-2 items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
              Critical Question
            </span>
          )}
        </div>

        {/* Question Input */}
        <QuestionInput
          question={currentQuestion}
          value={answers[currentQuestion.key]}
          onChange={handleAnswer}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <Button
          onClick={handleBack}
          variant="outline"
          disabled={currentStep === 0}
          className="flex-1"
        >
          Back
        </Button>
        <Button onClick={handleNext} disabled={!isAnswered} className="flex-1">
          {currentStep === questions.length - 1 ? "Calculate Score" : "Next"}
        </Button>
      </div>

      {/* Skip Option */}
      {!currentQuestion.critical && (
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              handleAnswer(null);
              handleNext();
            }}
            className="text-sm text-text-muted hover:text-text-medium underline"
          >
            Skip this question
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// QUESTION INPUT COMPONENT
// ============================================================================

interface QuestionInputProps {
  question: Question;
  value: AnswerValue;
  onChange: (value: AnswerValue) => void;
}

function QuestionInput({ question, value, onChange }: QuestionInputProps) {
  switch (question.type) {
    case "boolean":
      return (
        <BooleanInput value={value as boolean} onChange={(v) => onChange(v)} />
      );

    case "multiple_choice":
      return (
        <MultipleChoiceInput
          options={question.options || []}
          value={value as string | number}
          onChange={(v) => onChange(v)}
        />
      );

    case "multi_select":
      return (
        <MultiSelectInput
          options={question.options || []}
          value={(value as string[]) || []}
          onChange={(v) => onChange(v)}
        />
      );

    case "date":
      return <DateInput value={value as Date} onChange={(v) => onChange(v)} />;

    case "amount":
    case "number":
      return (
        <NumberInput
          value={value as number}
          onChange={(v) => onChange(v)}
          min={question.validation?.min}
          max={question.validation?.max}
          prefix={question.type === "amount" ? "₹" : undefined}
        />
      );

    case "text":
      return (
        <TextInput value={value as string} onChange={(v) => onChange(v)} />
      );

    default:
      return <div>Unsupported question type</div>;
  }
}

// ============================================================================
// INPUT COMPONENTS
// ============================================================================

function BooleanInput({
  value,
  onChange,
}: {
  value?: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onChange(true)}
        className={cn(
          "flex-1 rounded-xl border-2 p-4 text-center font-medium transition-all",
          value === true
            ? "border-green-500 bg-green-50 text-green-700"
            : "border-gray-200 bg-white text-text-medium hover:border-gray-300"
        )}
      >
        Yes
      </button>
      <button
        onClick={() => onChange(false)}
        className={cn(
          "flex-1 rounded-xl border-2 p-4 text-center font-medium transition-all",
          value === false
            ? "border-red-500 bg-red-50 text-red-700"
            : "border-gray-200 bg-white text-text-medium hover:border-gray-300"
        )}
      >
        No
      </button>
    </div>
  );
}

// ... (previous imports)

// ...

function MultipleChoiceInput({
  options,
  value,
  onChange,
}: {
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.value.toString()}
          onClick={() => onChange(option.value)}
          className={cn(
            "w-full rounded-xl border-2 p-4 text-left transition-all",
            value === option.value
              ? "border-orange-500 bg-orange-50 text-orange-700"
              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
          )}
        >
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "mt-0.5 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all",
                value === option.value
                  ? "border-orange-500 bg-orange-500"
                  : "border-gray-300"
              )}
            >
              {value === option.value && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
            <div className="flex-1">
              <div className="font-medium">{option.label}</div>
              {option.triggers_warning && value === option.value && (
                <div className="mt-2 text-sm text-yellow-700 bg-yellow-50 rounded-lg p-2">
                  ⚠️ {option.triggers_warning}
                </div>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function MultiSelectInput({
  options,
  value,
  onChange,
}: {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
}) {
  const handleToggle = (optionValue: string | number) => {
    const strValue = optionValue.toString();
    const newValue = value.includes(strValue)
      ? value.filter((v) => v !== strValue)
      : [...value, strValue];
    onChange(newValue);
  };

  return (
    <div className="space-y-3">
      {options.map((option) => {
        const isSelected = value.includes(option.value.toString());
        return (
          <button
            key={option.value.toString()}
            onClick={() => handleToggle(option.value)}
            className={cn(
              "w-full rounded-xl border-2 p-4 text-left transition-all",
              isSelected
                ? "border-orange-500 bg-orange-50 text-orange-700"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            )}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "h-5 w-5 rounded border-2 flex items-center justify-center transition-all",
                  isSelected ? "border-orange-500 bg-orange-500" : "border-gray-300"
                )}
              >
                {isSelected && (
                  <svg
                    className="h-3 w-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

// ... (rest of file)

function DateInput({
  value,
  onChange,
}: {
  value?: Date;
  onChange: (value: Date) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    if (!isNaN(date.getTime())) {
      onChange(date);
    }
  };

  const dateValue =
    value instanceof Date ? value.toISOString().split("T")[0] : "";

  return (
    <div>
      <Label htmlFor="date-input">Select Date</Label>
      <Input
        id="date-input"
        type="date"
        value={dateValue}
        onChange={handleChange}
        className="mt-2"
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
}

function NumberInput({
  value,
  onChange,
  min,
  max,
  prefix,
}: {
  value?: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  prefix?: string;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseFloat(e.target.value);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  return (
    <div>
      <Label htmlFor="number-input">Enter Amount</Label>
      <div className="relative mt-2">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-medium">
            {prefix}
          </span>
        )}
        <Input
          id="number-input"
          type="number"
          value={value || ""}
          onChange={handleChange}
          min={min}
          max={max}
          className={prefix ? "pl-8" : ""}
        />
      </div>
    </div>
  );
}

function TextInput({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <Label htmlFor="text-input">Your Answer</Label>
      <Input
        id="text-input"
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2"
      />
    </div>
  );
}
