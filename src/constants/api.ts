import Medusa from "@medusajs/medusa-js"
import { IProductDetail, IProductPreview } from "../modules/Product"
import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import medusaRequest from "@constants/medusaFetch"
import { convertToPreview } from "@utils/truncate"
import { getRegion } from "@utils/regions"
import { getProductPrice } from "@utils/apiActions/getProductPrice"
import { getProductsByCategoryHandle, getProductsListWithSort, retrievePricedProductById } from "@utils/apiActions/getProductData"

export const MedusaApiLibrary = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!!,
  maxRetries: 3,
})
export const ACTIVE_COUNTRY_CODE: string = "cz"

export const MedusaApi = {

  getProductPreviews: async function(): Promise<IProductPreview[] | null> {
    const region: Region | undefined | null = await getRegion(
      ACTIVE_COUNTRY_CODE,
    )

    if (!region) {
      return null
    }

    const { response } = await getProductsListWithSort({
      page: 1,
      queryParams: {
        region_id: region.id,
      },
      sortBy: "created_at",
      countryCode: ACTIVE_COUNTRY_CODE,
    })

    const res: (IProductPreview | null)[] = await Promise.all(
      response.products.map(async (productPreview) => {
        const pricedProduct: PricedProduct | null =
          await retrievePricedProductById({
            id: productPreview.id,
            regionId: region.id,
          })

        if (!pricedProduct) {
          return null
        }

        if (!pricedProduct.variants) {
          return null
        }

        const { cheapestPrice } = getProductPrice({
          product: pricedProduct,
          region: region,
        })

        const r: IProductPreview = {
          id: parseInt(productPreview.id),
          image: productPreview.thumbnail || "",
          title: productPreview.title,
          route: productPreview.handle
            ? `/produkty/${productPreview.handle}`
            : "",
          variants: pricedProduct.variants.map((variant) => ({id: variant.id || "", title: variant.title || "", available: true})),
          price: cheapestPrice?.calculated_price
            ? parseInt(cheapestPrice.calculated_price.slice(4, -3))
            : -404,
          colors: [],
        }
        return r
      }),
    )

    return res.filter((product) => product !== null) as IProductPreview[]
  },


  //return null if category does not exist, if there are no products, return empty array
  async getCategoryProductDetailsByHandle(handle: string): Promise<IProductDetail[] | null> {
    const { response } = await getProductsByCategoryHandle({ handle: handle, countryCode: ACTIVE_COUNTRY_CODE })
    const res: (IProductDetail | null)[] = await Promise.all(
      response.products.map(async (product) => {
        if (product.handle) {
          return await this.getProductDetail(product.handle)
        }
        return null
      }),
    )
    return res.filter((product): product is IProductDetail => product !== null)
  },

  async getCategoryProductPreviewsByHandle(handle: string): Promise<IProductPreview[] | null> {
    const productDetails = await this.getCategoryProductDetailsByHandle(handle)
    if (!productDetails) {
      return null
    }
    return productDetails.map(detail => convertToPreview(detail))
  },


  async getProductDetail(handle: string): Promise<IProductDetail | null> {
    const region: Region | undefined | null = await getRegion(
      ACTIVE_COUNTRY_CODE,
    )

    if (!region) {
      return null
    }

    const { body } = await medusaRequest(
      "GET",
      "/products",
      {
        query: {
          handle: handle,
          region_id: region.id,
          expand: "categories,variants,variants.options,images",
        },
      },
    )

    const product: PricedProduct = body.products[0]

    if (!product) {
      return null
    }



    const pricedProduct: PricedProduct | null = await retrievePricedProductById(
      {
        id: product.id!!,
        regionId: region.id,
      },
    )

    if (!pricedProduct || !pricedProduct.variants) {
      return null
    }



    const { cheapestPrice } = getProductPrice({
      product: pricedProduct,
      region: region,
    })


    const r: IProductDetail = {
      id: parseInt(product.id!!),
      image: product.thumbnail || "",
      title: product.title ? product.title : "Not found",
      route: product.handle ? `/produkty/${product.handle}` : "",
      variants: product.variants.map((variant) => ({id: variant.id || "", title: variant.title || "", available: true})),
      price: cheapestPrice?.calculated_price
        ? parseInt(cheapestPrice.calculated_price.slice(4, -3))
        : -404,
      colors: ["#000000", "#FFFFFF"],
      description: product.description || "Description not available",
      images: product.images
        ? product.images.map((image) => image.url || "")
        : [],
      categories: product.categories,
    }
    return r
  },
}


