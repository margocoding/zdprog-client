'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  LuArrowLeft,
  LuArrowRight,
  LuCheck,
  LuShoppingCart,
} from 'react-icons/lu'
import { useRequest } from '../../../components/demo/RequestContext'
import { demoProducts } from '../../../../data/demo-products'

export default function DemoProductPage() {
  const params = useParams()
  const { items, addItem, toggleRequest } = useRequest()

  const product = demoProducts.find((item) => item.id === params.id)
  const requestItem = product
    ? items.find((item) => item.id === product.id)
    : undefined

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <Link
              href="/demo"
              className="flex items-center gap-2 text-sm font-bold text-[#0F2D4A]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F2D4A] text-xs text-white">
                ЖП
              </span>

              <span>ЖД-ПРОГ</span>
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Материал не найден
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Возможно, товар был удалён или ссылка указана неверно.
          </p>

          <Link
            href="/demo"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0F2D4A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a3d5e]"
          >
            <LuArrowLeft size={16} />
            Вернуться в каталог
          </Link>
        </section>
      </main>
    )
  }

  const handleAddToRequest = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      code: product.code,
      gost: product.gost,
      unit: product.unit,
    })
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold text-[#0F2D4A]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F2D4A] text-xs text-white">
                ЖП
              </span>

              <span className="hidden sm:block">ЖД-ПРОГ</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/demo"
                className="hidden items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 sm:inline-flex"
              >
                <LuArrowLeft size={16} />
                Вернуться в каталог
              </Link>

              <button
                type="button"
                onClick={toggleRequest}
                className="relative inline-flex items-center gap-2 rounded-lg bg-[#0F2D4A] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1a3d5e] sm:px-4 sm:text-sm"
              >
                <LuShoppingCart size={15} />

                <span className="hidden sm:inline">Моя заявка</span>

                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white/15 px-1 text-[10px]">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-700">
              ЖД-ПРОГ
            </Link>

            <span>/</span>

            <Link href="/demo" className="hover:text-gray-700">
              Демо-каталог
            </Link>

            <span>/</span>

            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <Link
            href="/demo"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <LuArrowLeft size={16} />
            Назад к каталогу
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex aspect-square items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    {product.category}
                  </div>

                  <div className="text-5xl font-black text-[#0F2D4A] sm:text-7xl">
                    {product.code}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {product.category}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {product.unit}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
                {product.description}
              </p>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white">
                <div className="border-b border-gray-100 px-5 py-4">
                  <h2 className="text-sm font-bold text-gray-900">
                    Характеристики
                  </h2>
                </div>

                <dl className="divide-y divide-gray-100">
                  <div className="flex items-center justify-between gap-6 px-5 py-4">
                    <dt className="text-sm text-gray-500">Наименование</dt>

                    <dd className="text-right text-sm font-medium text-gray-900">
                      {product.name}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-6 px-5 py-4">
                    <dt className="text-sm text-gray-500">Обозначение</dt>

                    <dd className="text-right text-sm font-medium text-gray-900">
                      {product.code}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-6 px-5 py-4">
                    <dt className="text-sm text-gray-500">Стандарт</dt>

                    <dd className="text-right text-sm font-medium text-gray-900">
                      {product.gost}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-6 px-5 py-4">
                    <dt className="text-sm text-gray-500">Единица измерения</dt>

                    <dd className="text-right text-sm font-medium text-gray-900">
                      {product.unit}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 rounded-2xl bg-[#0F2D4A] p-6">
                <div className="text-sm font-semibold text-white">
                  Нужен расчёт по этому материалу?
                </div>

                <p className="mt-2 text-sm leading-6 text-blue-100/60">
                  Добавьте материал в заявку и укажите необходимое количество.
                  Мы подготовим расчёт по вашим параметрам.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleAddToRequest}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                      requestItem
                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        : 'bg-[#2563EB] text-white hover:bg-blue-600'
                    }`}
                  >
                    {requestItem ? (
                      <>
                        <LuCheck size={16} />
                        В заявке · {requestItem.quantity}
                      </>
                    ) : (
                      <>
                        Добавить в заявку
                        <LuArrowRight size={16} />
                      </>
                    )}
                  </button>

                  {requestItem && (
                    <button
                      type="button"
                      onClick={toggleRequest}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Открыть заявку
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Демо-каталог
              </div>

              <h2 className="mt-1 text-xl font-bold text-gray-900">
                Другие материалы ВСП
              </h2>
            </div>

            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Смотреть весь каталог
              <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F2D4A]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-blue-100/40 sm:flex-row">
            <span>© 2026 ЖД-ПРОГ</span>

            <Link
              href="/"
              className="transition-colors hover:text-blue-100/70"
            >
              Вернуться на сайт
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}