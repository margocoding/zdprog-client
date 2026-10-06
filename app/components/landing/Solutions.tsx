'use client'

import { useMemo, useState } from "react"
import { LuArrowRight, LuCheck, LuFileText, LuSearch } from "react-icons/lu"

const demoProducts = [
  {
    id: 1,
    name: 'Рельс Р65',
    category: 'Рельсы',
    description: 'Р65 • ГОСТ Р 51685-2013',
  },
  {
    id: 2,
    name: 'Рельс Р50',
    category: 'Рельсы',
    description: 'Р50 • ГОСТ Р 51685-2013',
  },
  {
    id: 3,
    name: 'Шпала Ш1',
    category: 'Шпалы',
    description: 'Железобетонная • ГОСТ 10629-88',
  },
  {
    id: 4,
    name: 'КБ-65',
    category: 'Скрепления',
    description: 'Комплект скрепления • 1 компл.',
  },
  {
    id: 5,
    name: 'ЖБР-65',
    category: 'Скрепления',
    description: 'Комплект скрепления • 1 компл.',
  },
  {
    id: 6,
    name: 'Подкладка Д65',
    category: 'Крепёж',
    description: 'Подкладка рельсовая • 1 шт.',
  },
]

const categories = [
  'Все',
  'Рельсы',
  'Шпалы',
  'Скрепления',
  'Крепёж',
]

export function Solutions() {
  const [category, setCategory] = useState('Все')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<number[]>([])

  const filteredProducts = useMemo(() => {
    return demoProducts.filter((product) => {
      const matchesCategory =
        category === 'Все' || product.category === category

      const query = search.trim().toLowerCase()

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const toggleProduct = (id: number) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <section id="solutions" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Что можно автоматизировать
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              num: '01',
              label: 'КАТАЛОГ',
              title: 'Каталог материалов ВСП',
              desc: 'Структурированный ассортимент с поиском, фильтрами, характеристиками и документацией.',
              ui: (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                        Демо-каталог
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-gray-900">
                        Материалы ВСП
                      </div>
                    </div>

                    {selected.length > 0 && (
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-blue-700">
                        <LuFileText size={13} />
                        {selected.length} в заявке
                      </div>
                    )}
                  </div>

                  <div className="relative mb-3">
                    <LuSearch
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Поиск по каталогу..."
                      className="w-full h-9 pl-9 pr-3 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div className="flex gap-1.5 overflow-x-auto pb-1 mb-3">
                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`px-2.5 py-1.5 rounded-md text-[10px] sm:text-xs font-medium whitespace-nowrap transition-colors ${
                          category === item
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-white text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    {filteredProducts.slice(0, 3).map((product) => {
                      const isSelected = selected.includes(product.id)

                      return (
                        <div
                          key={product.id}
                          className={`flex items-center justify-between gap-2 p-2.5 rounded-lg border transition-colors ${
                            isSelected
                              ? 'border-blue-200 bg-blue-50/60'
                              : 'border-gray-200 bg-white'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-gray-800 truncate">
                              {product.name}
                            </div>

                            <div className="text-[10px] text-gray-400 truncate">
                              {product.description}
                            </div>
                          </div>

                          <button
                            onClick={() => toggleProduct(product.id)}
                            className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-blue-600 text-white'
                                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                            }`}
                          >
                            {isSelected ? (
                              <LuCheck size={14} />
                            ) : (
                              <LuArrowRight size={14} />
                            )}
                          </button>
                        </div>
                      )
                    })}
                  </div>

                  <a
                    href="/demo"
                    className="mt-3 w-full h-9 rounded-lg bg-[#0F2D4A] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1a3d5e] transition-colors"
                  >
                    Открыть полный демо-каталог
                    <LuArrowRight size={14} />
                  </a>
                </div>
              ),
            },
            {
              num: '02',
              label: 'РАСЧЁТ',
              title: 'Онлайн-расчёт',
              desc: 'Клиент выбирает материалы и количество, после чего получает расчёт или отправляет запрос на стоимость.',
              ui: (
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium">
                      Р65
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      500 м
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium">
                      КБ-65
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      840 компл.
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-blue-50 rounded-lg text-center">
                    <span className="text-xs sm:text-sm font-semibold text-blue-700">
                      → Получить расчёт
                    </span>
                  </div>
                </div>
              ),
            },
            {
              num: '03',
              label: 'ЗАЯВКИ',
              title: 'Структурированные заявки',
              desc: 'Менеджер получает не «нужны рельсы», а полноценную спецификацию.',
              ui: (
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">
                      Позиция 1
                    </div>

                    <div className="text-xs sm:text-sm font-medium">
                      Рельс Р65 — 500 м
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">
                      Позиция 2
                    </div>

                    <div className="text-xs sm:text-sm font-medium">
                      КБ-65 — 840 компл.
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 border border-dashed border-gray-300 rounded-lg text-center">
                    <span className="text-xs text-gray-400">
                      + спецификация в PDF
                    </span>
                  </div>
                </div>
              ),
            },
            {
              num: '04',
              label: 'АВТОМАТИЗАЦИЯ',
              title: 'CRM и 1С',
              desc: 'Передаём заявки и данные о товарах непосредственно в используемые системы компании.',
              ui: (
                <div className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 flex-wrap">
                  <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">
                    Сайт
                  </div>

                  <LuArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 flex-shrink-0" />

                  <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-50 rounded-lg text-xs font-medium text-blue-700">
                    API
                  </div>

                  <LuArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 flex-shrink-0" />

                  <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-green-50 rounded-lg text-xs font-medium text-green-700">
                    CRM / 1С
                  </div>
                </div>
              ),
            },
          ].map((s) => (
            <div
              key={s.num}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-xs font-bold text-[#2563EB]">
                  {s.num}
                </span>

                <span className="text-xs font-bold text-gray-400 tracking-wider">
                  / {s.label}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {s.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {s.desc}
              </p>

              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                {s.ui}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}