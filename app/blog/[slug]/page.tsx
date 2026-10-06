import { articles } from "@/data/articles";
import type { Metadata } from "next";
import Link from "next/link";
import {
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpRight,
  LuBookOpen,
  LuCheck,
  LuClock3,
  LuFileText,
} from "react-icons/lu";


export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: "Статья не найдена | ЖД-ПРОГ",
    };
  }

  return {
    title: `${article.title} | ЖД-ПРОГ`,
    description: article.description,
    alternates: {
      canonical: `https://жд-прог.рф/blog/${slug}`,
    },
    openGraph: {
      title: `${article.title} | ЖД-ПРОГ`,
      description: article.description,
      type: "article",
      publishedTime: "2026-10-05",
      locale: "ru_RU",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main className="min-h-[60vh] bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Статья не найдена
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Возможно, статья была перемещена или удалена.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#2563EB]"
          >
            <LuArrowLeft className="w-4 h-4" />
            Вернуться в блог
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <article>
        <header className="bg-[#0F2D4A] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>

              <span>/</span>

              <Link href="/blog" className="hover:text-white transition-colors">
                Блог
              </Link>

              <span>/</span>

              <span className="text-white/70 truncate">{article.title}</span>
            </nav>

            <div className="flex items-center gap-4 mb-5">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100">
                {article.category}
              </span>

              <span className="flex items-center gap-1.5 text-xs text-blue-200">
                <LuClock3 className="w-3.5 h-3.5" />
                {article.readTime}
              </span>

              <span className="text-xs text-blue-200">{article.date}</span>
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              {article.title}
            </h1>

            <p className="max-w-3xl mt-5 text-base sm:text-lg leading-relaxed text-blue-100">
              {article.description}
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[220px_minmax(0,760px)] gap-8 lg:gap-16 py-10 sm:py-14 lg:py-20">
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
                  <LuFileText className="w-4 h-4 text-[#2563EB]" />
                  Содержание
                </div>

                <nav className="space-y-2 text-sm text-gray-500">
                  {[
                    "На сайте нет полноценного онлайн-каталога",
                    "Ассортимент представлен слишком общо",
                    "Нет характеристик материалов",
                    "Прайс существует отдельно от сайта",
                    "Покупателя заставляют звонить",
                    "Нет удобной формы заявки",
                    "Спецификации обрабатываются вручную",
                    "На сайте нет понятного сценария",
                    "Сайт не связан с внутренними процессами",
                    "Сайт создаётся «для галочки»",
                  ].map((item, index) => (
                    <a
                      key={item}
                      href={`#error-${index + 1}`}
                      className="block hover:text-[#2563EB] transition-colors"
                    >
                      {index + 1}. {item}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div>
              <div className="lg:hidden mb-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
                  <LuFileText className="w-4 h-4 text-[#2563EB]" />
                  Содержание
                </div>

                <div className="grid gap-2 text-sm text-gray-600">
                  {[
                    "На сайте нет полноценного онлайн-каталога",
                    "Ассортимент представлен слишком общо",
                    "Нет характеристик материалов",
                    "Прайс существует отдельно от сайта",
                    "Покупателя заставляют звонить",
                    "Нет удобной формы заявки",
                    "Спецификации обрабатываются вручную",
                    "На сайте нет понятного сценария",
                    "Сайт не связан с внутренними процессами",
                    "Сайт создаётся «для галочки»",
                  ].map((item, index) => (
                    <a
                      key={item}
                      href={`#error-${index + 1}`}
                      className="hover:text-[#2563EB] transition-colors"
                    >
                      {index + 1}. {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                {article.content}
              </div>

              <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-[#0F2D4A] p-6 sm:p-8 lg:p-10 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-200 mb-4">
                  <LuBookOpen className="w-4 h-4" />
                  ЖД-ПРОГ
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Сайт должен помогать продавать, а не просто существовать
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-blue-100 max-w-2xl">
                  Мы создаём сайты и цифровые инструменты для поставщиков
                  материалов верхнего строения пути: каталог, заявки,
                  спецификации и интеграции с внутренними процессами компании.
                </p>

                <Link
                  href="/#audit"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-[#F57A00] text-white text-sm font-bold hover:bg-orange-600 transition-colors"
                >
                  Обсудить проект
                  <LuArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
                >
                  <LuArrowLeft className="w-4 h-4" />
                  Все статьи
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
