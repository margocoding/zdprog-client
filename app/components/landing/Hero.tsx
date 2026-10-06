'use client'

import { useMemo, useState } from 'react'
import {
  LuCheck,
  LuFileText,
  LuSearch,
  LuShoppingCart,
} from 'react-icons/lu'

const categories = ['Все', 'Рельсы', 'Шпалы', 'Скрепления']

const products = [
  {
    id: 1,
    name: 'Рельс Р65',
    category: 'Рельсы',
    description: 'Р65 • ГОСТ Р 51685-2013',
    unit: '500 м',
  },
  {
    id: 2,
    name: 'Рельс Р50',
    category: 'Рельсы',
    description: 'Р50 • ГОСТ Р 51685-2013',
    unit: '250 м',
  },
  {
    id: 3,
    name: 'Шпала Ш1',
    category: 'Шпалы',
    description: 'Железобетонная • ГОСТ 10629-88',
    unit: '1000 шт.',
  },
  {
    id: 4,
    name: 'КБ-65',
    category: 'Скрепления',
    description: 'Комплект скрепления • 1 компл.',
    unit: '840 компл.',
  },
  {
    id: 5,
    name: 'ЖБР-65',
    category: 'Скрепления',
    description: 'Комплект скрепления • 1 компл.',
    unit: '600 компл.',
  },
]

export default function Hero() {
  const [category, setCategory] = useState('Все')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<number[]>([])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === 'Все' || product.category === category

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())

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
    <section
      className="pt-16 sm:pt-20 lg:pt-24"
      style={{ backgroundColor: '#0F2D4A' }}
    >
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
              Каталоги, расчёты и автоматизация заявок для компаний, которые
              продают железнодорожные материалы.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                Обсудить проект
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm sm:text-base"
              >
                Посмотреть решения ↓
              </a>
            </div>

            <p className="text-xs sm:text-sm text-blue-200/60">
              От онлайн-каталога до автоматизации заявок и интеграции с CRM и
              1С.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-7 transform lg:rotate-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                    Каталог поставщика
                  </span>

                  <div className="text-sm sm:text-base font-bold text-gray-900">
                    МАТЕРИАЛЫ ВСП
                  </div>
                </div>

                <div className="relative">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                    <LuShoppingCart size={17} className="text-gray-600" />
                  </div>

                  {selected.length > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center">
                      {selected.length}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative mb-4">
                <LuSearch
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Поиск по каталогу..."
                  className="w-full h-9 pl-9 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
                      category === item
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="space-y-2.5 min-h-[184px]">
                {filteredProducts.slice(0, 3).map((product) => {
                  const isSelected = selected.includes(product.id)

                  return (
                    <div
                      key={product.id}
                      className={`border rounded-lg p-3 transition-all ${
                        isSelected
                          ? 'border-blue-200 bg-blue-50/50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">
                            {product.name}
                          </div>

                          <div className="text-[10px] sm:text-xs text-gray-500 truncate">
                            {product.description}
                          </div>

                          <div className="text-[10px] sm:text-xs font-medium text-gray-700 mt-1.5">
                            {product.unit}
                          </div>
                        </div>

                        <button
                          onClick={() => toggleProduct(product.id)}
                          className={`shrink-0 px-2.5 py-1.5 text-[10px] sm:text-xs font-semibold rounded-md transition-colors ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                          }`}
                        >
                          {isSelected ? (
                            <span className="inline-flex items-center gap-1">
                              <LuCheck size={12} />
                              В заявке
                            </span>
                          ) : (
                            'В заявку'
                          )}
                        </button>
                      </div>
                    </div>
                  )
                })}

                {filteredProducts.length === 0 && (
                  <div className="h-[184px] flex flex-col items-center justify-center text-center">
                    <LuSearch size={22} className="text-gray-300 mb-2" />
                    <div className="text-xs font-medium text-gray-500">
                      Ничего не найдено
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">
                      Попробуйте изменить запрос
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  disabled={selected.length === 0}
                  className={`w-full h-10 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                    selected.length > 0
                      ? 'bg-[#0F2D4A] text-white hover:bg-[#1a3d5e]'
                      : 'bg-gray-100 text-gray-400 cursor-default'
                  }`}
                >
                  <LuFileText size={15} />
                  {selected.length > 0
                    ? `Получить расчёт · ${selected.length} поз.`
                    : 'Выберите материалы'}
                </button>
              </div>
            </div>

            <div className="hidden lg:block absolute -top-4 -right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-0.5">
                Заявки
              </div>

              <div className="text-sm font-bold text-[#F57A00]">
                структурированные
              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-0.5">
                Каталог
              </div>

              <div className="text-lg font-bold text-[#2563EB]">
                1000+ позиций
              </div>
            </div>

            <div className="hidden lg:block absolute top-1/2 -right-10 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-0.5">
                CRM
              </div>

              <div className="text-sm font-bold text-green-600">
                подключение ✓
              </div>
            </div>

            <div className="lg:hidden grid grid-cols-3 gap-2 mt-4">
              <div className="bg-white/10 rounded-lg p-2.5 text-center">
                <div className="text-xs text-blue-200/60 mb-0.5">
                  Заявки
                </div>

                <div className="text-sm font-bold text-[#F57A00]">
                  CRM
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-2.5 text-center">
                <div className="text-xs text-blue-200/60 mb-0.5">
                  Каталог
                </div>

                <div className="text-sm font-bold text-blue-300">
                  1000+
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-2.5 text-center">
                <div className="text-xs text-blue-200/60 mb-0.5">
                  Расчёт
                </div>

                <div className="text-sm font-bold text-green-400">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}