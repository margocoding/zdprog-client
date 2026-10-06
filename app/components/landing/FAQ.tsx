'use client';

import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const questions = [
    { q: 'Можно ли сделать каталог из существующего Excel?', a: 'Да. Каталог можно импортировать и настроить дальнейшее обновление данных.' },
    { q: 'Можно ли подключить 1С?', a: 'Да, если API/обмен данными вашей конфигурации это позволяет.' },
    { q: 'Можно ли показывать разные цены клиентам?', a: 'Да, это можно реализовать на уровне авторизации/интеграции.' },
    { q: 'Можно ли начать только с каталога?', a: 'Да. Сайт можно развивать поэтапно.' },
    { q: 'Сколько времени занимает разработка?', a: 'Зависит от объёма каталога и интеграций. Базовый каталог — отдельный фиксированный пакет.' },
    { q: 'Можно ли сделать расчёт материалов?', a: 'Да. От простой корзины до полноценного конфигуратора.' },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-10 text-center">
          Частые вопросы
        </h2>
        <div className="space-y-2 sm:space-y-3">
          {questions.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs sm:text-sm font-semibold text-gray-900 pr-3 sm:pr-4">{item.q}</span>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}