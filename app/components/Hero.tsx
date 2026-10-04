export default function Hero() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24" style={{ backgroundColor: '#0F2D4A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 text-blue-300 mb-4 sm:mb-6">
              Цифровизация продаж ВСП
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
              Превращаем сайт поставщика ВСП в инструмент продаж
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100/80 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Каталоги, расчёты и автоматизация заявок для компаний, которые продают железнодорожные материалы.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a href="#audit" className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
                Обсудить проект
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm sm:text-base">
                Посмотреть решения ↓
              </a>
            </div>
            <p className="text-xs sm:text-sm text-blue-200/60">
              От каталога материалов до интеграции с CRM и 1С.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform lg:rotate-1">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="text-xs sm:text-sm font-bold text-gray-800 tracking-wide">МАТЕРИАЛЫ ВСП</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-5 overflow-x-auto pb-1">
                <span className="px-2.5 sm:px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full whitespace-nowrap">Рельсы</span>
                <span className="px-2.5 sm:px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full whitespace-nowrap">Шпалы</span>
                <span className="px-2.5 sm:px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full whitespace-nowrap">Скрепления</span>
              </div>
              <div className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Рельс Р65</div>
                <div className="text-xs sm:text-sm text-gray-500 mb-2">Р65 • ГОСТ • новый</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">500 м</span>
                  <button className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-lg">
                    Добавить в заявку
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-5">
                <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">КБ-65</div>
                <div className="text-xs sm:text-sm text-gray-500 mb-2">Скрепление железнодорожное</div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">840 компл.</div>
              </div>
              <button className="w-full py-2.5 sm:py-3 bg-[#0F2D4A] text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl hover:bg-[#1a3d5e] transition-colors">
                Получить расчёт →
              </button>
            </div>

            <div className="hidden lg:block absolute -top-4 -right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-0.5">Заявки</div>
              <div className="text-lg font-bold text-[#F57A00]">+ 124</div>
            </div>
            <div className="hidden lg:block absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-0.5">Каталог</div>
              <div className="text-lg font-bold text-[#2563EB]">840 позиций</div>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-10 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-0.5">CRM</div>
              <div className="text-sm font-bold text-green-600">подключена ✓</div>
            </div>

            <div className="lg:hidden grid grid-cols-3 gap-2 mt-4">
              <div className="bg-white/10 rounded-lg p-2.5 text-center">
                <div className="text-xs text-blue-200/60 mb-0.5">Заявки</div>
                <div className="text-sm font-bold text-[#F57A00]">+124</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2.5 text-center">
                <div className="text-xs text-blue-200/60 mb-0.5">Каталог</div>
                <div className="text-sm font-bold text-blue-300">840</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2.5 text-center">
                <div className="text-xs text-blue-200/60 mb-0.5">CRM</div>
                <div className="text-sm font-bold text-green-400">✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
