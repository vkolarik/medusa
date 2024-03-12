"use client"
import React, { FC } from "react"
import { IProductPreview } from "@interfaces/Product"
import { toast } from "sonner"
import { getFromStorage, storeInStorage } from "@utils/storage"
export const AddToCartButton: FC<{
  type: "preview" | "detail"
  product: IProductPreview
}> = ({ type, product }) => {
  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let products: IProductPreview[] = getFromStorage("session", "products")
      ? JSON.parse(getFromStorage("session", "products"))
      : []
    if (products.length === 0) {
      storeInStorage(
        "session",
        "products",
        JSON.stringify([{ ...product, amount: 1 }])
      )
    } else {
      const existingProduct = products.find((p) => p.id === product.id)
      if (existingProduct && existingProduct.amount) {
        existingProduct.amount += 1
      } else {
        products.push({ ...product, amount: 1 })
      }
      storeInStorage("session", "products", JSON.stringify(products))
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
