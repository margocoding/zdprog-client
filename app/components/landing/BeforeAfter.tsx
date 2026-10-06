import { LuCheck, LuX } from "react-icons/lu";

export function BeforeAfter() {
  const before = [
    "Клиент",
    "Звонок",
    "Менеджер",
    "Excel",
    "Уточнение",
    "Расчёт",
    "КП",
  ];
  const after = [
    "Клиент",
    "Каталог",
    "Материалы",
    "Количество",
    "Заявка",
    "CRM",
    "Менеджер",
  ];

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
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-50 flex items-center justify-center text-xs sm:text-sm">
                <LuX size={16} />
              </span>
              ДО
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              {before.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-50 flex items-center justify-center text-xs font-bold text-red-400 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {step}
                  </span>
                  {i < before.length - 1 && (
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 ml-auto flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-green-100">
            <h3 className="text-base sm:text-lg font-bold text-green-600 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-50 flex items-center justify-center text-xs sm:text-sm">
                <LuCheck size={16} />
              </span>
              ПОСЛЕ
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              {after.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-50 flex items-center justify-center text-xs font-bold text-green-500 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {step}
                  </span>
                  {i < after.length - 1 && (
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 ml-auto flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
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
  );
}