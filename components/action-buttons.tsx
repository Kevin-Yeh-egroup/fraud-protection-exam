"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageCircle,
  Bot,
  Link2,
  Facebook,
  Instagram,
  Check,
  ExternalLink,
} from "lucide-react"

interface ActionButtonsProps {
  defenseTypeName?: string
  defenseTypeIndex?: number
}

export function ActionButtons({ defenseTypeName, defenseTypeIndex }: ActionButtonsProps) {
  const [copied, setCopied] = useState(false)

  const getShareUrl = () => {
    const url = new URL(window.location.href)
    url.search = ""
    url.hash = ""
    if (defenseTypeName) {
      url.searchParams.set("type", defenseTypeName)
    }
    if (typeof defenseTypeIndex === "number" && Number.isFinite(defenseTypeIndex)) {
      url.searchParams.set("t", String(defenseTypeIndex))
    }
    return url.toString()
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const handleLineShare = () => {
    const url = encodeURIComponent(getShareUrl())
    const text = encodeURIComponent(defenseTypeName ? `我的防禦類型：${defenseTypeName}` : "我剛完成了詐騙防禦能力檢測，來看看你的防禦類型！")
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, "_blank")
  }

  const handleFBShare = () => {
    const url = encodeURIComponent(getShareUrl())
    const quote = defenseTypeName ? `&quote=${encodeURIComponent(`我的防禦類型：${defenseTypeName}`)}` : ""
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}${quote}`, "_blank")
  }

  const handleIGShare = () => {
    // IG doesn't support direct link sharing; show a hint
    handleCopyLink()
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Next Steps */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-foreground">
          接下來，你可以這樣做
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          不需要一次做完，選擇你現在最需要的一步就好。
        </p>
      </div>

      {/* CTA Button 1 */}
      <Card className="border-2 border-primary/20 bg-card overflow-hidden">
        <CardContent className="p-5">
          <Button
            asChild
            className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold rounded-xl"
          >
            <a
              href="https://www.familyfinhealth.com/online-consultation"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ExternalLink className="h-4 w-4" />
              個人財務線上諮詢
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            如果你最近曾遇到可疑訊息、投資邀請，或對自己的判斷感到不安，可以和專業顧問一起整理目前的狀況。（線上進行，重點是釐清與陪伴）
          </p>
        </CardContent>
      </Card>

      {/* CTA Button 2 */}
      <Card className="border-2 border-primary/20 bg-card overflow-hidden">
        <CardContent className="p-5">
          <Button
            asChild
            className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold rounded-xl"
          >
            <a
              href="https://www.familyfinhealth.com/ask-ivy"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Bot className="h-4 w-4" />
              問問 AI
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            把你收到的訊息、話術或連結內容貼上來問問AI，AI 會協助你一起拆解可能的風險點。
          </p>
        </CardContent>
      </Card>

      {/* Share Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-foreground">
            分享本次結果
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            你可以把這次的結果分享給家人或朋友，一起討論彼此在面對詐騙時的反應差異。
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            {copied ? (
              <Check className="h-5 w-5 text-accent" />
            ) : (
              <Link2 className="h-5 w-5 text-primary" />
            )}
            <span className="text-xs font-medium text-foreground">
              {copied ? "已複製" : "複製連結"}
            </span>
          </button>

          <button
            type="button"
            onClick={handleLineShare}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-card p-4 transition-colors hover:border-[#06C755]/30 hover:bg-[#06C755]/5"
          >
            <MessageCircle className="h-5 w-5 text-[#06C755]" />
            <span className="text-xs font-medium text-foreground">LINE</span>
          </button>

          <button
            type="button"
            onClick={handleFBShare}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-card p-4 transition-colors hover:border-[#1877F2]/30 hover:bg-[#1877F2]/5"
          >
            <Facebook className="h-5 w-5 text-[#1877F2]" />
            <span className="text-xs font-medium text-foreground">FB</span>
          </button>

          <button
            type="button"
            onClick={handleIGShare}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-card p-4 transition-colors hover:border-[#E4405F]/30 hover:bg-[#E4405F]/5"
          >
            <Instagram className="h-5 w-5 text-[#E4405F]" />
            <span className="text-xs font-medium text-foreground">IG</span>
          </button>
        </div>
      </div>
    </div>
  )
}
