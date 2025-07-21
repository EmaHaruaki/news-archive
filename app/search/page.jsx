import SearchPageClient from "./SearchPageClient"

export const metadata = {
  title: "ニュースアーカイブ - 検索結果",
  description: "ニュース記事の検索結果を表示します。",
}

export const revalidate = 3600

export default function SearchPage() {
  return <SearchPageClient />
}
