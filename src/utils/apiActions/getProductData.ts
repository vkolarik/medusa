import { ProductPreviewType, ProductProps } from "modules/Product"
import { notFound } from "next/navigation"
import { getBreadcrumbsForProduct } from "./breadcrumbs"
import { cache } from "react"
import { getMedusaHeaders, medusaClient } from "../config"
import { Region, StoreGetProductsParams } from "@medusajs/medusa"
import transformProductPreview from "../transformProductPreview"
import sortProducts from "../sortProducts"
import { getCategoriesList, getCategoryByHandle } from "./getCategoriesData"
import { SortOptions } from "modules/SortOptions"
import { getRegion } from "../regions"
import { getCategoryProductDetailsByHandle, getProductDetailByHandle } from "./actions"

const emptyResponse = {
  response: { products: [], count: 0 },
  nextPage: null,
}

export const getProductData = async (slug: string) : Promise<ProductProps> => {
  const activeProduct = await getProductDetailByHandle(slug)
  if (!activeProduct) notFound()
  
  // if activeProduct is assigned to a category,
  // then the category handle is the handle, else use "obleceni"
  const handle: string = activeProduct.categories && activeProduct.categories.length > 0
   ? activeProduct.categories[0].handle
    : "obleceni"
  
  const categoryProductDetails = await getCategoryProductDetailsByHandle(handle)
  const { product_categories } = await getCategoriesList()
  const breadcrumbs = await getBreadcrumbsForProduct(activeProduct, product_categories)

  return {
    activeProduct,
    categoryProductDetails,
    breadcrumbs
  }
}

export const getProductsByCategoryHandle = cache(async function ({
  pageParam = 0,
  handle,
  countryCode,
}: {
  pageParam?: number
  handle: string
  countryCode: string
  currencyCode?: string
}): Promise<{
  response: { products: ProductPreviewType[]; count: number }
  nextPage: number | null
}> {
  const { id } = await getCategoryByHandle([handle]).then(
    (res) => res.product_categories[0]
  )

  const { response, nextPage } = await getProductsList({
    pageParam,
    queryParams: { category_id: [id] },
    countryCode,
  })
    .then((res) => res)
    .catch((err) => {
      throw err
    })

  return {
    response,
    nextPage,
  }
})

export const getProductsList = cache(async function ({
  pageParam = 0,
  queryParams,
  countryCode,
}: {
  pageParam?: number
  queryParams?: StoreGetProductsParams
  countryCode: string
}): Promise<{
  response: { products: ProductPreviewType[]; count: number }
  nextPage: number | null
  queryParams?: StoreGetProductsParams
}> {
  const limit = queryParams?.limit || 12

  const region = await getRegion(countryCode)

  if (!region) {
    return emptyResponse
  }

  const { products, count } = await medusaClient.products
    .list(
      {
        limit,
        offset: pageParam,
        region_id: region.id,
        ...queryParams,
      },
      { next: { tags: ["products"] } }
    )
    .then((res) => res)
    .catch((err) => {
      throw err
    })

  const transformedProducts = products.map((product) => {
    return transformProductPreview(product, region!)
  })

  const nextPage = count > pageParam + 1 ? pageParam + 1 : null

  return {
    response: { products: transformedProducts, count },
    nextPage,
    queryParams,
  }
})

export const getProductsListWithSort = cache(
  async function getProductsListWithSort({
    page = 0,
    queryParams,
    sortBy = "created_at",
    countryCode,
  }: {
    page?: number
    queryParams?: StoreGetProductsParams
    sortBy?: SortOptions
    countryCode: string
  }): Promise<{
    response: { products: ProductPreviewType[]; count: number }
    nextPage: number | null
    queryParams?: StoreGetProductsParams
  }> {
    const limit = queryParams?.limit || 12

    const {
      response: { products, count },
    } = await getProductsList({
      pageParam: 0,
      queryParams: {
        ...queryParams,
        limit: 100,
      },
      countryCode,
    })

    const sortedProducts = sortProducts(products, sortBy)
    const pageParam = (page - 1) * limit
    const nextPage = count > pageParam + limit ? pageParam + limit : null
    const paginatedProducts = sortedProducts.slice(pageParam, pageParam + limit)

    return {
      response: {
        products: paginatedProducts,
        count,
      },
      nextPage,
      queryParams,
    }
  }
)

export const retrievePricedProductById = cache(async function ({
  id,
  regionId,
}: {
  id: string
  regionId: string
}) {
  const headers = getMedusaHeaders(["products"])

  return medusaClient.products
    .retrieve(`${id}?region_id=${regionId}`, headers)
    .then(({ product }) => product)
    .catch((err) => {
      console.log(err)
      return null
    })
})

export const getProductsById = cache(async function ({
  ids,
  regionId,
}: {
  ids: string[]
  regionId: string
}) {
  const headers = getMedusaHeaders(["products"])

  return medusaClient.products
    .list({ id: ids, region_id: regionId }, headers)
    .then(({ products }) => products)
    .catch((err) => {
      console.log(err)
      return null
    })
})