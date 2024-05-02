"use client"
import React, { FC } from "react"
import { toast } from "sonner"
import { storeInStorage } from "@utils/storage"
import { useAppContext } from "@context/MainContext"
import { ICartItem } from "modules/CartItem"
import { IProductDetail } from "../../../modules/Product"
import { useQuery } from "@utils/useQuery"

export const AddToCartButton: FC<{ product: IProductDetail }> = ({ product }) => {
  const { cartProducts, setCartProducts } = useAppContext()
  const { getQueryString, createQueryString } = useQuery()

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {

    const cartProduct : ICartItem ={
    ...product,
        size: getQueryString("size"),
        color: getQueryString("color"),
        amount: 1,
    }

    e.preventDefault()

    if (!cartProduct.size) toast.error("Musíte vybrat velikost!")
    else if (!cartProduct.color) toast.error("Musíte vybrat barvu!")
    else {
      if (cartProducts.length === 0) {
        storeInStorage("session", "products", [{ ...cartProduct, amount: 1 }])
        setCartProducts([{ ...cartProduct, amount: 1 }])
      } else {
        const existingProduct = cartProducts.find(
          (p) =>
            p.id === cartProduct.id &&
            p.color === cartProduct.color &&
            p.size === cartProduct.size
        )
        if (existingProduct && existingProduct.amount) {
          existingProduct.amount += 1
        } else {
          cartProducts.push({ ...cartProduct, amount: 1 })
        }
        storeInStorage("session", "products", cartProducts)
        setCartProducts(cartProducts)
      }
      toast.success("Produkt byl úspěšně přidán do košíku")
    }
  }
  return (
    <button
      className="button text-center font-medium z-5 w-max"
      onClick={(e) => addToCart(e)}
    >
      Přidat do košíku
    </button>
  )
}
