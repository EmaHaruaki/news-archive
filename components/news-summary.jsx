import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReactMarkdown from "react-markdown"

export function NewsSummaryCard({ summary }) {
  return (
    <Card className="mb-8 border-l-4 border-l-blue-600">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>本日のニュースまとめ</span>
          {/* <Badge variant="secondary">Markdown</Badge> */}
        </CardTitle>
        {/* <CardDescription>主要なトピックをMarkdown形式で掲載しています</CardDescription> */}
      </CardHeader>
      <CardContent className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
        <ReactMarkdown>{summary.markdown}</ReactMarkdown>
      </CardContent>
    </Card>
  )
}
