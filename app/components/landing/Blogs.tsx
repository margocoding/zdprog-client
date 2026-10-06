import Link from "next/link";
import { LuArrowUpRight, LuBookOpen, LuClock3 } from "react-icons/lu";

export function Blog() {
  const articles = [
    {
      title: "ТОП-10 ошибок в маркетинге продаж ВСП",
      desc: "Какие проблемы на сайте поставщика мешают покупателю быстро найти материал и оставить заявку.",
      slug: "oshibki-v-marketinge-prodazh-vsp",
      category: "Продажи ВСП",
      readTime: "7 мин",
      featured: true,
    },
    // {
    //   title: "Как должен выглядеть каталог материалов ВСП",
    //   desc: "Что покупатель должен увидеть в каталоге до обращения к менеджеру.",
    //   slug: "kak-dolzhen-vyglyadet-katalog-materialov-vsp",
    //   category: "Каталог",
    //   readTime: "6 мин",
    //   featured: false,
    // },
    // {
    //   title: "Что можно автоматизировать в продажах ЖД-материалов",
    //   desc: "От Excel-прайса и обработки заявок до CRM и автоматической подготовки коммерческих предложений.",
    //   slug: "avtomatizatsiya-prodazh-zheleznodorozhnykh-materialov",
    //   category: "Автоматизация",
    //   readTime: "8 мин",
    //   featured: false,
    // },
    // {
    //   title: "Как продавать материалы ВСП через интернет",
    //   desc: "Какие элементы сайта помогают превратить посетителя в реальную заявку на поставку.",
    //   slug: "kak-prodavat-materialy-vsp-cherez-internet",
    //   category: "Продажи ВСП",
    //   readTime: "7 мин",
    //   featured: false,
    // },
    // {
    //   title: "Что должно быть на сайте поставщика ВСП",
    //   desc: "Разбираем обязательные элементы сайта, которые помогают покупателю быстрее принять решение.",
    //   slug: "chto-dolzhno-byt-na-sayte-postavshchika-vsp",
    //   category: "Сайт",
    //   readTime: "6 мин",
    //   featured: false,
    // },
    // {
    //   title: "Как оформить прайс на материалы ВСП",
    //   desc: "Почему обычный Excel-файл не всегда подходит для продаж и как превратить прайс в удобный каталог.",
    //   slug: "kak-oformit-prays-na-materialy-vsp",
    //   category: "Каталог",
    //   readTime: "5 мин",
    //   featured: false,
    // },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB]">
                <LuBookOpen className="w-4 h-4" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#2563EB]">
                Блог ЖД-ПРОГ
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              Полезные материалы для поставщиков ВСП
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
              Практические материалы о продажах, каталогах, сайтах и
              автоматизации работы поставщиков железнодорожных материалов.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors shrink-0"
          >
            Все статьи
            <LuArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={`group block rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-200 hover:-translate-y-1 ${
                article.featured
                  ? "bg-[#0F2D4A] text-white hover:bg-[#123653]"
                  : "bg-[#F8FAFC] border border-gray-100 hover:border-gray-200 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wide ${
                    article.featured ? "text-blue-200" : "text-[#2563EB]"
                  }`}
                >
                  {article.category}
                </span>

                <span
                  className={`flex items-center gap-1.5 text-[11px] ${
                    article.featured ? "text-blue-200" : "text-gray-400"
                  }`}
                >
                  <LuClock3 className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h3
                className={`text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-snug ${
                  article.featured ? "text-white" : "text-gray-900"
                }`}
              >
                {article.title}
              </h3>

              <p
                className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                  article.featured ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {article.desc}
              </p>

              <span
                className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${
                  article.featured ? "text-[#F57A00]" : "text-[#2563EB]"
                }`}
              >
                Читать статью
                <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
