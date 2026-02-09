"use client"

import { useState, useCallback, useRef } from "react"
import { defenseTypes, questions, calculateResult, type QuizResult } from "@/lib/quiz-data"
import { QuizQuestion } from "@/components/quiz-question"
import { QuizResultPage } from "@/components/quiz-result"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface QuizFlowProps {
  shareTypeName?: string | string[]
  shareTypeIndex?: string | string[]
}

const resolveShareTypeName = (value?: string | string[]) => {
  const rawValue = Array.isArray(value) ? value[0] : value
  if (!rawValue) return undefined
  const normalizedValue = rawValue.replace(/\+/g, " ")
  try {
    return decodeURIComponent(normalizedValue).trim()
  } catch {
    return normalizedValue.trim()
  }
}

const resolveShareTypeIndex = (value?: string | string[]) => {
  const rawValue = Array.isArray(value) ? value[0] : value
  if (!rawValue) return undefined
  const parsed = Number(rawValue)
  if (!Number.isFinite(parsed)) return undefined
  return parsed
}

export function QuizFlow({ shareTypeName, shareTypeIndex }: QuizFlowProps) {
  const searchParams = useSearchParams()
  const fallbackShareTypeName = searchParams?.get("type") ?? undefined
  const fallbackShareTypeIndex = searchParams?.get("t") ?? undefined
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [result, setResult] = useState<QuizResult | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionLock = useRef(false)
  const resolvedShareTypeName = resolveShareTypeName(
    shareTypeName ?? fallbackShareTypeName
  )
  const resolvedShareTypeIndex = resolveShareTypeIndex(
    shareTypeIndex ?? fallbackShareTypeIndex
  )
  const shareTypeByName = resolvedShareTypeName
    ? defenseTypes.find((type) => type.name === resolvedShareTypeName)
    : undefined
  const shareType =
    shareTypeByName ??
    (typeof resolvedShareTypeIndex === "number"
      ? defenseTypes[resolvedShareTypeIndex]
      : undefined)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const runTransition = useCallback((action: () => void, delay = 200) => {
    if (transitionLock.current) return
    transitionLock.current = true
    setIsTransitioning(true)
    setTimeout(() => {
      action()
      setIsTransitioning(false)
      transitionLock.current = false
    }, delay)
  }, [])

  const advanceWithAnswers = useCallback(
    (nextAnswers: (number | null)[]) => {
      if (nextAnswers[currentQuestion] === null) return

      if (currentQuestion < questions.length - 1) {
        runTransition(() => {
          setCurrentQuestion((prev) => prev + 1)
        }, 200)
        return
      }

      const validAnswers = nextAnswers.filter((a): a is number => a !== null)
      if (validAnswers.length === questions.length) {
        runTransition(() => {
          setResult(calculateResult(validAnswers))
        }, 300)
      }
    },
    [currentQuestion, runTransition]
  )

  const handleAnswer = useCallback(
    (index: number) => {
      if (transitionLock.current) return
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = index
      setAnswers(newAnswers)
      advanceWithAnswers(newAnswers)
    },
    [answers, currentQuestion, advanceWithAnswers]
  )

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      runTransition(() => {
        setCurrentQuestion((prev) => prev - 1)
      }, 200)
    }
  }, [currentQuestion, runTransition])

  const handleRestart = useCallback(() => {
    runTransition(() => {
      setCurrentQuestion(0)
      setAnswers(new Array(questions.length).fill(null))
      setResult(null)
    }, 300)
  }, [runTransition])

  // Show shared type page
  if (shareType && !result) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
          <header className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
              我的詐騙防禦反應分析
            </h1>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              以下結果呈現在不同情境下，最常啟動的防禦反應模式，並非評分或好壞判斷。
            </p>
          </header>

          <Card className="mb-8 border-2 border-primary/30 overflow-hidden">
            <div className="h-1.5 w-full bg-primary" />
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="text-xs font-medium tracking-wider text-primary uppercase">
                  主要防禦類型
                </span>
                <div className="flex items-center gap-3">
                  <span className={cn("h-4 w-4 rounded-full shrink-0", shareType.colorClass)} />
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    {shareType.name}
                  </h2>
                </div>
                {shareType.illustration?.src && (
                  <div className="flex justify-center">
                    <Image
                      src={shareType.illustration.src}
                      alt={shareType.illustration.alt ?? `${shareType.name}插圖`}
                      width={560}
                      height={400}
                      sizes="(max-width: 768px) 90vw, 560px"
                      className="h-72 w-auto max-w-full md:h-80"
                    />
                  </div>
                )}
                <div className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  <div className="flex flex-col gap-3">
                    {shareType.description.map((paragraph, index) => (
                      <p key={`${shareType.name}-share-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button asChild className="h-12 px-6 text-base font-semibold rounded-xl">
              <Link href="/">測試你的詐騙防禦類型</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

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

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            詐騙防禦能力檢測
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-md mx-auto">
            透過 10 個生活情境問題，了解你的詐騙防禦類型。
          </p>
        </header>

        {/* Question Card */}
        <div
          className={cn(
            "rounded-2xl border bg-card p-6 md:p-8 shadow-sm transition-all duration-200",
            isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          )}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  問題 {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% 完成
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="rounded-lg bg-primary/5 border border-primary/10 px-4 py-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                請選擇你最可能的<strong className="text-foreground">第一反應</strong>，不是你覺得「最正確」的答案。
              </p>
            </div>

            <QuizQuestion
              question={questions[currentQuestion]}
              selectedAnswer={answers[currentQuestion]}
              onAnswer={handleAnswer}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-start">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="gap-1 text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            上一題
          </Button>
        </div>
      </div>
    </div>
  )
}
