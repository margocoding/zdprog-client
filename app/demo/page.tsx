"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  LuArrowLeft,
  LuArrowRight,
  LuChevronDown,
  LuCheck,
  LuSearch,
  LuShoppingCart,
  LuSlidersHorizontal,
} from "react-icons/lu";
import { useRequest } from "../components/demo/RequestContext";
import { demoProducts } from "@/data/demo-products";

const categories = [
  "Все материалы",
  "Рельсы",
  "Шпалы",
  "Скрепления",
  "Крепёж",
  "Стрелочные переводы",
];

export default function DemoPage() {
  const { items, totalItems, toggleRequest, addItem } = useRequest();

  const [selectedCategory, setSelectedCategory] = useState("Все материалы");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return demoProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "Все материалы" ||
        product.category === selectedCategory;

      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.code.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        product.gost.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const handleAddToRequest = (product: (typeof demoProducts)[number]) => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      code: product.code,
      gost: product.gost,
      unit: product.unit,
    });
  };

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
                href="/"
                className="hidden items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 sm:inline-flex"
              >
                <LuArrowLeft size={16} />
                Вернуться на сайт
              </Link>

              <button
                type="button"
                onClick={toggleRequest}
                className="relative inline-flex items-center gap-2 rounded-lg bg-[#0F2D4A] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1a3d5e] sm:px-4 sm:text-sm"
              >
                <LuShoppingCart size={15} />

                <span className="hidden sm:inline">Моя заявка</span>

                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white/15 px-1 text-[10px]">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#0F2D4A]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-xs text-blue-200/60">
              <Link href="/" className="transition-colors hover:text-blue-200">
                ЖД-ПРОГ
              </Link>

              <span>/</span>

              <span>Демо-каталог</span>
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Интерактивное демо
            </div>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Материалы ВСП
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-blue-100/70 sm:text-base lg:text-lg">
              Демонстрационный каталог железнодорожных материалов с поиском,
              характеристиками и формированием заявки.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <aside className="hidden w-56 shrink-0 lg:block">
              <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LuSlidersHorizontal size={16} className="text-gray-600" />

                    <span className="text-sm font-bold text-gray-900">
                      Фильтры
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCategory("Все материалы")}
                    className="text-[11px] text-blue-600 hover:text-blue-700"
                  >
                    Сбросить
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-3 text-xs font-semibold text-gray-900">
                      Категория
                    </div>

                    <div className="space-y-2.5">
                      {[
                        ["Рельсы", "48"],
                        ["Шпалы", "24"],
                        ["Скрепления", "31"],
                        ["Крепёж", "18"],
                        ["Стрелочные переводы", "12"],
                      ].map(([name, count]) => (
                        <button
                          key={name}
                          type="button"
                          onClick={() => setSelectedCategory(name)}
                          className="group flex w-full cursor-pointer items-center justify-between gap-2 text-left"
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded border ${
                                selectedCategory === name
                                  ? "border-blue-600 bg-blue-600"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedCategory === name && (
                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                              )}
                            </span>

                            <span className="text-xs text-gray-600 group-hover:text-gray-900">
                              {name}
                            </span>
                          </span>

                          <span className="text-[10px] text-gray-400">
                            {count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div>
                    <div className="mb-3 text-xs font-semibold text-gray-900">
                      Стандарт
                    </div>

                    <div className="space-y-2.5">
                      {["ГОСТ", "ТУ", "ОСТ"].map((name) => (
                        <label
                          key={name}
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <span className="h-4 w-4 rounded border border-gray-300" />

                          <span className="text-xs text-gray-600">{name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div>
                    <div className="mb-3 text-xs font-semibold text-gray-900">
                      Производитель
                    </div>

                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 pr-8 text-xs text-gray-600 outline-none">
                        <option>Все производители</option>
                        <option>Евраз</option>
                        <option>Мечел</option>
                        <option>НТМК</option>
                      </select>

                      <LuChevronDown
                        size={14}
                        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {selectedCategory}
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {filteredProducts.length} из 133 позиций в каталоге
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 lg:hidden"
                  >
                    <LuSlidersHorizontal size={14} />
                    Фильтры
                  </button>

                  <div className="relative w-full sm:w-64">
                    <LuSearch
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Поиск по каталогу..."
                      className="h-9 w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 text-xs text-gray-700 outline-none transition-colors focus:border-blue-400 sm:h-10 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                  {filteredProducts.map((product) => {
                    const requestItem = items.find(
                      (item) => item.id === product.id,
                    );

                    const isInRequest = Boolean(requestItem);

                    return (
                      <article
                        key={product.id}
                        className={`group overflow-hidden rounded-xl border bg-white transition-all ${
                          isInRequest
                            ? "border-blue-300 shadow-sm"
                            : "border-gray-200 hover:border-blue-200 hover:shadow-md"
                        }`}
                      >
                        <div className="relative flex aspect-[16/8] items-center justify-center border-b border-gray-100 bg-gray-50">
                          {isInRequest && (
                            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
                              <LuCheck size={12} />В заявке
                            </div>
                          )}

                          <div className="text-center">
                            <div className="mb-1 text-[10px] uppercase tracking-widest text-gray-400">
                              {product.category}
                            </div>

                            <div className="text-2xl font-black text-[#0F2D4A] sm:text-3xl">
                              {product.code}
                            </div>
                          </div>
                        </div>

                        <div className="p-4 sm:p-5">
                          <div className="mb-2 flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                                {product.name}
                              </h3>

                              <div className="mt-0.5 text-[10px] text-gray-400 sm:text-xs">
                                {product.gost}
                              </div>
                            </div>

                            <span className="shrink-0 rounded bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-500">
                              {product.unit}
                            </span>
                          </div>

                          <p className="mb-4 min-h-8 text-xs leading-relaxed text-gray-500">
                            {product.description}
                          </p>

                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => handleAddToRequest(product)}
                              className={`flex h-9 flex-1 items-center justify-center gap-2 rounded-lg text-xs font-semibold transition-colors ${
                                isInRequest
                                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                                  : "bg-[#0F2D4A] text-white hover:bg-[#1a3d5e]"
                              }`}
                            >
                              {isInRequest && requestItem ? (
                                <>
                                  <LuCheck size={14} />В заявке ·{" "}
                                  {requestItem.quantity}
                                </>
                              ) : (
                                "В заявку"
                              )}
                            </button>
                            <Link
                              href={`/demo/products/${product.id}`}
                              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800"
                              aria-label={`Подробнее о товаре ${product.name}`}
                            >
                              <LuArrowRight size={15} />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                  <div className="text-sm font-semibold text-gray-900">
                    Ничего не найдено
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Попробуйте изменить поисковый запрос или выбрать другую
                    категорию.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setSelectedCategory("Все материалы");
                    }}
                    className="mt-5 rounded-lg bg-[#0F2D4A] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1a3d5e]"
                  >
                    Сбросить поиск
                  </button>
                </div>
              )}

              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="h-9 w-9 rounded-lg border border-gray-200 text-xs text-gray-400"
                >
                  1
                </button>

                <button
                  type="button"
                  className="h-9 w-9 rounded-lg text-xs text-gray-500 hover:bg-gray-100"
                >
                  2
                </button>

                <button
                  type="button"
                  className="h-9 w-9 rounded-lg text-xs text-gray-500 hover:bg-gray-100"
                >
                  3
                </button>

                <span className="px-1 text-gray-400">...</span>

                <button
                  type="button"
                  className="h-9 w-9 rounded-lg text-xs text-gray-500 hover:bg-gray-100"
                >
                  14
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <LuArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[#0F2D4A] px-5 py-8 sm:rounded-3xl sm:px-8 sm:py-10 md:flex-row md:items-center lg:px-12">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                Демо-каталог
              </div>

              <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Нужен такой каталог для вашей компании?
              </h2>

              <p className="max-w-xl text-sm text-blue-100/60">
                Адаптируем каталог под ваш ассортимент, характеристики,
                документы и процесс обработки заявок.
              </p>
            </div>

            <Link
              href="/#audit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Обсудить проект
              <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0F2D4A]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-blue-100/40 sm:flex-row">
            <span>© 2026 ЖД-ПРОГ</span>

            <Link href="/" className="transition-colors hover:text-blue-100/70">
              Вернуться на сайт
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
