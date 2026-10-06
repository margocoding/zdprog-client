import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ЖД-ПРОГ — цифровизация продаж материалов ВСП',
  description:
    'Создаём сайты, каталоги, системы расчёта и автоматизацию продаж для поставщиков железнодорожных материалов ВСП. Каталоги продукции, заявки, расчёты и интеграции с CRM.',
  keywords: [
    'ВСП',
    'материалы ВСП',
    'железнодорожные материалы',
    'поставщики ВСП',
    'продажа материалов ВСП',
    'каталог ВСП',
    'каталог железнодорожных материалов',
    'сайт поставщика ВСП',
    'сайт для поставщика ВСП',
    'цифровизация продаж',
    'автоматизация продаж',
    'автоматизация заявок',
    'онлайн каталог',
    'каталог железнодорожной продукции',
    'рельсы',
    'шпалы',
    'железнодорожные скрепления',
    'крепёж для железных дорог',
    'стрелочные переводы',
    'ЖД-ПРОГ',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'ЖД-ПРОГ — цифровизация продаж материалов ВСП',
    description:
      'Каталоги, расчёты и автоматизация продаж для поставщиков железнодорожных материалов.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ЖД-ПРОГ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЖД-ПРОГ — цифровизация продаж материалов ВСП',
    description:
      'Создаём цифровые инструменты продаж для поставщиков материалов ВСП.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

