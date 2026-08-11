import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: '담페이 | 신용카드 현금화 · 소액결제 현금화 · 정보이용료 현금화 업계 최고 지급률',
  description: '담페이는 신용카드 현금화, 소액결제 현금화, 정보이용료 현금화 전문 업체입니다. 업계 최고 94% 지급률, 365일 24시간 상담, 5년간 무사고 운영. 무이자 할부 · 앱카드 · 신용한도 영향 없음. 안전하고 신속한 현금화 서비스.',
  keywords: '담페이, 신용카드현금화, 소액결제현금화, 정보이용료현금화, 휴대폰현금화, 카드깡, 카드현금화, 94% 지급률, 24시간상담, 무이자할부, 앱카드현금화',
  metadataBase: new URL('https://dampay.hsweb.pics'),
  alternates: {
    canonical: 'https://dampay.hsweb.pics',
    types: {
      'application/rss+xml': 'https://dampay.hsweb.pics/feed.xml',
    },
  },
  openGraph: {
    title: '담페이 | 신용카드 현금화 · 소액결제 현금화 업계 최고 94% 지급률',
    description: '업계 최고 94% 지급률, 365일 24시간 상담, 5년간 무사고. 무이자 할부 · 앱카드 · 신용한도 영향 없음.',
    type: 'website',
    url: 'https://dampay.hsweb.pics',
    siteName: '담페이',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary',
    title: '담페이 | 신용카드 현금화 · 소액결제 현금화',
    description: '업계 최고 94% 지급률. 365일 24시간 상담. 안전하고 신속한 카드 현금화.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
