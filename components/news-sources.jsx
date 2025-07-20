import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function NewsSources({ sources }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {sources.map((source, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow h-[400px] flex flex-col">
          <CardHeader className="pb-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{source.name}</CardTitle>
              {/*
              <Badge variant="outline">{source.category}</Badge>
              */}
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 min-h-0">
              <div className="h-full overflow-y-auto pr-2 -mr-2">
                <div className="space-y-3">
                  {source.articles.map((article, articleIndex) => (
                    <div key={articleIndex}>
                      <Link
                        href={article.url}
                        className="group flex items-start justify-between gap-3 hover:bg-gray-50 p-2 rounded-md -m-2 transition-colors"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{article.time}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                      </Link>
                      {articleIndex < source.articles.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// デフォルトエクスポートも残しておくとどちらの import 形式にも対応できます
export default NewsSources
