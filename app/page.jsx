import { Calendar } from "lucide-react"
import { getTodaysNewsData, getArchiveDates } from "@/lib/news-api"
import { getNewsData, getArchiveDates2 } from "@/lib/news-data"
import { NewsHeader } from "@/components/news-header"
import { NewsSummaryCard } from "@/components/news-summary"
import { NewsSources } from "@/components/news-sources"
import { NewsArchive } from "@/components/news-archive"
import { NewsFooter } from "@/components/news-footer"

// この関数により、ビルド時に静的にページが生成されます
export default async function NewsArchivePage() {
  try {
    // APIからデータを取得
    const newsData = await getTodaysNewsData()
    const archiveDates = await getArchiveDates()

    // APIからデータが取得できない場合はフォールバックデータを使用
    const { sources, summary, date } = newsData 

    return (
      <div className="min-h-screen bg-background">
        <NewsHeader />

        <main className="container mx-auto px-4 py-8">
          {/* Date Header */}
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">{date}</h2>
            {!newsData && (
              <span className="text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded">
                フォールバックデータを表示中
              </span>
            )}
          </div>

          {/* Today's Summary */}
          <NewsSummaryCard summary={summary} />

          {/* News Sources */}
          <NewsSources sources={sources} />

          {/* Archive Section */}
          <NewsArchive archiveDates={archiveDates} />
        </main>

        <NewsFooter />
      </div>
    )
  } catch (error) {
    console.error("ページの生成に失敗しました:", error)

    const archiveDates = []

    return (
      <div className="min-h-screen bg-background">
        <NewsHeader />

        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">{date}</h2>
            <span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded">
              データ取得エラー - フォールバックデータを表示中
            </span>
          </div>

          <NewsSummaryCard summary={summary} />
          <NewsSources sources={sources} />
          <NewsArchive archiveDates={archiveDates} />
        </main>

        <NewsFooter />
      </div>
    )
  }
}

// ISR設定（1時間ごとに再生成）
export const revalidate = 3600

// メタデータ設定（Next.js App Routerの`metadata`オブジェクトはJSXでは使用不可）
// 別途 head.js を作成してそちらで管理するのが一般的です。
