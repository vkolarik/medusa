"use client"

import React, { FC, useState } from "react"
import { IProductDetail } from "../../../modules/Product"
import { CustomProductVariants } from "@components/products/CustomProductVariants"
import { ProductDetailModal } from "@components/products/detail/ProductDetailModal"
import { useParams } from "next/navigation"
import { toast } from "sonner"
import { addToCartAction } from "../../../utils/apiActions/actions"
import { useAppContext } from "@context/MainContext"
import { useQuery } from "@utils/useQuery"

type Props = {
  activeProduct: IProductDetail
}

export const CartWrapper: FC<Props> = ({ activeProduct }) => {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const { cartProductsSize, setCartProductsSize } = useAppContext()
  const [showModal, setShowModal] = useState<boolean>(false)
  const { getQueryString } = useQuery()
  const { updated, setUpdated } = useAppContext()
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string

  // add the selected variant to the cart
  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //get variant id from activeProduct by comparing getQueryString("variant") with variant.title
    const variantId = activeProduct.variants.find(variant => variant.title === getQueryString("variant"))?.id
    if (!variantId) {
      toast.warning("Vyberte variantu produktu")
      return null
    }

    //handle multiple clicks
    if (isAdding) return

    e.preventDefault()
    setIsAdding(true)

    setCartProductsSize(cartProductsSize + 1)

    addToCartAction({
      variantId: variantId,
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
        <CustomProductVariants
          variants={activeProduct.variants}
          setSelectedVariant={setSelectedVariant}
          selectedVariant={selectedVariant}
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
      
      <button
        className="button text-center font-medium z-5 w-max"
        onClick={(e) => handleAddToCart(e)}
      >
        {!isAdding ? ("Přidat do košíku") : ("Přidávání")}
      </button>

    </>
  )
}
