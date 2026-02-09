"use client"

import { useState, useCallback } from "react"
import { questions, calculateResult, type QuizResult } from "@/lib/quiz-data"
import { QuizQuestion } from "@/components/quiz-question"
import { QuizResultPage } from "@/components/quiz-result"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export function QuizFlow() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [result, setResult] = useState<QuizResult | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = useCallback(
    (index: number) => {
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = index
      setAnswers(newAnswers)
    },
    [answers, currentQuestion]
  )

  const handleNext = useCallback(() => {
    if (answers[currentQuestion] === null) return

    if (currentQuestion < questions.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1)
        setIsTransitioning(false)
      }, 200)
    } else {
      // Calculate and show result
      const validAnswers = answers.filter((a): a is number => a !== null)
      if (validAnswers.length === questions.length) {
        setIsTransitioning(true)
        setTimeout(() => {
          setResult(calculateResult(validAnswers))
          setIsTransitioning(false)
        }, 300)
      }
    }
  }, [currentQuestion, answers])

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentQuestion((prev) => prev - 1)
        setIsTransitioning(false)
      }, 200)
    }
  }, [currentQuestion])

  const handleRestart = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentQuestion(0)
      setAnswers(new Array(questions.length).fill(null))
      setResult(null)
      setIsTransitioning(false)
    }, 300)
  }, [])

  // Show result page
  if (result) {
    return (
      <div className={cn(
        "transition-opacity duration-300",
        isTransitioning ? "opacity-0" : "opacity-100"
      )}>
        <QuizResultPage result={result} onRestart={handleRestart} />
      </div>
    )
  }

  const isLastQuestion = currentQuestion === questions.length - 1
  const hasAnswer = answers[currentQuestion] !== null

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              詐騙防禦能力檢測
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
            透過 10 個生活情境問題，了解你在面對詐騙時，最常出現的第一反應。
          </p>
        </header>

        {/* Progress */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            問題 {currentQuestion + 1} / {questions.length}
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(progress)}% 完成
          </span>
        </div>
        <Progress value={progress} className="mb-6 h-2" />

        {/* Reminder */}
        <div className="mb-6 rounded-lg bg-primary/5 border border-primary/10 px-4 py-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            請選擇你最可能的<strong className="text-foreground">第一反應</strong>，不是你覺得「最正確」的答案。
          </p>
        </div>

        {/* Question Card */}
        <div
          className={cn(
            "rounded-2xl border bg-card p-6 md:p-8 shadow-sm transition-all duration-200",
            isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          )}
        >
          <QuizQuestion
            question={questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="gap-1 text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            上一題
          </Button>

          <Button
            onClick={handleNext}
            disabled={!hasAnswer}
            className={cn(
              "gap-1 px-6 transition-all",
              hasAnswer
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground"
            )}
          >
            {isLastQuestion ? "查看結果" : "下一題"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
