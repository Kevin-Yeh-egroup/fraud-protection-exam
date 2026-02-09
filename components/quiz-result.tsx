"use client"

import type { QuizResult } from "@/lib/quiz-data"
import { defenseTypes } from "@/lib/quiz-data"
import { ActionButtons } from "@/components/action-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, RotateCcw } from "lucide-react"
import Image from "next/image"

interface QuizResultPageProps {
  result: QuizResult
  onRestart: () => void
}

const typeColorBgs = [
  "bg-[hsl(0,65%,55%)]",
  "bg-[hsl(25,85%,55%)]",
  "bg-[hsl(45,80%,55%)]",
  "bg-[hsl(145,45%,48%)]",
]

const resultBlessing = [
  "不論你落在哪一型，這些反應都不是缺點。💛",
  "而是你一路走來形成的生存方式。",
  "能看懂自己的反應，就已經是在替自己多留一條安全的路。🧭",
  "如果你最近正承受比較大的壓力，或遇到讓你難以判斷的情境。",
  "你不需要一個人想清楚所有事。",
  "有人一起看，事情會變得比較不那麼可怕。🤝",
]

export function QuizResultPage({ result, onRestart }: QuizResultPageProps) {
  const activeType = defenseTypes[result.typeIndex] ?? defenseTypes[0]

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
        </header>

        {/* Result Title */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
            你的詐騙防禦反應分析
          </h1>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            以下結果呈現你在不同情境下，最常啟動的防禦反應模式，並非評分或好壞判斷。
          </p>
        </div>

        {/* Main Type Card */}
        <Card className="mb-8 border-2 border-primary/30 overflow-hidden">
          <div className="h-1.5 w-full bg-primary" />
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-medium tracking-wider text-primary uppercase">
                你的主要防禦類型
              </span>
              <div className="flex items-center gap-3">
                <span
                  className={`h-4 w-4 rounded-full shrink-0 ${typeColorBgs[result.typeIndex]}`}
                />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {result.typeName}
                </h2>
              </div>
              {activeType.illustration?.src && (
                <div className="flex justify-center">
                  <Image
                    src={activeType.illustration.src}
                    alt={activeType.illustration.alt ?? `${activeType.name}插圖`}
                    width={560}
                    height={400}
                    sizes="(max-width: 768px) 90vw, 560px"
                    className="h-72 w-auto max-w-full md:h-80"
                  />
                </div>
              )}
              <div className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                <div className="flex flex-col gap-3">
                  {activeType.description.map((paragraph, index) => (
                    <p key={`${activeType.name}-desc-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border bg-card">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground leading-relaxed text-center">
              {resultBlessing.map((line, index) => (
                <p key={`blessing-${index}`}>{line}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons & Share */}
        <div className="mb-8">
          <ActionButtons defenseTypeName={activeType.name} defenseTypeIndex={activeType.index} />
        </div>

        {/* Restart Button */}
        <div className="mb-8 flex justify-center">
          <Button
            variant="outline"
            onClick={onRestart}
            className="gap-2 text-muted-foreground hover:text-foreground bg-transparent"
          >
            <RotateCcw className="h-4 w-4" />
            重新測驗
          </Button>
        </div>

        {/* Footer Disclaimer */}
        <footer className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            本測驗僅作為自我檢視與風險覺察工具，不作為任何法律、金融或安全判斷依據。若你正面臨疑似詐騙情境，建議立即停止操作並尋求協助。
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70 text-center italic">
            看懂自己的反應，就是防禦的第一步。
          </p>
        </footer>
      </div>
    </div>
  )
}
