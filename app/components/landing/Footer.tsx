import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a1f33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              ЖД-ПРОГ
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Цифровизация продаж
              <br />
              для поставщиков ВСП
            </p>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-300">
              Решения
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Каталог", "Автоматизация", "Калькуляторы", "Интеграции"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-300">
              Компания
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["О компании", "Кейсы", "Блог", "Контакты"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-300">
              Контакты
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="https://t.me/flofeyka"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="tel:+79953020846"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Телефон
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@zdprog.ru"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 ЖД-ПРОГ. Все права защищены.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
