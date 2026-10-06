'use client';

import { FormEvent, useState } from "react"

interface FormData {
  name: string
  company: string
  website: string
  contact: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  company: '',
  website: '',
  contact: '',
  message: '',
}

export function AuditCTA() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Не удалось отправить заявку')
      }

      setFormData(initialFormData)
      setIsSubmitted(true)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Не удалось отправить заявку',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="audit" style={{ backgroundColor: '#0F2D4A' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-white sm:mb-6 sm:text-3xl lg:text-4xl">
              Хотите понять, что можно улучшить в ваших продажах?
            </h2>

            <p className="mb-4 text-base leading-relaxed text-blue-100/80 sm:mb-6 sm:text-lg">
              Проведём экспресс-аудит сайта и цифрового пути клиента. Покажем
              основные точки, где можно упростить поиск товара, получение
              заявки и работу менеджера.
            </p>

            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 sm:px-4">
              <span className="text-xs text-blue-200 sm:text-sm">
                Без обязательств. Сначала покажем, что именно можно улучшить.
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 sm:rounded-2xl sm:p-6 lg:p-8">
            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                  ✓
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Заявка отправлена
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Спасибо! Мы получили ваши данные и свяжемся с вами в ближайшее
                  время.
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs text-gray-400">
                    Или напишите нам напрямую
                  </p>

                  <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
                    <a
                      href="mailto:order@zdprog.ru"
                      className="font-medium text-gray-600 transition-colors hover:text-[#2563EB]"
                    >
                      order@zdprog.ru
                    </a>

                    <span className="text-gray-300">•</span>

                    <a
                      href="https://t.me/flofeyka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-600 transition-colors hover:text-[#2563EB]"
                    >
                      Telegram @flofeyka
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-4 text-base font-bold text-gray-900 sm:mb-6 sm:text-lg">
                  Получить бесплатный аудит
                </h3>

                <form
                  className="space-y-3 sm:space-y-4"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    placeholder="Имя"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      updateField('name', event.target.value)
                    }
                    className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm transition-colors focus:border-[#2563EB] focus:outline-none sm:rounded-xl sm:px-4 sm:py-3"
                  />

                  <input
                    type="text"
                    placeholder="Компания"
                    value={formData.company}
                    onChange={(event) =>
                      updateField('company', event.target.value)
                    }
                    className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm transition-colors focus:border-[#2563EB] focus:outline-none sm:rounded-xl sm:px-4 sm:py-3"
                  />

                  <input
                    type="text"
                    placeholder="Сайт"
                    value={formData.website}
                    onChange={(event) =>
                      updateField('website', event.target.value)
                    }
                    className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm transition-colors focus:border-[#2563EB] focus:outline-none sm:rounded-xl sm:px-4 sm:py-3"
                  />

                  <input
                    type="text"
                    placeholder="Telegram / телефон"
                    required
                    value={formData.contact}
                    onChange={(event) =>
                      updateField('contact', event.target.value)
                    }
                    className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm transition-colors focus:border-[#2563EB] focus:outline-none sm:rounded-xl sm:px-4 sm:py-3"
                  />

                  <textarea
                    placeholder="Что хотите улучшить?"
                    rows={3}
                    value={formData.message}
                    onChange={(event) =>
                      updateField('message', event.target.value)
                    }
                    className="w-full resize-none rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm transition-colors focus:border-[#2563EB] focus:outline-none sm:rounded-xl sm:px-4 sm:py-3"
                  />

                  {error && (
                    <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#2563EB] py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-xl sm:py-3.5 sm:text-base"
                  >
                    {isSubmitting ? 'Отправляем...' : 'Получить аудит'}
                  </button>
                </form>

                <div className="mt-5 border-t border-gray-100 pt-4 text-center">
                  <p className="text-xs text-gray-400">
                    Или напишите нам напрямую
                  </p>

                  <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
                    <a
                      href="mailto:order@zdprog.ru"
                      className="font-medium text-gray-600 transition-colors hover:text-[#2563EB]"
                    >
                      order@zdprog.ru
                    </a>

                    <span className="text-gray-300">•</span>

                    <a
                      href="https://t.me/flofeyka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-600 transition-colors hover:text-[#2563EB]"
                    >
                      Telegram @flofeyka
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
