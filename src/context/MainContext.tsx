"use client"

import { getFromStorage } from "@utils/storage"
import { AppProviderInterface } from "modules/AppProvider"
import { ICartItem } from "modules/CartItem"
import { createContext, useState, useContext, useEffect } from "react"

const AppContext = createContext<AppProviderInterface>({
  cartProducts: [],
  setCartProducts: () => {},
  loading: false,
  setLoading: () => {},
  updated: false,
  setUpdated: () => {},
  showSearch: false,
  setShowSearch: () => {},
})

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [cartProducts, setCartProducts] = useState<ICartItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [updated, setUpdated] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  useEffect(() => {
    setCartProducts(
      (getFromStorage<ICartItem[]>("session", "products") as ICartItem[]) ?? []
    )
    setLoading(false)
  }, [])

  return (
    <AppContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        loading,
        setLoading,
        updated,
        setUpdated,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
