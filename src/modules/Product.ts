import { Dispatch, SetStateAction } from "react"
import { Cart, LineItem, ProductCategory, ProductVariant } from "@medusajs/medusa"
import { ILink } from "./Link"

export interface IProductPreview {
  id: number
  image: string
  title: string
  route: string
  variants: IProductVariant[]
  price: number
  amount?: number
  colors: string[]
}

export interface IProductVariant {
  id: string
  title: string
  available: boolean
}

export interface IProductSummary {
  item: LineItem
  canBeDeleted?: boolean
  setLoading?: Dispatch<SetStateAction<boolean>>
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
  setUpdated?: () => void
}

export interface IProductDetail extends IProductPreview {
  images: string[]
  description: string
  categories: ProductCategory[] | undefined
}

export interface IProductSizes {
  variants: string[]
  hidden?: boolean
  setSelectedSize?: Dispatch<SetStateAction<string | null>>
  selectedSize?: string | null
}

export interface IProductVariants {
  variants: IProductVariant[]
  hidden?: boolean
  setSelectedVariant?: Dispatch<SetStateAction<string | null>>
  selectedVariant?: string | null
}

export interface IProductCalculator {
  waistCircumference: number
  hipsCircumference: number
  breastsCircumference: number
  gender: "male" | "female"
}

export interface IProductDetailSizesTable {
  theads: string[]
  tbody: (string | number)[][]
}

export interface ProductProps {
  activeProduct: IProductDetail | null
  categoryProductDetails: IProductDetail[] | null
  breadcrumbs: ILink[]
}

export type ProductPreviewType = {
  id: string
  title: string
  handle: string | null
  thumbnail: string | null
  created_at?: Date
  price?: {
    calculated_price: string
    original_price: string
    difference: string
    price_type: "default" | "sale"
  }
  isFeatured?: boolean
}

export type CalculatedVariant = ProductVariant & {
  calculated_price: number
  calculated_price_type: "sale" | "default"
  original_price: number
}
