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
  const [cartProducts, setCartProducts] = useState<ICartItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setCartProducts(getFromStorage<ICartItem[]>("session", "products") as ICartItem[] ?? [])
    setLoading(false)
  }, [])
  
  useEffect(() => {
    console.log(cartProducts)
  }, [cartProducts])

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