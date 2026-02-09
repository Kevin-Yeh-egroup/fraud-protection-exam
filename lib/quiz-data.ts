// Each question maps answers to scores across 4 dimensions:
// infoVerification (資訊查證力), emotionalStability (情緒穩定度),
// boundaryAwareness (界線感), riskJudgment (風險判斷力)

export interface Question {
  id: number
  tag: string
  scenario: string
  options: {
    label: string
    text: string
    scores: {
      infoVerification: number
      emotionalStability: number
      boundaryAwareness: number
      riskJudgment: number
    }
  }[]
}

export interface QuizResult {
  scores: {
    infoVerification: number
    emotionalStability: number
    boundaryAwareness: number
    riskJudgment: number
  }
  typeIndex: number
  typeName: string
  typeColor: string
}

export const questions: Question[] = [
  {
    id: 1,
    tag: "陌生訊息",
    scenario:
      '你突然收到一則 LINE 訊息：\n「我是你朋友小美，新手機壞了，先用這個帳號，加我一下～」',
    options: [
      {
        label: "A",
        text: "立刻加好友，之後再確認",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "詢問對方能否用舊方式聯絡",
        scores: { infoVerification: 3, emotionalStability: 3, boundaryAwareness: 2, riskJudgment: 3 },
      },
      {
        label: "C",
        text: "完全不回、不加",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 4 },
      },
      {
        label: "D",
        text: "覺得怪怪的，但還是加了再觀察",
        scores: { infoVerification: 2, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
  {
    id: 2,
    tag: "中獎通知",
    scenario:
      '你收到簡訊：\n「恭喜中獎！請於 24 小時內點擊連結填寫資料，否則失效」',
    options: [
      {
        label: "A",
        text: "點連結看看再說",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "搜尋活動名稱確認真偽",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 2, riskJudgment: 3 },
      },
      {
        label: "C",
        text: "直接刪除",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 4 },
      },
      {
        label: "D",
        text: "轉傳給朋友問意見",
        scores: { infoVerification: 2, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
  {
    id: 3,
    tag: "投資社群",
    scenario: '朋友邀你加入一個投資群，裡面每天都有人「曬獲利」',
    options: [
      {
        label: "A",
        text: "先跟著少量試試",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "要求看完整交易紀錄與公司資料",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 2, riskJudgment: 3 },
      },
      {
        label: "C",
        text: "覺得太誇張，直接退出",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 4 },
      },
      {
        label: "D",
        text: "潛水觀察一陣子",
        scores: { infoVerification: 2, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
  {
    id: 4,
    tag: "假客服",
    scenario:
      '你接到電話：\n「我是銀行客服，偵測到異常交易，請立刻配合確認帳戶」',
    options: [
      {
        label: "A",
        text: "按照指示操作",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "掛掉後自己打銀行客服",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 3, riskJudgment: 4 },
      },
      {
        label: "C",
        text: "直接掛掉，不理會",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 3 },
      },
      {
        label: "D",
        text: "問對方姓名、分機再決定",
        scores: { infoVerification: 3, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
  {
    id: 5,
    tag: "情感型詐騙",
    scenario: "網路上認識的對象聊了兩個月，突然說需要資金周轉",
    options: [
      {
        label: "A",
        text: "小額幫忙，畢竟有感情",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "建議對方找銀行或家人",
        scores: { infoVerification: 2, emotionalStability: 3, boundaryAwareness: 3, riskJudgment: 3 },
      },
      {
        label: "C",
        text: "明確拒絕",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 4 },
      },
      {
        label: "D",
        text: "請他提出正式借款證明",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 2, riskJudgment: 3 },
      },
    ],
  },
  {
    id: 6,
    tag: "假政府補助",
    scenario:
      '收到訊息：\n「政府補助款未領取，請登入網站填寫資料」',
    options: [
      {
        label: "A",
        text: "立刻填寫，怕錯過",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "查官方網站公告",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 2, riskJudgment: 3 },
      },
      {
        label: "C",
        text: "不可能，直接刪",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 4 },
      },
      {
        label: "D",
        text: "問問親友是否也收到",
        scores: { infoVerification: 2, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
  {
    id: 7,
    tag: "高壓時間感",
    scenario: '對方說：\n「現在不處理，帳戶會被凍結！」',
    options: [
      {
        label: "A",
        text: "馬上照做",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "請對方稍等，自己確認",
        scores: { infoVerification: 3, emotionalStability: 3, boundaryAwareness: 2, riskJudgment: 3 },
      },
      {
        label: "C",
        text: "掛掉",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 4 },
      },
      {
        label: "D",
        text: "請對方改用書面通知",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 3, riskJudgment: 3 },
      },
    ],
  },
  {
    id: 8,
    tag: "熟人借錢",
    scenario: "親戚突然傳訊要你幫忙代墊一筆錢，說很急",
    options: [
      {
        label: "A",
        text: "先轉一點",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "打電話確認本人",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 3, riskJudgment: 4 },
      },
      {
        label: "C",
        text: "直接拒絕",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 3 },
      },
      {
        label: "D",
        text: "請他提供更多說明",
        scores: { infoVerification: 3, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
  {
    id: 9,
    tag: "不合理回報",
    scenario:
      '看到投資廣告：\n「保證每月 10% 報酬，穩賺不賠」',
    options: [
      {
        label: "A",
        text: "有點心動，想了解",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "判斷不合理，略過",
        scores: { infoVerification: 3, emotionalStability: 4, boundaryAwareness: 3, riskJudgment: 4 },
      },
      {
        label: "C",
        text: "查資料但不投入",
        scores: { infoVerification: 4, emotionalStability: 3, boundaryAwareness: 3, riskJudgment: 3 },
      },
      {
        label: "D",
        text: "問問身邊是否有人投過",
        scores: { infoVerification: 2, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
  {
    id: 10,
    tag: "資料索取",
    scenario:
      '有人要求你提供身分證、帳戶照片\n「只是核對用」',
    options: [
      {
        label: "A",
        text: "提供，反正不是密碼",
        scores: { infoVerification: 1, emotionalStability: 1, boundaryAwareness: 1, riskJudgment: 1 },
      },
      {
        label: "B",
        text: "拒絕並詢問用途",
        scores: { infoVerification: 3, emotionalStability: 3, boundaryAwareness: 3, riskJudgment: 3 },
      },
      {
        label: "C",
        text: "完全不提供",
        scores: { infoVerification: 2, emotionalStability: 4, boundaryAwareness: 4, riskJudgment: 4 },
      },
      {
        label: "D",
        text: "遮住部分資料再給",
        scores: { infoVerification: 2, emotionalStability: 2, boundaryAwareness: 2, riskJudgment: 2 },
      },
    ],
  },
]

export const defenseTypes = [
  {
    index: 0,
    name: "情緒牽動型",
    subtitle: "較容易受情境牽動",
    color: "hsl(var(--type-red))",
    colorClass: "bg-[hsl(var(--type-red))]",
    borderClass: "border-[hsl(var(--type-red))]",
    textClass: "text-[hsl(var(--type-red))]",
    traits: [
      "容易因「很急、怕錯過、怕關係破裂」而先行動",
      "在時間壓力或情感連結下，較難停下來確認",
    ],
    tips: [
      "多數詐騙正是利用「急」來推進",
      "停一下，本身就是一種保護",
    ],
  },
  {
    index: 1,
    name: "觀望但易被說服型",
    subtitle: "目前判定為你的主要防禦型態",
    color: "hsl(var(--type-orange))",
    colorClass: "bg-[hsl(var(--type-orange))]",
    borderClass: "border-[hsl(var(--type-orange))]",
    textClass: "text-[hsl(var(--type-orange))]",
    traits: [
      "能察覺異常，但不確定是否該拒絕",
      "容易選擇「再看看」「先保留彈性」",
    ],
    tips: [
      "猶豫本身不是錯",
      "關鍵在於：不要讓對方替你決定下一步",
    ],
  },
  {
    index: 2,
    name: "理性查證型",
    subtitle: "防禦反應相對穩定",
    color: "hsl(var(--type-yellow))",
    colorClass: "bg-[hsl(var(--type-yellow))]",
    borderClass: "border-[hsl(var(--type-yellow))]",
    textClass: "text-[hsl(var(--type-yellow))]",
    traits: [
      "會主動查資料、找官方來源",
      "不輕易被單一說法說服",
    ],
    tips: [
      "在熟人或情感情境中，仍要維持同樣標準",
    ],
  },
  {
    index: 3,
    name: "高防禦穩定型",
    subtitle: "防禦反射清楚",
    color: "hsl(var(--type-green))",
    colorClass: "bg-[hsl(var(--type-green))]",
    borderClass: "border-[hsl(var(--type-green))]",
    textClass: "text-[hsl(var(--type-green))]",
    traits: [
      "界線明確，能快速拒絕",
      "不容易被話術牽著走",
    ],
    tips: [
      "詐騙手法會不斷更新",
      "維持警覺比自信更重要",
    ],
  },
]

// Average scores (simulated population average for radar chart comparison)
export const averageScores = {
  infoVerification: 2.6,
  emotionalStability: 2.8,
  boundaryAwareness: 2.5,
  riskJudgment: 2.7,
}

export function calculateResult(answers: number[]): QuizResult {
  const totalScores = {
    infoVerification: 0,
    emotionalStability: 0,
    boundaryAwareness: 0,
    riskJudgment: 0,
  }

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex]
    if (question && question.options[answerIndex]) {
      const s = question.options[answerIndex].scores
      totalScores.infoVerification += s.infoVerification
      totalScores.emotionalStability += s.emotionalStability
      totalScores.boundaryAwareness += s.boundaryAwareness
      totalScores.riskJudgment += s.riskJudgment
    }
  })

  // Normalize to 0-10 scale (max possible per dimension = 4 * 10 = 40, min = 10)
  const normalize = (v: number) => Math.round(((v - 10) / 30) * 10 * 10) / 10

  const scores = {
    infoVerification: normalize(totalScores.infoVerification),
    emotionalStability: normalize(totalScores.emotionalStability),
    boundaryAwareness: normalize(totalScores.boundaryAwareness),
    riskJudgment: normalize(totalScores.riskJudgment),
  }

  // Determine type based on average score
  const avg =
    (scores.infoVerification +
      scores.emotionalStability +
      scores.boundaryAwareness +
      scores.riskJudgment) /
    4

  let typeIndex: number
  if (avg <= 2.5) {
    typeIndex = 0 // 情緒牽動型
  } else if (avg <= 5) {
    typeIndex = 1 // 觀望但易被說服型
  } else if (avg <= 7.5) {
    typeIndex = 2 // 理性查證型
  } else {
    typeIndex = 3 // 高防禦穩定型
  }

  return {
    scores,
    typeIndex,
    typeName: defenseTypes[typeIndex].name,
    typeColor: defenseTypes[typeIndex].color,
  }
}

export const dimensionLabels: Record<string, string> = {
  infoVerification: "資訊查證力",
  emotionalStability: "情緒穩定度",
  boundaryAwareness: "界線感",
  riskJudgment: "風險判斷力",
}
