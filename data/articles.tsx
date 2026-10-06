import { LuCheck } from "react-icons/lu";

export type Article = {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
};

export const articles: Record<string, Article> = {
  "oshibki-v-marketinge-prodazh-vsp": {
    title: "ТОП-10 ошибок в маркетинге продаж ВСП",
    description:
      "Какие проблемы на сайте поставщика ВСП мешают покупателю быстро найти материал, разобраться в предложении и оставить заявку.",
    category: "Продажи ВСП",
    date: "5 октября 2026",
    readTime: "7 мин",
    content: (
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl leading-8 text-gray-800 font-medium">
            Продажа материалов верхнего строения пути начинается задолго до
            разговора покупателя с менеджером. Сегодня потенциальный клиент
            может сначала изучить поставщиков в интернете, сравнить ассортимент,
            посмотреть характеристики и только после этого обратиться в
            компанию.
          </p>

          <p className="text-base sm:text-lg leading-8 text-gray-600">
            Поэтому сайт поставщика ВСП — это не просто визитка с телефоном и
            адресом. При правильной организации он становится полноценным
            инструментом продаж: помогает покупателю найти нужный материал,
            сформировать заявку и передать менеджеру уже подготовленный запрос.
          </p>

          <p className="text-base sm:text-lg leading-8 text-gray-600">
            Ниже разберём десять типичных ошибок, которые мешают поставщикам
            материалов ВСП эффективно использовать сайт для привлечения и
            обработки заявок.
          </p>
        </div>

        <section id="error-1" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              01
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №1
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                На сайте нет полноценного онлайн-каталога
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Одна из самых распространённых проблем — сайт у компании есть, а
              нормального каталога материалов нет. Покупатель видит несколько
              общих страниц, PDF-файл или предложение связаться с менеджером,
              чтобы узнать ассортимент.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Для B2B-покупателя это означает лишний шаг. Он не может
              самостоятельно посмотреть доступные позиции, сравнить материалы и
              понять, что именно подходит под его задачу.
            </p>

            <div className="rounded-2xl border-l-4 border-[#2563EB] bg-[#F8FAFC] px-5 py-4 sm:px-6">
              <p className="text-sm sm:text-base leading-7 text-gray-700">
                <strong className="text-gray-900">Что лучше:</strong> сделать
                каталог, в котором покупатель может найти материал, открыть его
                карточку и получить основные характеристики без обязательного
                звонка менеджеру.
              </p>
            </div>
          </div>
        </section>

        <section id="error-2" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              02
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №2
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Ассортимент представлен слишком общо
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Разделы вроде «Рельсы», «Шпалы» или «Скрепления» сами по себе ещё
              не являются каталогом. Покупателю необходимо понимать, какие
              конкретно позиции предлагает поставщик.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Чем шире ассортимент, тем важнее его структура. Пользователь
              должен быстро переходить от общей категории к конкретному
              материалу, а не просматривать десятки страниц или запрашивать
              список у менеджера.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Хорошая структура каталога повторяет реальную логику закупки и
              помогает покупателю ориентироваться в ассортименте компании.
            </p>
          </div>
        </section>

        <section id="error-3" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              03
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №3
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Нет характеристик материалов
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Даже если нужная позиция есть на сайте, отсутствие характеристик
              заставляет покупателя снова обращаться к менеджеру.
            </p>

            <p className="text-base leading-8 text-gray-600">
              В зависимости от конкретного материала могут иметь значение
              размеры, масса, тип, состояние, стандарт, производитель и другие
              параметры. Покупателю не обязательно показывать огромную
              техническую таблицу — достаточно дать именно ту информацию,
              которая помогает идентифицировать и выбрать позицию.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Тип и обозначение",
                "Основные размеры",
                "Состояние материала",
                "Производитель",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <LuCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="error-4" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              04
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №4
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Прайс существует отдельно от сайта
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Excel и PDF остаются удобными рабочими инструментами и вряд ли
              исчезнут из B2B-продаж. Проблема начинается тогда, когда файл
              становится единственным способом узнать ассортимент.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Если покупателю сначала нужно написать менеджеру, получить файл,
              открыть его на компьютере и вручную искать нужную позицию, сайт не
              выполняет свою основную задачу.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Гораздо эффективнее использовать единый источник данных, на основе
              которого можно поддерживать каталог, прайс и другие представления
              ассортимента.
            </p>
          </div>
        </section>

        <section id="error-5" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              05
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №5
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Покупателя заставляют звонить по любому вопросу
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Телефон менеджера должен оставаться доступным. Но он не должен
              быть единственным способом получить информацию.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Покупатель может находиться на этапе первичного изучения рынка,
              сравнивать несколько поставщиков или просто собирать информацию
              для будущей закупки. На этом этапе далеко не каждый готов звонить.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Чем больше базовой информации доступно самостоятельно, тем меньше
              однотипных вопросов получает менеджер и тем более подготовленным
              становится последующее обращение.
            </p>
          </div>
        </section>

        <section id="error-6" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              06
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №6
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Нет удобной формы заявки
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Найти материал — только половина задачи. После этого покупателю
              необходимо отправить запрос: указать позиции, количество,
              требования и дополнительные условия.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Если единственный вариант — найти номер телефона или отправить
              письмо на общий адрес, часть пользователей просто отложит
              обращение.
            </p>

            <div className="rounded-2xl bg-[#0F2D4A] p-5 sm:p-6">
              <p className="text-sm sm:text-base leading-7 text-blue-100">
                <strong className="text-white">
                  Хорошая форма заявки должна позволять:
                </strong>
              </p>

              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  "Выбрать нужные позиции",
                  "Указать количество",
                  "Приложить спецификацию",
                  "Оставить комментарий",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-blue-100"
                  >
                    <LuCheck className="w-4 h-4 shrink-0 text-[#F57A00]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="error-7" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              07
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №7
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Спецификации обрабатываются вручную
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              В продажах железнодорожных материалов запрос редко ограничивается
              одной позицией. Покупатель может прислать собственную
              спецификацию, таблицу или большой список материалов.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Если менеджер вручную переносит данные из файла в рабочую таблицу,
              сверяет каждую строку и несколько раз уточняет одни и те же
              детали, обработка заявки занимает гораздо больше времени, чем
              необходимо.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Часть этой работы можно перенести на сайт: структурировать заявку,
              сохранить выбранные позиции и передать менеджеру уже
              подготовленные данные.
            </p>
          </div>
        </section>

        <section id="error-8" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              08
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №8
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                На сайте нет понятного сценария для покупателя
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Хороший коммерческий сайт должен отвечать на простой вопрос:
              <strong className="text-gray-900">
                {" "}
                «Что мне делать дальше?»
              </strong>
            </p>

            <p className="text-base leading-8 text-gray-600">
              Пользователь должен последовательно пройти путь от поиска
              материала до отправки заявки. Каталог, карточка материала, подбор
              позиций и форма обращения должны быть связаны между собой.
            </p>

            <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-[#F8FAFC] border border-gray-100 p-4 sm:p-5">
              {["Найти", "Изучить", "Выбрать", "Сформировать", "Отправить"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="rounded-lg bg-white border border-gray-200 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700">
                      {item}
                    </span>

                    {index < 4 && <span className="text-gray-300">→</span>}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="error-9" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              09
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №9
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Сайт не связан с внутренними процессами компании
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Даже хороший каталог теряет часть своей эффективности, если заявка
              после отправки просто приходит на электронную почту и дальше
              обрабатывается полностью вручную.
            </p>

            <p className="text-base leading-8 text-gray-600">
              В зависимости от процессов компании сайт можно связать с CRM,
              уведомлениями, внутренними системами и другими инструментами.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Тогда информация не заканчивается на кнопке «Отправить заявку».
              Сайт становится частью существующего процесса продаж.
            </p>
          </div>
        </section>

        <section id="error-10" className="scroll-mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
              10
            </span>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Ошибка №10
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Сайт создаётся «для галочки»
              </h2>
            </div>
          </div>

          <div className="space-y-4 pl-0 sm:pl-[52px]">
            <p className="text-base leading-8 text-gray-600">
              Самая системная ошибка — отсутствие конкретной цели у сайта.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Если задача звучит как «нужно сделать сайт компании», результатом
              часто становится набор стандартных страниц: о компании, услуги,
              контакты и несколько фотографий.
            </p>

            <p className="text-base leading-8 text-gray-600">
              Для поставщика ВСП этого недостаточно. Коммерческий сайт должен
              помогать решать конкретные задачи: показывать ассортимент,
              отвечать на вопросы покупателей, собирать заявки и передавать
              менеджеру подготовленную информацию.
            </p>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5 sm:p-6">
              <p className="text-sm sm:text-base leading-7 text-orange-950">
                <strong>Главный вопрос при разработке:</strong> какую часть
                процесса продажи сайт должен сделать быстрее, удобнее или
                дешевле?
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-8 border-t border-gray-100 pt-12 sm:pt-16 space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
              Вывод
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              Что в итоге должен делать сайт поставщика ВСП
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-8 text-gray-600">
            Хороший сайт не заменяет менеджера. Его задача — снять с менеджера
            ту часть работы, которую покупатель может выполнить самостоятельно,
            и передать продавцу уже более качественный запрос.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Показывать актуальный ассортимент",
              "Помогать найти нужный материал",
              "Давать основные характеристики",
              "Позволять собрать заявку",
              "Принимать спецификации",
              "Передавать менеджеру структурированные данные",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#F8FAFC] p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#2563EB]">
                  <LuCheck className="h-3.5 w-3.5" />
                </span>

                <span className="text-sm leading-6 font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg leading-8 text-gray-600">
            В результате покупатель быстрее получает нужную информацию, а
            менеджер меньше времени тратит на повторяющиеся операции и может
            сосредоточиться на переговорах, расчёте и самой продаже.
          </p>
        </section>
      </div>
    ),
  },
};
