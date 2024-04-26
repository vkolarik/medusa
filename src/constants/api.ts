import Medusa from "@medusajs/medusa-js"
import { IProductPreview } from "../modules/Product"

export const MedusaApiLibrary = new Medusa({ baseUrl: "https://medusa-api.kolarik.dev", maxRetries: 3 })

export const MedusaApi = {
  mapMedusaProductToPreview(productData: any): IProductPreview {
    return {
      id: productData.id,
      image: productData.thumbnail, // Assuming thumbnail is the image URL
      title: productData.title,
      route: `/${productData.handle}`, // Assuming handle is unique and can be used in routes
      sizes: ["S", "M"], // No size data in the provided Medusa product data
      price: 0, // No price data in the provided Medusa product data
      colors: ["#000000", "#FFFFFF", "#FF0000"], // No color data in the provided Medusa product data
    };
  },

// Function to fetch products from Medusa and map them to your interface
  async fetchAndMapProducts(): Promise<IProductPreview[]> {
    try {
      const { products } = await MedusaApiLibrary.products.list(); // Fetch products from Medusa API
      return products.map((productData: any) => MedusaApi.mapMedusaProductToPreview(productData)); // Map each product to your interface
    } catch (error) {
      console.error("Error fetching and mapping products:", error);
      return []; // Return an empty array in case of error
    }
  }
}