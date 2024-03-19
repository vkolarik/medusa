"use client"
import React, { FC } from "react"
import { toast } from "sonner"
import { storeInStorage } from "@utils/storage"
import { useAppContext } from "@context/MainContext"
import { ICartItem } from "modules/CartItem"

export const AddToCartButton: FC<{ product: ICartItem }> = ({ product }) => {
  const { cartProducts, setCartProducts } = useAppContext()

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (cartProducts.length === 0) {
      storeInStorage(
        "session",
        "products",
        [{ ...product, amount: 1 }]
      )
      setCartProducts([{ ...product, amount: 1 }])
    } else {
      const existingProduct = cartProducts.find((p) => p.id === product.id)
      if (existingProduct && existingProduct.amount) {
        existingProduct.amount += 1
      } else {
        cartProducts.push({ ...product, amount: 1 })
      }
      storeInStorage("session", "products", cartProducts)
      setCartProducts(cartProducts)
    }
    toast.success("Produkt byl úspěšně přidán do košíku")
  }
  return (
    <button
      className="button button--light md:w-24 w-20 text-center font-medium z-5"
      onClick={(e) => addToCart(e)}
    >
      Koupit
    </button>
  )
}
