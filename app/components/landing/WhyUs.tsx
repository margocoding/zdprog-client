import { LuBadgeRussianRuble, LuChartNoAxesCombined, LuRocket, LuTarget } from "react-icons/lu";

export function WhyUs() {
  const advantages = [
    {
      title: "Узкая специализация",
      desc: "Фокусируемся на digital-задачах поставщиков ВСП и ЖД-материалов.",
      icon: LuTarget,
    },
    {
      title: "Бизнес прежде технологий",
      desc: "Сначала разбираемся в процессе продаж, потом выбираем техническое решение.",
      icon: LuChartNoAxesCombined,
    },
    {
      title: "Понятная стоимость",
      desc: "Базовые решения имеют фиксированную стоимость.",
      icon: LuBadgeRussianRuble,
    },
    {
      title: "Развитие после запуска",
      desc: "Начинаем с необходимого, а затем подключаем автоматизацию и интеграции.",
      icon: LuRocket,
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Мы понимаем не только разработку. Мы понимаем задачу продаж.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {advantages.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3 sm:mb-4">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2">
                {title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
