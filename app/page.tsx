import { QuizFlow } from "@/components/quiz-flow"

interface PageProps {
  searchParams?: { type?: string | string[]; t?: string | string[] }
}

export default function Page({ searchParams }: PageProps) {
  return <QuizFlow shareTypeName={searchParams?.type} shareTypeIndex={searchParams?.t} />
}
