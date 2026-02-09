import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_TC } from 'next/font/google'

import './globals.css'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-tc',
})

export const metadata: Metadata = {
  title: '詐騙防禦能力檢測',
  description: '透過 10 個生活情境問題，了解你在面對詐騙時，最常出現的第一反應。',
}

export const viewport: Viewport = {
  themeColor: '#e8843c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
