export function ValueStrip() {
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

export function Problem() {
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

export function Solutions() {
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
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 flex-wrap">
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

export function Workflow() {
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

export function BusinessResult() {
  const buyerItems = ['Быстро найти материал', 'Посмотреть характеристики', 'Подобрать количество', 'Сформировать заявку', 'Отправить спецификацию', 'Получить обратную связь']
  const managerItems = ['Структурированные заявки', 'Меньше однотипных вопросов', 'Единый каталог', 'Актуальные данные', 'CRM-интеграция', 'История обращений']

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
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 rounded-full flex-wrap justify-center">
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

export function Pricing() {
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

export function WhyUs() {
  const advantages = [
    { title: 'Узкая специализация', desc: 'Фокусируемся на digital-задачах поставщиков ВСП и ЖД-материалов.', icon: '🎯' },
    { title: 'Бизнес прежде технологий', desc: 'Сначала разбираемся в процессе продаж, потом выбираем техническое решение.', icon: '📊' },
    { title: 'Понятная стоимость', desc: 'Базовые решения имеют фиксированную стоимость.', icon: '💰' },
    { title: 'Развитие после запуска', desc: 'Начинаем с необходимого, а затем подключаем автоматизацию и интеграции.', icon: '🚀' },
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

export function BeforeAfter() {
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

export function Blog() {
  const articles = [
    { title: 'ТОП-10 ошибок в маркетинге продаж ВСП', desc: 'Проверьте, какие элементы вашего сайта могут мешать получению заявок.', cta: 'Получить ТОП-10 ошибок →', featured: true },
    { title: 'Как должен выглядеть каталог материалов ВСП', desc: 'Что покупатель должен увидеть до обращения к менеджеру.', cta: 'Читать →', featured: false },
    { title: 'Что можно автоматизировать в продажах ЖД-материалов', desc: 'От Excel-прайса до CRM и генерации КП.', cta: 'Читать →', featured: false },
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
