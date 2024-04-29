"use server"

import { getProductDetailByHandle } from "../../../../actions"
import { ProductDetailWrapper } from "@components/products/ProductDetailWrapper"

const ProductDetail = async ({ params }: { params: { slug: string } }) => {

  return (
    <>
      <ProductDetailWrapper productFromServerAction={await getProductDetailByHandle(params.slug)} />
    </>

  )
}

export default ProductDetail
