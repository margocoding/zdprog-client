import {
  LuBookOpen,
  LuBriefcaseBusiness,
  LuCalculator,
  LuCheck,
  LuClipboardList,
  LuDatabase,
  LuFileText,
  LuHistory,
  LuMessageCircle,
  LuMessagesSquare,
  LuPlug,
  LuSearch,
  LuSend,
  LuSettings2,
  LuUser,
} from "react-icons/lu";

export function BusinessResult() {
  const buyerItems = [
    { icon: LuSearch, text: "Быстро найти материал" },
    { icon: LuFileText, text: "Посмотреть характеристики" },
    { icon: LuCalculator, text: "Подобрать количество" },
    { icon: LuClipboardList, text: "Сформировать заявку" },
    { icon: LuSend, text: "Отправить спецификацию" },
    { icon: LuMessageCircle, text: "Получить обратную связь" },
  ];

  const managerItems = [
    { icon: LuClipboardList, text: "Структурированные заявки" },
    { icon: LuMessagesSquare, text: "Меньше однотипных вопросов" },
    { icon: LuBookOpen, text: "Единый каталог" },
    { icon: LuDatabase, text: "Актуальные данные" },
    { icon: LuPlug, text: "CRM-интеграция" },
    { icon: LuHistory, text: "История обращений" },
  ];

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
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <LuUser className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </span>
              Для покупателя
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {buyerItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 sm:gap-3">
                  <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                <LuBriefcaseBusiness className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </span>
              Для менеджера
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {managerItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 sm:gap-3">
                  <Icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 rounded-full flex-wrap justify-center">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              ПОКУПАТЕЛЬ
            </span>
            <span className="text-gray-400">→</span>
            <span className="text-xs sm:text-sm font-bold text-[#2563EB]">
              САЙТ
            </span>
            <span className="text-gray-400">→</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              МЕНЕДЖЕР
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
