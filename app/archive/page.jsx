import { Archive, ExternalLink } from "lucide-react"
import Link from "next/link"
import { getAllAvailableDates } from "@/lib/news-api"
import { NewsHeader } from "@/components/news-header"
import { NewsFooter } from "@/components/news-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default async function ArchiveIndexPage() {
  const dates = await getAllAvailableDates()

  // 日付を新しい順にソート
  const sortedDates = dates.sort((a, b) => new Date(b) - new Date(a))

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />

      <main className="container mx-auto px-4 py-8">
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Archive className="h-5 w-5" />
              ニュースアーカイブ一覧
            </CardTitle>
            <CardDescription>過去のニュース要約と記事を日付別に閲覧できます。</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {sortedDates.length > 0 ? (
                sortedDates.map((dateSlug, index) => (
                  <Link
                    key={index}
                    href={`/archive/${dateSlug}`}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">
                      {new Date(dateSlug).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </Link>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">アーカイブされたニュースはありません。</p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      <NewsFooter />
    </div>
  )
}

export const metadata = {
  title: "ニュースアーカイブ - 全てのアーカイブ",
  description: "過去のニュース記事の全アーカイブ一覧。",
}

// ISR設定（1時間ごとに再生成）
export const revalidate = 3600
