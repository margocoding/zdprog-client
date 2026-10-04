'use client'

import { useState } from 'react'

export function AuditCTA() {
  const [formData, setFormData] = useState({ name: '', company: '', website: '', contact: '', message: '' })

  return (
    <section id="audit" style={{ backgroundColor: '#0F2D4A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-6">
              Хотите понять, что можно улучшить в ваших продажах?
            </h2>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed mb-4 sm:mb-6">
              Проведём экспресс-аудит сайта и цифрового пути клиента. Покажем основные точки, где можно упростить поиск товара, получение заявки и работу менеджера.
            </p>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 rounded-lg">
              <span className="text-xs sm:text-sm text-blue-200">Без обязательств. Сначала покажем, что именно можно улучшить.</span>
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Получить бесплатный аудит</h3>
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
              />
              <input
                type="text"
                placeholder="Компания"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
              />
              <input
                type="text"
                placeholder="Сайт"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
              />
              <input
                type="text"
                placeholder="Telegram / телефон"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
              />
              <textarea
                placeholder="Что хотите улучшить?"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Получить аудит
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

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

export function FinalCTA() {
  return (
    <section style={{ backgroundColor: '#0F2D4A' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-5">
          Готовы перевести продажи ВСП в цифровой формат?
        </h2>
        <p className="text-base sm:text-lg text-blue-100/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Расскажите, как сейчас устроены ваши продажи. Мы предложим оптимальный вариант автоматизации.
        </p>
        <a href="#audit" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#2563EB] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-600 transition-colors text-base sm:text-lg">
          Обсудить проект →
        </a>
        <p className="text-xs sm:text-sm text-blue-200/50 mt-3 sm:mt-4">
          Ответим в течение рабочего дня.
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0a1f33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">ЖД-ПРОГ</div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Цифровизация продаж<br />для поставщиков ВСП
            </p>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-300">Решения</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Каталог', 'Автоматизация', 'Калькуляторы', 'Интеграции'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-300">Компания</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {['О компании', 'Кейсы', 'Блог', 'Контакты'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-300">Контакты</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Телефон</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2024 ЖД-ПРОГ. Все права защищены.
          </p>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
