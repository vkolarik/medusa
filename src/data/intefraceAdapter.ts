// import { IProductPreview } from "../modules/Product"
// import { getProductsListWithSort } from "@lib/data"
//
// export async function getPricedProductsCustom() : Promise<IProductPreview[]> {
//
//   const { response, nextPage } = await getProductsListWithSort({
//     page: 1,
//     queryParams: {},
//     sortBy: "created_at",
//     countryCode: "cz",
//   })
//
//   const productData: IProductPreview[] = response.products.map((product) => {
//     return {
//       id: parseInt(product.id),
//       image: product.thumbnail || '',
//       title: product.title,
//       route: product.handle ? `/products/${product.handle}` : '',
//       sizes: [], // You might want to define how to get sizes from ProductPreviewType
//       price: parseFloat(product.price?.original_price || '0'),
//       colors: [], // You might want to define how to get colors from ProductPreviewType
//     };
//   })
//
//   return productData
// }