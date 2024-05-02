"use client"
import { FC, useState } from "react"
import { FilterButton } from "@components/products/FilterButton"
import { Filter } from "@components/products/Filter"
import { IProductDetail } from "../../../modules/Product"
import Link from "next/link"
import { ProductColors } from "@components/products/detail/ProductColors"
import { AddToCartButton } from "@components/products/detail/AddToCartButton"
import { ProductSizes } from "@components/products/ProductSizes"
import { ProductDetailModal } from "@components/products/detail/ProductDetailModal"

type Props = {
  activeProduct: IProductDetail
}

export const CartWrapper: FC<Props> = ({ activeProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)


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

      <ProductColors colors={activeProduct.colors} />

      <AddToCartButton
        product={activeProduct}
      />
    </>
  )
}
