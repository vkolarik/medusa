"use client"

import { getFromStorage } from "@utils/storage";
import { AppProviderInterface } from "modules/AppProvider";
import { ICartItem } from "modules/CartItem";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext<AppProviderInterface>({
  cartProducts: [],
  setCartProducts: () => {},
  loading: false,
  setLoading: () => {}
});

export function AppWrapper({ children } : {
  children: React.ReactNode
}) {
  let [cartProducts, setCartProducts] = useState<ICartItem[]>([])
  let [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setCartProducts(getFromStorage<ICartItem[]>("session", "products") as ICartItem[] ?? [])
  }, [])

  return (
    <AppContext.Provider value={{
      cartProducts,
      setCartProducts,
      loading,
      setLoading
    }}>
      {children }
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}