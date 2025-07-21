import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'FastNews.com',
    template: '%s | FastNews.com',
  },
  description: '国内の主要ニュースサイトを参照し、毎日更新される主要ニュースを要約してお届けします。',
  keywords: ['ニュース', '要約', '今日のニュース', '国内ニュース', '国際ニュース', '速報'],
  authors: [{ name: 'FastNews編集部', url: 'https://fastnews.com' }],
  creator: 'FastNews編集部',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fastnews.com',
    siteName: 'FastNews.com',
    title: 'FastNews.com | 毎日のニュース要約',
    description: '国内外の主要ニュースを要約して毎日お届けするメディアサイト。',
    images: [
      {
        url: 'https://fastnews.com/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'FastNewsのイメージ画像',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FastNews.com',
    description: '国内外の主要ニュースを要約して毎日お届けします。',
    site: '@fastnews_jp',
    creator: '@fastnews_jp',
    images: ['https://fastnews.com/ogp.jpg'],
  },
  metadataBase: new URL('https://fastnews.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6223204618871414"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  )
}
