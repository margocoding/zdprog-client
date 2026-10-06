'use client'

import {
  LuMinus,
  LuPlus,
  LuTrash2,
  LuX,
} from 'react-icons/lu'
import { useRequest } from './RequestContext'

export function RequestDrawer() {
  const {
    items,
    isOpen,
    totalItems,
    removeItem,
    updateQuantity,
    clearRequest,
    closeRequest,
  } = useRequest()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={closeRequest}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-[480px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Моя заявка
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {uniqueLabel(totalItems)}
            </p>
          </div>

          <button
            type="button"
            onClick={closeRequest}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            aria-label="Закрыть"
          >
            <LuX size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <LuTrash2 size={26} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                Заявка пока пустая
              </h3>

              <p className="mt-2 max-w-[300px] text-sm leading-6 text-slate-500">
                Добавьте материалы из каталога, чтобы сформировать заявку на
                расчёт.
              </p>

              <button
                type="button"
                onClick={closeRequest}
                className="mt-6 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Вернуться к каталогу
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {items.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wide text-[#2563EB]">
                        {item.category}
                      </div>

                      <h3 className="mt-1 font-semibold text-slate-950">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.code} · {item.gost}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                      aria-label={`Удалить ${item.name}`}
                    >
                      <LuTrash2 size={17} />
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Количество, {item.unit}
                    </span>

                    <div className="flex items-center rounded-xl border border-slate-200">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-10 w-10 items-center justify-center text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
                      >
                        <LuMinus size={15} />
                      </button>

                      <span className="flex h-10 min-w-12 items-center justify-center border-x border-slate-200 px-3 text-sm font-semibold text-slate-950">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-10 w-10 items-center justify-center text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
                      >
                        <LuPlus size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Материалов в заявке
              </span>

              <span className="font-semibold text-slate-950">
                {totalItems}
              </span>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Получить расчёт
            </button>

            <button
              type="button"
              onClick={clearRequest}
              className="mt-3 w-full rounded-xl px-5 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Очистить заявку
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

function uniqueLabel(count: number) {
  if (count === 0) {
    return '0 материалов'
  }

  if (count % 10 === 1 && count % 100 !== 11) {
    return `${count} материал`
  }

  if (
    [2, 3, 4].includes(count % 10) &&
    ![12, 13, 14].includes(count % 100)
  ) {
    return `${count} материала`
  }

  return `${count} материалов`
}