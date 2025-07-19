import { Archive, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function NewsArchive({ archiveDates }) {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Archive className="h-5 w-5" />
          過去のニュース
        </CardTitle>
        <CardDescription>過去のニュース要約とアーカイブを閲覧できます</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {archiveDates.map(({ slug, label }, index) => (
            <Link
              key={index}
              href={`/archive/${slug}/`}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="font-medium text-gray-700 group-hover:text-blue-600">{label}</span>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" asChild>
            <Link href="/archive">さらに過去のアーカイブを見る</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
