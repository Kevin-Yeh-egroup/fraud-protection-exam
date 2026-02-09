"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"
import { averageScores, dimensionLabels } from "@/lib/quiz-data"
import type { QuizResult } from "@/lib/quiz-data"

interface DefenseRadarChartProps {
  result: QuizResult
}

export function DefenseRadarChart({ result }: DefenseRadarChartProps) {
  const data = Object.entries(result.scores).map(([key, value]) => ({
    dimension: dimensionLabels[key] || key,
    userScore: value,
    avgScore: averageScores[key as keyof typeof averageScores],
  }))

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-foreground">
          你的詐騙防禦結構分布
        </h3>
      </div>

      <div className="h-72 w-full md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis
              dataKey="dimension"
              tick={{ fill: "hsl(var(--foreground))", fontSize: 13, fontWeight: 500 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 10]}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
              axisLine={false}
            />
            <Radar
              name="平均分布"
              dataKey="avgScore"
              stroke="hsl(var(--muted-foreground))"
              fill="hsl(var(--muted-foreground))"
              fillOpacity={0.15}
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
            <Radar
              name="你的分數"
              dataKey="userScore"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.25}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-primary/60" />
          <span>你的防禦指數</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-muted-foreground/30" />
          <span>所有受測者的平均分布</span>
        </div>
      </div>
    </div>
  )
}
