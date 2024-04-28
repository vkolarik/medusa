import Medusa from "@medusajs/medusa-js"
import { IProductPreview } from "../modules/Product"
import { getProductsListWithSort, getRegion, retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"


export const MedusaApiLibrary = new Medusa({ baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!!, maxRetries: 3 })

export const MedusaApi = {
  async getProductPreviews(): Promise<IProductPreview[] | null> {
    const region: Region | undefined | null = await getRegion("cz");

    if (!region) {
      return null;
    }

    const { response, nextPage } = await getProductsListWithSort({
      page: 1,
      queryParams: {
        region_id: region.id
      },
      sortBy: "created_at",
      countryCode: "cz",
    });

    const res: (IProductPreview | null)[] = await Promise.all(
      response.products.map(async (productPreview) => {
        const pricedProduct = await retrievePricedProductById({
          id: productPreview.id,
          regionId: "reg_01HR5E816NSE3ZAK0DBMZPG5AB",
        });

        if (!pricedProduct) {
          return null;
        }

        const { cheapestPrice } = getProductPrice({
          product: pricedProduct,
          region: region,
        });

        return {
          id: parseInt(productPreview.id),
          image: productPreview.thumbnail || '',
          title: productPreview.title,
          route: productPreview.handle ? `/products/${productPreview.handle}` : '',
          sizes: [], // You might want to define how to get sizes from ProductPreviewType
          price: cheapestPrice?.calculated_price || "Price not found",
          colors: [], // You might want to define how to get colors from ProductPreviewType
        };
      })
    );

    return res.filter((product) => product !== null) as IProductPreview[];
  }



}