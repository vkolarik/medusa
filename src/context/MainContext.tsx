"use client"

import { AppProviderInterface } from "modules/AppProvider"
import { createContext, useState, useContext, useEffect } from "react"

const AppContext = createContext<AppProviderInterface>({
  cartProductsSize: 0,
  setCartProductsSize: () => {},
  loading: false,
  setLoading: () => {},
  updated: false,
  setUpdated: () => {},
  showSearch: false,
  setShowSearch: () => {},
})

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [cartProductsSize, setCartProductsSize] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [updated, setUpdated] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <AppContext.Provider
      value={{
        cartProductsSize,
        setCartProductsSize,
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
