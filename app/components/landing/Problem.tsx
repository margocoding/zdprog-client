export function Problem() {
  const problems = [
    {
      num: "01",
      title: "Клиент не видит ассортимент",
      desc: "Нужный материал приходится искать через менеджера.",
    },
    {
      num: "02",
      title: "Прайс живёт в Excel",
      desc: "Покупатель не знает актуальную цену и наличие.",
    },
    {
      num: "03",
      title: "Заявки приходят хаотично",
      desc: "Менеджеру приходится самостоятельно собирать параметры заказа.",
    },
    {
      num: "04",
      title: "Нет быстрого расчёта",
      desc: "Даже простой запрос превращается в переписку.",
    },
    {
      num: "05",
      title: "Сайт не собирает спрос",
      desc: "Компания получает меньше органических переходов по конкретным материалам.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-5">
            Сайт есть. А продажи он помогает получать?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Покупка железнодорожных материалов часто начинается с сайта, а
            заканчивается телефонными звонками, Excel и десятком уточнений
            менеджеру.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problems.map((p) => (
            <div
              key={p.num}
              className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <span className="text-xs font-bold text-[#2563EB] tracking-wider">
                {p.num}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-2 mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {p.desc}
              </p>
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
  );
}
