"use client"
import React, { FC, useState } from "react"
import { FilterButton } from "@components/products/FilterButton"
import { Filter } from "@components/products/Filter"
import { IProductDetail } from "../../../modules/Product"
import Link from "next/link"
import { ProductColors } from "@components/products/detail/ProductColors"
import { AddToCartButton } from "@components/products/detail/AddToCartButton"
import { ProductSizes } from "@components/products/ProductSizes"
import { ProductDetailModal } from "@components/products/detail/ProductDetailModal"
import { Button } from "@medusajs/ui"
import { addToCart } from "@modules/cart/actions"
import { useParams } from "next/navigation"
import { toast } from "sonner"
import { addToCartAction } from "../../../app/actions"
import { useAppContext } from "@context/MainContext"

type Props = {
  activeProduct: IProductDetail
}

export const CartWrapper: FC<Props> = ({ activeProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  const { updated, setUpdated } = useAppContext()
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string

  // add the selected variant to the cart
  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //if (!variant?.id) return null

    //handle multiple clicks
    if(isAdding) return

    e.preventDefault()
    setIsAdding(true)

    addToCartAction({
      variantId: "variant_01HQR5BXVGFP5S80XZYPF8D6AS",
      quantity: 1,
      countryCode,
    }).then(() => {
      setIsAdding(false)
      setUpdated(true)
      toast.success("Produkt byl úspěšně přidán do košíku")
    })
  }


  return (
    <>

      <div className="flex justify-between">
        <ProductSizes
          sizes={activeProduct.sizes}
          setSelectedSize={setSelectedSize}
          selectedSize={selectedSize}
        />


        {showModal && (
          <ProductDetailModal
            image={activeProduct.image}
            setActiveModal={setShowModal}
          />
        )}

        <button
          className="h-max text-grey border-b border-lightGrey cursor-pointer lg:text-[14px] text-[12px] w-max whitespace-nowrap duration-300 hover:border-black hover:text-black"
          onClick={() => setShowModal(true)}
        >
          Průvodce velikostmi
        </button>
      </div>

      {/*<ProductColors colors={activeProduct.colors} />*/}

      {/*<AddToCartButton*/}
      {/*  product={activeProduct}*/}
      {/*/>*/}

      <button
        className="button text-center font-medium z-5 w-max"
        onClick={(e) => handleAddToCart(e)}
      >
        {!isAdding ? ("Přidat do košíku") : ("Přidávání")}
      </button>

    </>
  )
}
