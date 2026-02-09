"use client"

import { defenseTypes } from "@/lib/quiz-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface DefenseTypesProps {
  activeTypeIndex: number
}

const typeColorBars = [
  "bg-[hsl(0,65%,55%)]",
  "bg-[hsl(25,85%,55%)]",
  "bg-[hsl(45,80%,55%)]",
  "bg-[hsl(145,45%,48%)]",
]

export function DefenseTypes({ activeTypeIndex }: DefenseTypesProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-foreground">
        你的防禦類型補充說明
      </h3>

      <Accordion
        type="single"
        collapsible
        defaultValue={`type-${activeTypeIndex}`}
        className="flex flex-col gap-3"
      >
        {defenseTypes.map((type, i) => {
          const isActive = i === activeTypeIndex

          return (
            <AccordionItem
              key={type.index}
              value={`type-${i}`}
              className={cn(
                "rounded-xl border-2 overflow-hidden transition-colors",
                isActive ? "border-primary/40 bg-primary/5" : "border-border bg-card"
              )}
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "h-3 w-3 rounded-full shrink-0",
                      typeColorBars[i]
                    )}
                  />
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-base font-semibold text-foreground">
                      類型{["一", "二", "三", "四"][i]} | {type.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {isActive ? "目前判定為你的主要防禦型態" : type.subtitle}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="flex flex-col gap-4 pt-2">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      常見反應特徵
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {type.traits.map((trait) => (
                        <li
                          key={trait}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                          {trait}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      提醒重點
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {type.tips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
