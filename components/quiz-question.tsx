"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { Question } from "@/lib/quiz-data"
import { Shield } from "lucide-react"

interface QuizQuestionProps {
  question: Question
  selectedAnswer: number | null
  onAnswer: (index: number) => void
}

export function QuizQuestion({ question, selectedAnswer, onAnswer }: QuizQuestionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-6">
      {/* Question tag and scenario */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-primary tracking-wide uppercase">
            {question.tag}
          </span>
        </div>
        <p className="text-lg font-medium leading-relaxed text-foreground whitespace-pre-line">
          {question.scenario}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const isHovered = hoveredIndex === index

          return (
            <button
              key={option.label}
              type="button"
              onClick={() => onAnswer(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "flex items-start gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/10 shadow-sm"
                  : isHovered
                    ? "border-primary/40 bg-card shadow-sm"
                    : "border-border bg-card hover:border-primary/20"
              )}
              aria-pressed={isSelected}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold transition-colors",
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}
              >
                {option.label}
              </span>
              <span className={cn(
                "pt-1 text-base leading-relaxed transition-colors",
                isSelected ? "text-foreground font-medium" : "text-foreground/80"
              )}>
                {option.text}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
