import { IProductDetail, IProductPreview } from "../modules/Product"

export const truncate = (text: string, length: number) => {
  if (text?.length > length) {
    if (text[length - 1] === " ") return text.slice(0, length) + "..."
    else return text.slice(0, text.slice(0, length).lastIndexOf(" ")) + "..."
  }
  return text
}

export const convertToPreview = (productDetail: IProductDetail) : IProductPreview => {
  return {
    id: productDetail.id,
    image: productDetail.image,
    title: productDetail.title,
    route: productDetail.route,
    sizes: productDetail.sizes,
    price: productDetail.price,
    colors: productDetail.colors,
  }
}
