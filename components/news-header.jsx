import { Newspaper, Archive, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsHeader() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ニュースアーカイブ</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              今日のニュース
            </Link>
            <Link href="/archive" className="text-gray-600 hover:text-gray-900 font-medium">
              アーカイブ
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900 font-medium">
              カテゴリー
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="ニュースを検索..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
