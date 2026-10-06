import Link from "next/link";
import {
  LuArrowLeft,
  LuArrowUpRight,
  LuBookOpen,
  LuCircleHelp,
  LuHouse,
  LuSearch,
  LuTrainFront,
} from "react-icons/lu";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#2563EB] mb-6 sm:mb-8">
            <LuTrainFront className="w-4 h-4" />
            <span>ЖД-ПРОГ</span>
          </div>

          <div className="relative mb-8 sm:mb-10">
            <div className="text-[100px] sm:text-[150px] lg:text-[190px] leading-none font-black tracking-[-0.08em] text-[#0F2D4A] select-none">
              404
            </div>

            <div className="absolute inset-x-0 bottom-2 sm:bottom-4 flex items-center justify-center">
              <div className="w-full max-w-md h-px bg-gray-200" />
            </div>

            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F57A00] text-white flex items-center justify-center shadow-lg shadow-orange-100">
              <LuSearch className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Страница не найдена
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-500">
              Похоже, нужная страница была перемещена, удалена или адрес
              указан с ошибкой. Но нужные материалы и информация о ЖД-ПРОГ
              всё ещё доступны.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2D4A] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#123653]"
            >
              <LuHouse className="w-4 h-4" />
              На главную
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <LuBookOpen className="w-4 h-4" />
              Полезные материалы
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <Link
              href="/"
              className="group rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#2563EB]">
                  <LuHouse className="w-5 h-5" />
                </div>

                <LuArrowUpRight className="w-4 h-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h2 className="mt-5 text-sm sm:text-base font-bold text-gray-900">
                Главная страница
              </h2>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                Узнайте, как ЖД-ПРОГ помогает поставщикам ВСП организовать
                продажи и работу с заявками.
              </p>
            </Link>

            <Link
              href="/blog"
              className="group rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#2563EB]">
                  <LuBookOpen className="w-5 h-5" />
                </div>

                <LuArrowUpRight className="w-4 h-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h2 className="mt-5 text-sm sm:text-base font-bold text-gray-900">
                Блог ЖД-ПРОГ
              </h2>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                Статьи о продажах ВСП, онлайн-каталогах, сайтах и
                автоматизации работы поставщиков.
              </p>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
            <LuCircleHelp className="w-3.5 h-3.5" />
            <span>Если вы перешли сюда по ссылке, проверьте адрес страницы.</span>
          </div>
        </div>
      </div>
    </main>
  );
}