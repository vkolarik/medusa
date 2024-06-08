"use server"

import { Suspense } from "react"
import { Loading } from "@components/Loading"
import { PageHeader } from "@components/PageHeader"
import { ProductGallery } from "@components/products/detail/ProductGallery"
import { ProductContainer } from "@components/products/ProductContainer"
import { CartWrapper } from "@components/products/detail/CartWrapper"
import { convertToPreview } from "@utils/truncate"
import { getProductData } from "@utils/apiActions/getProductData"

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const data = await getProductData(params.slug)

  return (
    <main className="max-width page w-full">
      {data.activeProduct && (
        <>
          <PageHeader breadcrumbs={data.breadcrumbs} />

          <div className="flex md:flex-row flex-col lg:gap-8 gap-4 md:mt-8 mt-5">
            <Suspense fallback={<Loading />}>
              <ProductGallery
                images={data.activeProduct.images ?? null}
                title={data.activeProduct.title ?? null}
              />
            </Suspense>

            <div className="md:space-y-5 space-y-3 flex flex-col justify-center lg:w-2/3 md:w-1/2 w-full">
              <div className="pb-3 border-b border-lightGrey h-max">
                <h1 className="font-semibold lg:text-[35px] md:text-[27px] text-[22px] w-4/5 lg:leading-10 leading-7">
                  {data.activeProduct.title}
                </h1>
                <p className="my-3 grey--larger">
                  {data.activeProduct.description}
                </p>
                <h2 className="font-semibold text-blue lg:text-[28px] md:text-[24px] text-[19px]">
                  {data.activeProduct.price} Kč
                </h2>
              </div>

              <CartWrapper activeProduct={data.activeProduct} />
            </div>
          </div>

          <div className="md:mt-16 mt-10">
            <h2 className="font-medium lg:text-[28px] md:text-[24px] text-[20px]">
              Podobné produkty
            </h2>
            <ProductContainer
              data={
                data.categoryProductDetails
                  ?.filter(
                    (productDetail) =>
                      productDetail.route !== data.activeProduct?.route
                  )
                  .map((productDetail) => convertToPreview(productDetail))!
              }
            />
          </div>
        </>
      )}
    </main>
  )
}

export default ProductDetail
