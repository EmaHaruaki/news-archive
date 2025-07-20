import { Newspaper } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function NewsFooter() {
  return (
    <footer className="border-t bg-gray-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-gray-900">Fastnews.com</span>
            </div>
            <p className="text-gray-600 text-sm">複数のニュースソースから最新情報を収集し、整理してお届けします。</p>
          </div>
          <div>
            {/*
            <h3 className="font-semibold text-gray-900 mb-4">カテゴリー</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/categories/general" className="hover:text-blue-600">
                  総合
                </Link>
              </li>
              <li>
                <Link href="/categories/politics" className="hover:text-blue-600">
                  政治
                </Link>
              </li>
              <li>
                <Link href="/categories/economy" className="hover:text-blue-600">
                  経済
                </Link>
              </li>
              <li>
                <Link href="/categories/technology" className="hover:text-blue-600">
                  テクノロジー
                </Link>
              </li>
            </ul>
            */}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">リンク</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-gray-500">© 2025 Fastnews.com All rights reserved.</div>
      </div>
    </footer>
  )
}
