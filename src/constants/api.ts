import Medusa from "@medusajs/medusa-js"
import { IProductPreview } from "../modules/Product"
import { getProductsListWithSort } from "@lib/data"



export const MedusaApiLibrary = new Medusa({ baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!!, maxRetries: 3 })

export const MedusaApi = {
  async getPricedProductsCustom() : Promise<IProductPreview[]> {

    const { response, nextPage } = await getProductsListWithSort({
      page: 1,
      queryParams: {
        region_id: "reg_01HR5E816NSE3ZAK0DBMZPG5AB"
      },
      sortBy: "created_at",
      countryCode: "cz",
    })

    const productData: IProductPreview[] = response.products.map((product) => {
      return {
        id: parseInt(product.id),
        image: product.thumbnail || '',
        title: product.title,
        route: product.handle ? `/products/${product.handle}` : '',
        sizes: [], // You might want to define how to get sizes from ProductPreviewType
        price: parseFloat(product.price?.original_price || '0'),
        colors: [], // You might want to define how to get colors from ProductPreviewType
      };
    })

    return productData
  }


}