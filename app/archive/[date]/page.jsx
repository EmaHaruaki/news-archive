import { Calendar } from "lucide-react"
import { getNewsDataByDate, getAllAvailableDates } from "@/lib/news-api"
import { NewsHeader } from "@/components/news-header"
import { NewsSummaryCard } from "@/components/news-summary"
import { NewsSources } from "@/components/news-sources"
import { NewsFooter } from "@/components/news-footer"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const dates = await getAllAvailableDates()

  return dates.map((date) => ({
    date: date,
  }))
}

export default async function ArchivePage({ params }) {
  const { date } = params

  try {
    const newsData = await getNewsDataByDate(date)

    if (!newsData) {
      notFound()
    }

    const { sources, summary, date: formattedDate } = newsData

    return (
      <div className="min-h-screen bg-background">
        <NewsHeader />

        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">{formattedDate}</h2>
            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">アーカイブ</span>
          </div>

          <NewsSummaryCard summary={summary} />
          <NewsSources sources={sources} />
        </main>

        <NewsFooter />
      </div>
    )
  } catch (error) {
    console.error("アーカイブページの生成に失敗しました:", error)
    notFound()
  }
}

export const metadata = {
  title: "ニュースアーカイブ - 過去のニュース",
  description: "過去のニュース記事とアーカイブを閲覧できます。",
}
