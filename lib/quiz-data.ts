// Each answer maps to one dimension via option label, and scores are derived from option counts.
// infoVerification (資訊查證力), emotionalStability (情緒穩定度),
// boundaryAwareness (界線感), riskJudgment (風險判斷力)

export type DimensionKey =
  | "infoVerification"
  | "emotionalStability"
  | "boundaryAwareness"
  | "riskJudgment"

export type OptionLabel = "A" | "B" | "C" | "D"

export interface QuestionOption {
  label: OptionLabel
  text: string
  isPositive: boolean
}

export interface Question {
  id: number
  tag: string
  scenario: string
  options: QuestionOption[]
}

export interface QuizResult {
  scores: Record<DimensionKey, number>
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
        isPositive: false,
      },
      {
        label: "B",
        text: "詢問對方能否用舊方式聯絡",
        isPositive: true,
      },
      {
        label: "C",
        text: "完全不回、不加",
        isPositive: true,
      },
      {
        label: "D",
        text: "覺得怪怪的，但還是加了再觀察",
        isPositive: false,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "搜尋活動名稱確認真偽",
        isPositive: true,
      },
      {
        label: "C",
        text: "直接刪除",
        isPositive: true,
      },
      {
        label: "D",
        text: "轉傳給朋友問意見",
        isPositive: false,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "要求看完整交易紀錄與公司資料",
        isPositive: true,
      },
      {
        label: "C",
        text: "覺得太誇張，直接退出",
        isPositive: true,
      },
      {
        label: "D",
        text: "潛水觀察一陣子",
        isPositive: false,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "掛掉後自己打銀行客服",
        isPositive: true,
      },
      {
        label: "C",
        text: "直接掛掉，不理會",
        isPositive: true,
      },
      {
        label: "D",
        text: "問對方姓名、分機再決定",
        isPositive: false,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "建議對方找銀行或家人",
        isPositive: true,
      },
      {
        label: "C",
        text: "明確拒絕",
        isPositive: true,
      },
      {
        label: "D",
        text: "請他提出正式借款證明",
        isPositive: true,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "查官方網站公告",
        isPositive: true,
      },
      {
        label: "C",
        text: "不可能，直接刪",
        isPositive: true,
      },
      {
        label: "D",
        text: "問問親友是否也收到",
        isPositive: false,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "請對方稍等，自己確認",
        isPositive: true,
      },
      {
        label: "C",
        text: "掛掉",
        isPositive: true,
      },
      {
        label: "D",
        text: "請對方改用書面通知",
        isPositive: true,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "打電話確認本人",
        isPositive: true,
      },
      {
        label: "C",
        text: "直接拒絕",
        isPositive: true,
      },
      {
        label: "D",
        text: "請他提供更多說明",
        isPositive: false,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "判斷不合理，略過",
        isPositive: true,
      },
      {
        label: "C",
        text: "查資料但不投入",
        isPositive: true,
      },
      {
        label: "D",
        text: "問問身邊是否有人投過",
        isPositive: false,
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
        isPositive: false,
      },
      {
        label: "B",
        text: "拒絕並詢問用途",
        isPositive: true,
      },
      {
        label: "C",
        text: "完全不提供",
        isPositive: true,
      },
      {
        label: "D",
        text: "遮住部分資料再給",
        isPositive: false,
      },
    ],
  },
]

export const defenseTypes = [
  {
    index: 0,
    name: "浪推前行者",
    subtitle: "在急迫與關係中，容易被情境一路推著走",
    color: "hsl(var(--type-red))",
    colorClass: "bg-[hsl(var(--type-red))]",
    borderClass: "border-[hsl(var(--type-red))]",
    textClass: "text-[hsl(var(--type-red))]",
    illustration: {
      src: "/浪推前行者.png",
      alt: "浪推前行者插圖",
    },
    description: [
      "你很重視關係，也不喜歡讓事情變得尷尬或破裂。🤝",
      "當對方表現得很急、很可憐，或讓你覺得「如果我不幫，事情會更糟」，你往往會先行動再說。⏳",
      "很多時候你其實不是不知道有風險。",
      "只是那個當下，情緒跑得比理性快了一點點。💭",
      "你並不衝動，只是太在乎、不想出錯。💛",
      "但詐騙往往正是抓住這個「不想讓事情變壞」的心。⚠️",
      "目前的狀態下，你需要的不是更用力提醒自己要小心。",
      "而是幫自己多留一個「可以暫停」的空間，讓任何「很急的事」，都不再只能你一個人扛。🛑",
    ],
    traits: [
      "你很重視關係，也不喜歡讓事情變得尷尬或破裂。",
      "當對方表現得很急、很可憐、或讓你覺得「如果我不幫，事情會更糟」，你往往會先行動再說。",
      "很多時候你其實不是不知道有風險，而是那個當下，情緒跑得比理性快了一點點。",
      "你並不衝動，只是太在乎、不想出錯。但詐騙往往正是抓住這個「不想讓事情變壞」的心。",
    ],
    tips: [
      "目前的狀態下，你需要的不是更用力提醒自己要小心，而是幫自己多留一個「可以暫停」的空間，讓任何「很急的事」，都不再只能你一個人扛。",
    ],
  },
  {
    index: 1,
    name: "門口停步者",
    subtitle: "察覺異常，卻還在門口猶豫是否前進",
    color: "hsl(var(--type-orange))",
    colorClass: "bg-[hsl(var(--type-orange))]",
    borderClass: "border-[hsl(var(--type-orange))]",
    textClass: "text-[hsl(var(--type-orange))]",
    illustration: {
      src: "/門口停步者.png",
      alt: "門口停步者插圖",
    },
    description: [
      "你通常第一時間就會覺得哪裡怪怪的。🤔",
      "你會多看一眼、多想一下，也不會馬上全然相信。",
      "但你也很難立刻拒絕。",
      "一方面不想誤會對方，一方面又怕自己判斷錯誤。😅",
      "於是常常選擇「再看看」、「先不要把話說死」。",
      "這樣的你，其實很理性，也很體貼。🫶",
      "只是當事情被一再推進，你反而容易被拖著走。",
      "這不是因為你不夠警覺。",
      "而是你太習慣幫事情留後路，卻忘了自己也需要界線。🧱",
      "現在對你來說，最重要的不是變得更果斷。",
      "而是練習告訴自己：不馬上答應，也是一種負責任的選擇。✅",
    ],
    traits: [
      "你通常第一時間就會覺得哪裡怪怪的，會多看一眼、多想一下，也不會馬上全然相信。",
      "但你也很難立刻拒絕，一方面不想誤會對方，一方面又怕自己判斷錯誤。",
      "常常選擇「再看看」、「先不要把話說死」，在推進中容易被拖著走。",
      "你很理性也很體貼，但太習慣幫事情留後路，卻忘了自己也需要界線。",
    ],
    tips: [
      "現在對你來說，最重要的不是變得更果斷，而是練習告訴自己：不馬上答應，也是一種負責任的選擇。",
    ],
  },
  {
    index: 2,
    name: "看圖再行者",
    subtitle: "習慣查證方向，再決定行動",
    color: "hsl(var(--type-yellow))",
    colorClass: "bg-[hsl(var(--type-yellow))]",
    borderClass: "border-[hsl(var(--type-yellow))]",
    textClass: "text-[hsl(var(--type-yellow))]",
    illustration: {
      src: "/看圖再行者.png",
      alt: "看圖再行者插圖",
    },
    description: [
      "你面對可疑情境時，通常會先查資料、找來源、比對資訊。🔍",
      "你不太容易被單一說法說服，也不喜歡只靠感覺做決定。",
      "大多數時候，這讓你避開了很多風險。",
      "你知道怎麼慢下來、怎麼確認、怎麼保護自己。🧭",
      "但有些時候，當事情牽涉到熟人、家人或情感關係，你可能會不自覺放低原本的標準。",
      "這並不是疏忽。",
      "而是因為你太習慣把「信任」當成人與人之間的基礎。💬",
      "對你而言，持續提醒自己「再熟，也值得再確認一次」，會是讓防禦更完整的關鍵。✅",
    ],
    traits: [
      "面對可疑情境時會先查資料、找來源、比對資訊，不喜歡只靠感覺做決定。",
      "這樣的節奏讓你避開很多風險，也知道怎麼慢下來、怎麼確認、怎麼保護自己。",
      "當事情牽涉到熟人、家人或情感關係時，可能會不自覺放低原本的標準。",
      "這並不是疏忽，而是因為你太習慣把「信任」當成人與人之間的基礎。",
    ],
    tips: [
      "持續提醒自己「再熟，也值得再確認一次」，會是讓防禦更完整的關鍵。",
    ],
  },
  {
    index: 3,
    name: "關門守線者",
    subtitle: "界線清楚，知道什麼時候該關門保護自己",
    color: "hsl(var(--type-green))",
    colorClass: "bg-[hsl(var(--type-green))]",
    borderClass: "border-[hsl(var(--type-green))]",
    textClass: "text-[hsl(var(--type-green))]",
    illustration: {
      src: "/關門守線者.png",
      alt: "關門守線者插圖",
    },
    description: [
      "你對界線很清楚，知道什麼不能給、什麼不需要解釋、什麼時候該直接拒絕。🚪",
      "當事情不合理，你通常能快速做出判斷，不太會被情緒或話術牽著走。",
      "這樣的防禦反射，多半來自過往的經驗、學習，或曾經踩過的雷。🧭",
      "需要提醒的是，詐騙手法會一直變化。",
      "而過度相信「我不會被騙」本身，也可能成為破口。⚠️",
      "對你來說，持續更新資訊、保持彈性與謙遜，會比單純自信更能守住這份穩定。🌱",
    ],
    traits: [
      "你對界線很清楚，知道什麼不能給、什麼不需要解釋、什麼時候該直接拒絕。",
      "當事情不合理，通常能快速做出判斷，不太會被情緒或話術牽著走。",
      "這樣的防禦反射，多半來自過往的經驗、學習，或曾經踩過的雷。",
    ],
    tips: [
      "詐騙手法會一直變化，而過度相信「我不會被騙」本身，也可能成為破口。",
      "持續更新資訊、保持彈性與謙遜，會比單純自信更能守住這份穩定。",
    ],
  },
]

// Average scores for radar chart comparison (0-10 scale).
// Defaults to a neutral baseline until real averages are available.
export const averageScores = {
  infoVerification: 5,
  emotionalStability: 5,
  boundaryAwareness: 5,
  riskJudgment: 5,
}

const optionTypeMap: Record<OptionLabel, number> = {
  A: 0, // 浪推前行者
  B: 2, // 看圖再行者
  C: 3, // 關門守線者
  D: 1, // 門口停步者
}

const optionOrder: OptionLabel[] = ["A", "B", "C", "D"]

export function calculateResult(answers: number[]): QuizResult {
  const optionCounts: Record<OptionLabel, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  }

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex]
    const option = question?.options[answerIndex]
    if (!option) return

    optionCounts[option.label] += 1
  })

  const scores = {
    emotionalStability: Math.max(0, 10 - optionCounts.A),
    infoVerification: optionCounts.B,
    boundaryAwareness: optionCounts.C,
    riskJudgment: Math.max(0, 10 - optionCounts.D),
  }

  const dominantOption = optionOrder.reduce((current, option) => {
    if (optionCounts[option] > optionCounts[current]) {
      return option
    }
    return current
  }, optionOrder[0])

  const typeIndex = optionTypeMap[dominantOption]

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
