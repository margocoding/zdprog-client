'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export interface RequestProduct {
  id: string
  name: string
  category: string
  code: string
  gost: string
  unit: string
  quantity: number
}

interface RequestContextValue {
  items: RequestProduct[]
  isOpen: boolean
  totalItems: number
  uniqueItems: number
  addItem: (product: Omit<RequestProduct, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearRequest: () => void
  openRequest: () => void
  closeRequest: () => void
  toggleRequest: () => void
}

const STORAGE_KEY = 'zhd-prog-request'

const RequestContext = createContext<RequestContextValue | null>(null)

export function RequestProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<RequestProduct[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)

      if (stored) {
        const parsed = JSON.parse(stored)

        if (Array.isArray(parsed)) {
          setItems(parsed)
        }
      }
    } catch {
      sessionStorage.removeItem(STORAGE_KEY)
    }

    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) {
      return
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, isMounted])

  const addItem = useCallback(
    (product: Omit<RequestProduct, 'quantity'>) => {
      setItems((current) => {
        const existing = current.find((item) => item.id === product.id)

        if (existing) {
          return current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        }

        return [...current, { ...product, quantity: 1 }]
      })
    },
    [],
  )

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== id))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    )
  }, [])

  const clearRequest = useCallback(() => {
    setItems([])
  }, [])

  const openRequest = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeRequest = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleRequest = useCallback(() => {
    setIsOpen((current) => !current)
  }, [])

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const uniqueItems = items.length

  return (
    <RequestContext.Provider
      value={{
        items,
        isOpen,
        totalItems,
        uniqueItems,
        addItem,
        removeItem,
        updateQuantity,
        clearRequest,
        openRequest,
        closeRequest,
        toggleRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  )
}

export function useRequest() {
  const context = useContext(RequestContext)

  if (!context) {
    throw new Error('useRequest must be used inside RequestProvider')
  }

  return context
}