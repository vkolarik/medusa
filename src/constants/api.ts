import Medusa from "@medusajs/medusa-js"
import { IProductDetail, IProductPreview } from "../modules/Product"
import { getProductByHandle, getProductsListWithSort, getRegion, retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"


export const MedusaApiLibrary = new Medusa({ baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!!, maxRetries: 3 })
export const ACTIVE_COUNTRY_CODE : string = "cz"

export const MedusaApi = {
  getProductPreviews: async function(): Promise<IProductPreview[] | null> {
    const region: Region | undefined | null = await getRegion(ACTIVE_COUNTRY_CODE)

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
        const pricedProduct: PricedProduct | null = await retrievePricedProductById({
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

        console.log(pricedProduct.variants)

        const r: IProductPreview = {
          id: parseInt(productPreview.id),
          image: productPreview.thumbnail || "",
          title: productPreview.title,
          route: productPreview.handle ? `/produkty/${productPreview.handle}` : "",
          sizes: pricedProduct.variants.map((variant) => variant.title || ""),
          price: cheapestPrice?.calculated_price ? parseInt(cheapestPrice.calculated_price.slice(4, -3)) : -404,
          colors: [],
        }

        return r
      }),
    )

    return res.filter((product) => product !== null) as IProductPreview[]
  },

  async getProductDetail(handle: string): Promise<IProductDetail | null> {
    const region: Region | undefined | null = await getRegion(ACTIVE_COUNTRY_CODE);

    if (!region) {
      return null;
    }

    const { product } = await getProductByHandle(handle);

    if (!product) {
      return null;
    }

    const pricedProduct: PricedProduct | null = await retrievePricedProductById({
      id: product.id!!,
      regionId: region.id,
    });

    if (!pricedProduct || !pricedProduct.variants) {
      return null;
    }

    const { cheapestPrice } = getProductPrice({
      product: pricedProduct,
      region: region,
    });

    const r : IProductDetail = {
      id: parseInt(product.id!!),
      image: product.thumbnail || "",
      title: product.title ? product.title : "Not found",
      route: product.handle ? `/produkty/${product.handle}` : "",
      sizes: pricedProduct.variants.map((variant) => variant.title || ""),
      price: cheapestPrice?.calculated_price ? parseInt(cheapestPrice.calculated_price.slice(4, -3)) : -404,
      colors: [],
      description: product.description || "Description not available",
      images: pricedProduct.images ? pricedProduct.images.map((image) => image.url || "") : [],

    };
    return r
  }


}