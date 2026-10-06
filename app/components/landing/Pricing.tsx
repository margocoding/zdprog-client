export function Pricing() {
  const plans = [
    {
      num: "01",
      title: "Каталог",
      price: "49 000 ₽",
      desc: "Для компаний, которым нужен современный каталог материалов.",
      features: [
        "Каталог",
        "Поиск",
        "Фильтры",
        "Карточки товаров",
        "Формы заявок",
        "Адаптив",
        "SEO-основа",
        "Аналитика",
      ],
      cta: "Выбрать решение",
      featured: false,
    },
    {
      num: "02",
      title: "Каталог + продажи",
      price: "89 000 ₽",
      desc: "Всё из тарифа «Каталог»:",
      features: [
        "Интерактивный прайс",
        "Корзина",
        "Расчёт",
        "Структурированные заявки",
        "CRM",
        "Уведомления",
        "Аналитика",
      ],
      cta: "Обсудить проект",
      featured: true,
      badge: "Рекомендуем",
    },
    {
      num: "03",
      title: "Автоматизация",
      price: "от 149 000 ₽",
      desc: "Для компаний со сложными процессами.",
      features: [
        "1С",
        "CRM",
        "API",
        "Импорт товаров",
        "Цены",
        "Остатки",
        "Генерация КП",
        "Личный кабинет",
      ],
      cta: "Обсудить задачу",
      featured: false,
    },
  ];

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
                  ? "bg-[#2563EB] text-white shadow-xl md:scale-[1.02] lg:scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#F57A00] text-white text-xs font-bold rounded-full">
                  {plan.badge}
                </span>
              )}
              <div
                className={`text-xs font-bold tracking-wider mb-2 ${plan.featured ? "text-blue-200" : "text-[#2563EB]"}`}
              >
                {plan.num}
              </div>
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-gray-900"}`}
              >
                {plan.title}
              </h3>
              <div
                className={`text-2xl sm:text-3xl font-extrabold mb-3 ${plan.featured ? "text-white" : "text-gray-900"}`}
              >
                {plan.price}
              </div>
              <p
                className={`text-xs sm:text-sm mb-4 sm:mb-6 ${plan.featured ? "text-blue-100" : "text-gray-500"}`}
              >
                {plan.desc}
              </p>
              <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className={`flex-shrink-0 ${plan.featured ? "text-blue-200" : "text-green-500"}`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-xs sm:text-sm ${plan.featured ? "text-white" : "text-gray-700"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#audit"
                className={`block w-full text-center py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-colors ${
                  plan.featured
                    ? "bg-white text-[#2563EB] hover:bg-blue-50"
                    : "bg-[#0F2D4A] text-white hover:bg-[#1a3d5e]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
