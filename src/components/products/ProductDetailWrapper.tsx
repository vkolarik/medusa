"use client"


import { FC, useState } from "react"
import { Loading } from "@components/Loading"
import { PageHeader } from "@components/PageHeader"
import { ProductGallery } from "@components/products/detail/ProductGallery"
import { ProductContainer } from "@components/products/ProductContainer"
import { productsPreviewData } from "@data/products"
import { IProductDetail } from "../../modules/Product"
import { ProductSizes } from "@components/products/ProductSizes"
import { ProductColors } from "@components/products/detail/ProductColors"
import { AddToCartButton } from "@components/products/detail/AddToCartButton"
import { ProductDetailModal } from "@components/products/detail/ProductDetailModal"
import { ILink } from "../../modules/Link"
import * as ROUTES from "@constants/routes"

type Props = {
  productFromServerAction: IProductDetail | null
}

export const ProductDetailWrapper: FC<Props> = ({ productFromServerAction }) => {

  // TODO: use dynamic data
  const breadcrumbs: ILink[] = [
    {
      text: "Oblečení",
      route: ROUTES.CLOTHES,
    },
    {
      text: "Trička",
      route: `/${ROUTES.CLOTHES}/tricka`,
    },
  ]

  const [activeProduct, setActiveProduct] = useState<IProductDetail | null>(productFromServerAction)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <main className="max-width page w-full">
      {!activeProduct ? (
        <Loading />
      ) : (
        <>
          <PageHeader breadcrumbs={breadcrumbs} />

          <div className="flex md:flex-row flex-col lg:gap-8 gap-4 md:mt-8 mt-5">
            <ProductGallery
              images={activeProduct.images}
              title={activeProduct.title}
            />

            <div className="md:space-y-5 space-y-3 flex flex-col justify-center lg:w-2/3 md:w-1/2 w-full">
              <div className="pb-3 border-b border-lightGrey h-max">
                <h1 className="font-semibold lg:text-[35px] md:text-[27px] text-[22px] w-4/5 lg:leading-10 leading-7">
                  {activeProduct.title}
                </h1>
                <p className="my-3 grey--larger">{activeProduct.description}</p>
                <h2 className="font-semibold text-blue lg:text-[28px] md:text-[24px] text-[19px]">
                  {activeProduct.price} Kč
                </h2>
              </div>

              <div className="flex justify-between">
                <ProductSizes
                  sizes={activeProduct.sizes}
                  setSelectedSize={setSelectedSize}
                  selectedSize={selectedSize}
                />
                <a href="/cz/produkty/hoodie" >hoodie</a>

                <button
                  className="h-max text-grey border-b border-lightGrey cursor-pointer lg:text-[14px] text-[12px] w-max whitespace-nowrap duration-300 hover:border-black hover:text-black"
                  onClick={() => setShowModal(true)}
                >
                  Průvodce velikostmi
                </button>
              </div>

              <ProductColors
                colors={activeProduct.colors}
                setSelectedColor={setSelectedColor}
                selectedColor={selectedColor}
              />

              <AddToCartButton
                product={{
                  ...activeProduct,
                  size: selectedSize,
                  color: selectedColor,
                  amount: 1,
                }}
              />
            </div>
          </div>

          <div className="md:mt-16 mt-10">
            <h2 className="font-medium lg:text-[28px] md:text-[24px] text-[20px]">
              Podobné produkty
            </h2>
            {/* TODO: use dynamic data */}
            <ProductContainer data={productsPreviewData.slice(0, 4)} />
          </div>

          {showModal && (
            <ProductDetailModal
              image={activeProduct.image}
              setActiveModal={setShowModal}
            />
          )}
        </>
      )}
    </main>
  )
}
