import { useState } from 'react'

// ============ HEADER ============
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = ['Решения', 'Как работаем', 'Цены', 'Кейсы', 'О компании']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-18">
        <a href="#" className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: '#0F2D4A' }}>
          ЖД-ПРОГ
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium text-gray-600 hover:text-[#0F2D4A] transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#audit" className="inline-flex items-center px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Обсудить проект
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="Меню">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-600 hover:text-[#0F2D4A] py-2">
              {item}
            </a>
          ))}
          <a href="#audit" onClick={() => setMobileOpen(false)} className="block w-full text-center px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-lg mt-3">
            Обсудить проект
          </a>
        </div>
      )}
    </header>
  )
}

// ============ HERO ============
function Hero() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24" style={{ backgroundColor: '#0F2D4A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Text */}
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

          {/* Right - Mockup */}
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

            {/* Floating cards - hidden on mobile, visible on lg+ */}
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

            {/* Mobile stats - shown below mockup on mobile */}
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

// ============ VALUE STRIP ============
function ValueStrip() {
  const items = [
    { icon: '📋', title: 'Каталог', desc: 'Материалы всегда под рукой' },
    { icon: '🧮', title: 'Расчёт', desc: 'Меньше ручной работы менеджера' },
    { icon: '📝', title: 'Заявки', desc: 'Структурированная потребность клиента' },
    { icon: '🔗', title: 'Интеграции', desc: 'CRM / 1С / API' },
  ]

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ PROBLEM ============
function Problem() {
  const problems = [
    { num: '01', title: 'Клиент не видит ассортимент', desc: 'Нужный материал приходится искать через менеджера.' },
    { num: '02', title: 'Прайс живёт в Excel', desc: 'Покупатель не знает актуальную цену и наличие.' },
    { num: '03', title: 'Заявки приходят хаотично', desc: 'Менеджеру приходится самостоятельно собирать параметры заказа.' },
    { num: '04', title: 'Нет быстрого расчёта', desc: 'Даже простой запрос превращается в переписку.' },
    { num: '05', title: 'Сайт не собирает спрос', desc: 'Компания получает меньше органических переходов по конкретным материалам.' },
  ]

  return (
    <section className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-5">
            Сайт есть. А продажи он помогает получать?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Покупка железнодорожных материалов часто начинается с сайта, а заканчивается телефонными звонками, Excel и десятком уточнений менеджеру.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problems.map((p) => (
            <div key={p.num} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 transition-colors">
              <span className="text-xs font-bold text-[#2563EB] tracking-wider">{p.num}</span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-2 mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0F2D4A] rounded-xl p-5 sm:p-6 lg:p-8">
          <p className="text-white text-base sm:text-lg font-semibold text-center">
            Мы переносим эти процессы в цифровой канал.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============ SOLUTIONS ============
function Solutions() {
  const solutions = [
    {
      num: '01',
      label: 'КАТАЛОГ',
      title: 'Каталог материалов ВСП',
      desc: 'Структурированный ассортимент с поиском, фильтрами, характеристиками и документацией.',
      ui: (
        <div className="space-y-1.5 sm:space-y-2">
          {['Рельсы', 'Шпалы', 'Скрепления', 'Крепёж', 'Стрелочные переводы'].map((item, i) => (
            <div key={item} className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${i === 0 ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-600'}`}>
              {item}
            </div>
          ))}
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
            <span className="text-xs sm:text-sm font-medium">Р65</span>
            <span className="text-xs sm:text-sm text-gray-500">500 м</span>
          </div>
          <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 rounded-lg">
            <span className="text-xs sm:text-sm font-medium">КБ-65</span>
            <span className="text-xs sm:text-sm text-gray-500">840 компл.</span>
          </div>
          <div className="p-2.5 sm:p-3 bg-blue-50 rounded-lg text-center">
            <span className="text-xs sm:text-sm font-semibold text-blue-700">→ Получить расчёт</span>
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
            <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">Позиция 1</div>
            <div className="text-xs sm:text-sm font-medium">Рельс Р65 — 500 м</div>
          </div>
          <div className="p-2.5 sm:p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">Позиция 2</div>
            <div className="text-xs sm:text-sm font-medium">КБ-65 — 840 компл.</div>
          </div>
          <div className="p-2.5 sm:p-3 border border-dashed border-gray-300 rounded-lg text-center">
            <span className="text-xs text-gray-400">+ спецификация в PDF</span>
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
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4">
          <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">Сайт</div>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-50 rounded-lg text-xs font-medium text-blue-700">API</div>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-green-50 rounded-lg text-xs font-medium text-green-700">CRM / 1С</div>
        </div>
      ),
    },
  ]

  return (
    <section id="solutions" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Что можно автоматизировать
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {solutions.map((s) => (
            <div key={s.num} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-xs font-bold text-[#2563EB]">{s.num}</span>
                <span className="text-xs font-bold text-gray-400 tracking-wider">/ {s.label}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">{s.desc}</p>
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

// ============ WORKFLOW ============
function Workflow() {
  const steps = [
    { num: '01', label: 'Каталог' },
    { num: '02', label: 'Материал' },
    { num: '03', label: 'Количество' },
    { num: '04', label: 'Расчёт' },
    { num: '05', label: 'Заявка' },
    { num: '06', label: 'Менеджер' },
    { num: '07', label: 'КП' },
  ]

  return (
    <section style={{ backgroundColor: '#0F2D4A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            От поиска материала до заявки — в одном сценарии
          </h2>
        </div>
        
        {/* Mobile - vertical layout */}
        <div className="lg:hidden space-y-2 mb-10">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 flex-1 flex items-center gap-3">
                <span className="text-xs font-bold text-blue-300">{step.num}</span>
                <span className="text-sm font-semibold text-white">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <svg className="w-4 h-4 text-blue-300/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Desktop - horizontal layout */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-2 mb-12">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-2">
              <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 text-center min-w-[100px]">
                <div className="text-xs font-bold text-blue-300 mb-1">{step.num}</div>
                <div className="text-sm font-semibold text-white">{step.label}</div>
              </div>
              {i < steps.length - 1 && (
                <svg className="w-5 h-5 text-blue-300/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-blue-100/70 text-base sm:text-lg max-w-2xl mx-auto">
          Покупатель получает простой путь. Менеджер — готовую потребность.
        </p>
      </div>
    </section>
  )
}

// ============ BUSINESS RESULT ============
function BusinessResult() {
  const buyerItems = [
    'Быстро найти материал',
    'Посмотреть характеристики',
    'Подобрать количество',
    'Сформировать заявку',
    'Отправить спецификацию',
    'Получить обратную связь',
  ]
  const managerItems = [
    'Структурированные заявки',
    'Меньше однотипных вопросов',
    'Единый каталог',
    'Актуальные данные',
    'CRM-интеграция',
    'История обращений',
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Не просто сайт. Система, которая помогает продавать.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
          <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center text-xs sm:text-sm">👤</span>
              Для покупателя
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {buyerItems.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-100 flex items-center justify-center text-xs sm:text-sm">💼</span>
              Для менеджера
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {managerItems.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-10 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">ПОКУПАТЕЛЬ</span>
            <span className="text-gray-400">→</span>
            <span className="text-xs sm:text-sm font-bold text-[#2563EB]">САЙТ</span>
            <span className="text-gray-400">→</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">МЕНЕДЖЕР</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ PRICING ============
function Pricing() {
  const plans = [
    {
      num: '01',
      title: 'Каталог',
      price: '49 000 ₽',
      desc: 'Для компаний, которым нужен современный каталог материалов.',
      features: ['Каталог', 'Поиск', 'Фильтры', 'Карточки товаров', 'Формы заявок', 'Адаптив', 'SEO-основа', 'Аналитика'],
      cta: 'Выбрать решение',
      featured: false,
    },
    {
      num: '02',
      title: 'Каталог + продажи',
      price: '89 000 ₽',
      desc: 'Всё из тарифа «Каталог»:',
      features: ['Интерактивный прайс', 'Корзина', 'Расчёт', 'Структурированные заявки', 'CRM', 'Уведомления', 'Аналитика'],
      cta: 'Обсудить проект',
      featured: true,
      badge: 'Рекомендуем',
    },
    {
      num: '03',
      title: 'Автоматизация',
      price: 'от 149 000 ₽',
      desc: 'Для компаний со сложными процессами.',
      features: ['1С', 'CRM', 'API', 'Импорт товаров', 'Цены', 'Остатки', 'Генерация КП', 'Личный кабинет'],
      cta: 'Обсудить задачу',
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Выберите уровень цифровизации
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.num}
              className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 relative ${
                plan.featured
                  ? 'bg-[#2563EB] text-white shadow-xl md:scale-[1.02] lg:scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#F57A00] text-white text-xs font-bold rounded-full">
                  {plan.badge}
                </span>
              )}
              <div className={`text-xs font-bold tracking-wider mb-2 ${plan.featured ? 'text-blue-200' : 'text-[#2563EB]'}`}>
                {plan.num}
              </div>
              <h3 className={`text-lg sm:text-xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                {plan.title}
              </h3>
              <div className={`text-2xl sm:text-3xl font-extrabold mb-3 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                {plan.price}
              </div>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${plan.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                {plan.desc}
              </p>
              <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`flex-shrink-0 ${plan.featured ? 'text-blue-200' : 'text-green-500'}`}>✓</span>
                    <span className={`text-xs sm:text-sm ${plan.featured ? 'text-white' : 'text-gray-700'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#audit"
                className={`block w-full text-center py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-colors ${
                  plan.featured
                    ? 'bg-white text-[#2563EB] hover:bg-blue-50'
                    : 'bg-[#0F2D4A] text-white hover:bg-[#1a3d5e]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ WHY US ============
function WhyUs() {
  const advantages = [
    {
      title: 'Узкая специализация',
      desc: 'Фокусируемся на digital-задачах поставщиков ВСП и ЖД-материалов.',
      icon: '🎯',
    },
    {
      title: 'Бизнес прежде технологий',
      desc: 'Сначала разбираемся в процессе продаж, потом выбираем техническое решение.',
      icon: '📊',
    },
    {
      title: 'Понятная стоимость',
      desc: 'Базовые решения имеют фиксированную стоимость.',
      icon: '💰',
    },
    {
      title: 'Развитие после запуска',
      desc: 'Начинаем с необходимого, а затем подключаем автоматизацию и интеграции.',
      icon: '🚀',
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Мы понимаем не только разработку. Мы понимаем задачу продаж.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{a.icon}</div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2">{a.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ BEFORE / AFTER ============
function BeforeAfter() {
  const before = ['Клиент', 'Звонок', 'Менеджер', 'Excel', 'Уточнение', 'Расчёт', 'КП']
  const after = ['Клиент', 'Каталог', 'Материалы', 'Количество', 'Заявка', 'CRM', 'Менеджер']

  return (
    <section className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Как выглядит процесс
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-red-100">
            <h3 className="text-base sm:text-lg font-bold text-red-600 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-50 flex items-center justify-center text-xs sm:text-sm">✕</span>
              ДО
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              {before.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-50 flex items-center justify-center text-xs font-bold text-red-400 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">{step}</span>
                  {i < before.length - 1 && (
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* After */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-green-100">
            <h3 className="text-base sm:text-lg font-bold text-green-600 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-50 flex items-center justify-center text-xs sm:text-sm">✓</span>
              ПОСЛЕ
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              {after.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-50 flex items-center justify-center text-xs font-bold text-green-500 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">{step}</span>
                  {i < after.length - 1 && (
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 text-base sm:text-lg mt-6 sm:mt-10 max-w-2xl mx-auto font-medium px-4">
          Убираем лишние действия между интересом клиента и заявкой.
        </p>
      </div>
    </section>
  )
}

// ============ BLOG / SEO ============
function Blog() {
  const articles = [
    {
      title: 'ТОП-10 ошибок в маркетинге продаж ВСП',
      desc: 'Проверьте, какие элементы вашего сайта могут мешать получению заявок.',
      cta: 'Получить ТОП-10 ошибок →',
      featured: true,
    },
    {
      title: 'Как должен выглядеть каталог материалов ВСП',
      desc: 'Что покупатель должен увидеть до обращения к менеджеру.',
      cta: 'Читать →',
      featured: false,
    },
    {
      title: 'Что можно автоматизировать в продажах ЖД-материалов',
      desc: 'От Excel-прайса до CRM и генерации КП.',
      cta: 'Читать →',
      featured: false,
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Полезные материалы для поставщиков ВСП
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article) => (
            <div
              key={article.title}
              className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 ${
                article.featured
                  ? 'bg-[#0F2D4A] text-white sm:col-span-2 lg:col-span-1'
                  : 'bg-[#F8FAFC] border border-gray-100'
              }`}
            >
              <h3 className={`text-base sm:text-lg font-bold mb-2 sm:mb-3 ${article.featured ? 'text-white' : 'text-gray-900'}`}>
                {article.title}
              </h3>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed ${article.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                {article.desc}
              </p>
              <a href="#" className={`text-xs sm:text-sm font-semibold ${article.featured ? 'text-[#F57A00]' : 'text-[#2563EB]'}`}>
                {article.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ AUDIT CTA ============
function AuditCTA() {
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

// ============ FAQ ============
function FAQ() {
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

// ============ FINAL CTA ============
function FinalCTA() {
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

// ============ FOOTER ============
function Footer() {
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

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueStrip />
      <Problem />
      <Solutions />
      <Workflow />
      <BusinessResult />
      <Pricing />
      <WhyUs />
      <BeforeAfter />
      <Blog />
      <AuditCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
