"use server"

import { Suspense } from "react"
import { Loading } from "@components/Loading"
import { PageHeader } from "@components/PageHeader"
import { ProductGallery } from "@components/products/detail/ProductGallery"
import { ProductContainer } from "@components/products/ProductContainer"
import { productsPreviewData } from "@data/products"
import type { ILink } from "modules/Link"
import { getCategoryProductDetailsByHandle, getProductDetailByHandle } from "app/actions"
import { CartWrapper } from "@components/products/detail/CartWrapper"
import { notFound } from "next/navigation"
import medusaRequest from "@constants/medusaFetch"
import { getCategoriesList } from "@lib/data"
import { getBreadcrumbs } from "@utils/breadcrumbs"

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const activeProduct = await getProductDetailByHandle(params.slug)

  if (!activeProduct) notFound()


  //if activeProduct is assigned to a category, then the category handle is the handle, else use "obleceni"
  const handle: string = activeProduct.categories && activeProduct.categories.length > 0 ? activeProduct.categories[0].handle : "obleceni"

  const categoryProductDetails = await getCategoryProductDetailsByHandle(handle)

  //cast categoryProductDetails to IProductPreview[] | null

  const { product_categories } = await getCategoriesList()

  const breadcrumbs = await getBreadcrumbs(activeProduct, product_categories)

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

              <CartWrapper activeProduct={activeProduct} />

            </div>
          </div>

          <div className="md:mt-16 mt-10">
            <h2 className="font-medium lg:text-[28px] md:text-[24px] text-[20px]">
              Podobné produkty
            </h2>
            <ProductContainer
              data={categoryProductDetails?.filter(productDetail => productDetail.route !== activeProduct.route).map(productDetail => ({
                id: productDetail.id,
                image: productDetail.image,
                title: productDetail.title,
                route: productDetail.route,
                sizes: productDetail.sizes,
                price: productDetail.price,
                colors: productDetail.colors,
              }))!} />
          </div>
        </>
      )}
    </main>
  )
}

export default ProductDetail
