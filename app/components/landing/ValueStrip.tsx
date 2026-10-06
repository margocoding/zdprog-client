import { LuCalculator, LuClipboardList, LuFileText, LuLink } from "react-icons/lu";

export function ValueStrip() {
  const items = [
    {
      icon: LuFileText,
      title: "Каталог",
      desc: "Материалы всегда под рукой",
    },
    {
      icon: LuCalculator,
      title: "Расчёт",
      desc: "Меньше ручной работы менеджера",
    },
    {
      icon: LuClipboardList,
      title: "Заявки",
      desc: "Структурированная потребность клиента",
    },
    {
      icon: LuLink,
      title: "Интеграции",
      desc: "CRM / 1С / API",
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto lg:mx-0 mb-2 sm:mb-3">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                {title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}