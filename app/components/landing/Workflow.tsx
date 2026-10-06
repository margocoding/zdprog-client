export function Workflow() {
  const steps = [
    { num: "01", label: "Каталог" },
    { num: "02", label: "Материал" },
    { num: "03", label: "Количество" },
    { num: "04", label: "Расчёт" },
    { num: "05", label: "Заявка" },
    { num: "06", label: "Менеджер" },
    { num: "07", label: "КП" },
  ];

  return (
    <section style={{ backgroundColor: "#0F2D4A" }}>
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
                <span className="text-xs font-bold text-blue-300">
                  {step.num}
                </span>
                <span className="text-sm font-semibold text-white">
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <svg
                  className="w-4 h-4 text-blue-300/50 flex-shrink-0"
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

        <div className="hidden lg:flex flex-wrap justify-center items-center gap-2 mb-12">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-2">
              <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 text-center min-w-[100px]">
                <div className="text-xs font-bold text-blue-300 mb-1">
                  {step.num}
                </div>
                <div className="text-sm font-semibold text-white">
                  {step.label}
                </div>
              </div>
              {i < steps.length - 1 && (
                <svg
                  className="w-5 h-5 text-blue-300/50 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
  );
}