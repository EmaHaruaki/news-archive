import { Newspaper } from "lucide-react"
import Link from "next/link"
import { SearchForm } from "./SearchForm"

export function NewsHeader() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              <Link href="/">Fastnews.com</Link>
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              今日のニュース
            </Link>
            <Link href="/archive" className="text-gray-600 hover:text-gray-900 font-medium">
              アーカイブ
            </Link>
          </nav>
          <SearchForm />
        </div>
      </div>
    </header>
  )
}
