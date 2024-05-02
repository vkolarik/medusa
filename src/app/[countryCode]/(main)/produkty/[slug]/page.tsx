"use server"

import { FC, Suspense } from "react"
import { Loading } from "@components/Loading"
import { PageHeader } from "@components/PageHeader"
import { ProductGallery } from "@components/products/detail/ProductGallery"
import { ProductContainer } from "@components/products/ProductContainer"
import { productsPreviewData } from "@data/products"
import { ProductSizes } from "@components/products/ProductSizes"
import { ProductColors } from "@components/products/detail/ProductColors"
import { AddToCartButton } from "@components/products/detail/AddToCartButton"
import { ProductDetailModal } from "@components/products/detail/ProductDetailModal"
import * as ROUTES from "@constants/routes"
import type { ILink } from "modules/Link"
import { getProductDetailByHandle } from "app/actions"
import Link from "next/link"
import { CartWrapper } from "@components/products/detail/CartWrapper"

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const activeProduct = await getProductDetailByHandle(params.slug)

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



  return (
    <main className="max-width page w-full">
      {!activeProduct ? (
        <Loading />
      ) : (
        <>
          <PageHeader breadcrumbs={breadcrumbs} />

          <div className="flex md:flex-row flex-col lg:gap-8 gap-4 md:mt-8 mt-5">
            <Suspense fallback={<Loading />}>
              <ProductGallery
                images={activeProduct.images}
                title={activeProduct.title}
              />
            </Suspense>

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

              <CartWrapper activeProduct={activeProduct}/>

            </div>
          </div>

          <div className="md:mt-16 mt-10">
            <h2 className="font-medium lg:text-[28px] md:text-[24px] text-[20px]">
              Podobné produkty
            </h2>
            {/* TODO: use dynamic data */}
            <ProductContainer data={productsPreviewData.slice(0, 4)} />
          </div>
        </>
      )}
    </main>
  )
}

export default ProductDetail
