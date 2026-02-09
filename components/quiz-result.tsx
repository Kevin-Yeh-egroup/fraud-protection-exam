"use client"

import type { QuizResult } from "@/lib/quiz-data"
import { defenseTypes } from "@/lib/quiz-data"
import { DefenseRadarChart } from "@/components/radar-chart"
import { DefenseTypes } from "@/components/defense-types"
import { ActionButtons } from "@/components/action-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, RotateCcw } from "lucide-react"

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

export function QuizResultPage({ result, onRestart }: QuizResultPageProps) {
  const activeType = defenseTypes[result.typeIndex]

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
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                {result.typeIndex === 0 &&
                  "你通常在時間壓力或情感連結下，較容易先行動再思考。這樣的反應很常見，但也是詐騙話術最容易利用的階段。"}
                {result.typeIndex === 1 &&
                  "你通常能察覺事情「怪怪的」，但在不確定、熟人或時間壓力下，有時會選擇先保留彈性，而非立即拒絕。這樣的反應在現實中很常見，但也是詐騙話術最容易持續推進的階段。"}
                {result.typeIndex === 2 &&
                  "你會主動查資料、找官方來源，不輕易被單一說法說服。這樣的防禦模式相對穩定，但在熟人或情感情境中，仍要維持同樣標準。"}
                {result.typeIndex === 3 &&
                  "你的界線明確，能快速辨識並拒絕可疑情境。不容易被話術牽著走，但請記住詐騙手法會不斷更新，維持警覺比自信更重要。"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Radar Chart */}
        <Card className="mb-8 border bg-card">
          <CardContent className="p-6 md:p-8">
            <DefenseRadarChart result={result} />
          </CardContent>
        </Card>

        {/* Defense Types Accordion */}
        <div className="mb-8">
          <DefenseTypes activeTypeIndex={result.typeIndex} />
        </div>

        {/* Action Buttons & Share */}
        <div className="mb-8">
          <ActionButtons />
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
