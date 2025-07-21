"use client" // クライアントコンポーネントとしてマーク

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation" // useRouterを追加
import { Search, ExternalLink } from "lucide-react"
import Link from "next/link"
import { NewsHeader } from "@/components/news-header"
import { NewsFooter } from "@/components/news-footer"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { searchNewsArticles } from "@/lib/news-api" // news-api.js から直接インポート

export default function SearchPageClient() {
  const searchParams = useSearchParams()
  const router = useRouter() // useRouterを初期化
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false) // ローディング状態を追加

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      const fetchedResults = await searchNewsArticles(query)
      setResults(fetchedResults)
      setLoading(false)
    }

    fetchResults()
  }, [query]) // queryが変更されるたびに検索を実行

  const handleSearch = (e) => {
    e.preventDefault()
    const newQuery = e.target.q.value // name="q" のinputから値を取得
    setQuery(newQuery)
    // URLを更新して検索クエリを反映
    router.push(`/search?q=${encodeURIComponent(newQuery)}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              ニュース検索
            </CardTitle>
            <CardDescription>キーワードでニュース記事を検索します。</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                name="q" // name属性を"q"に設定
                placeholder="キーワードを入力..."
                defaultValue={initialQuery}
                className="flex-1"
              />
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                検索
              </button>
            </form>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">検索結果 ({results.length}件)</h2>

        <div className="grid gap-4">
          {loading ? (
            <p className="text-center text-gray-500">検索中...</p>
          ) : results.length > 0 ? (
            results.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link href={`/archive/${article.slug}`} className="group flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{article.ymd}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                  </Link>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">
              {query ? `「${query}」に一致する記事は見つかりませんでした。` : "検索キーワードを入力してください。"}
            </p>
          )}
        </div>
      </main>

      <NewsFooter />
    </div>
  )
}
