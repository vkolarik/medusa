import { Dispatch, SetStateAction } from "react"
import { ICartItem } from "./CartItem"

export interface IProductPreview {
  id: number
  image: string
  title: string
  route: string
  sizes: string[]
  price: number
  amount?: number
  colors: string[]
}

export interface IProductSummary {
  item: ICartItem
  canBeDeleted?: boolean
  setLoading?: Dispatch<SetStateAction<boolean>>
}

export interface IProductDetail extends IProductPreview {
  images: string[]
  desciption: string
}

export interface IProductSizes {
  sizes: string[]
  hidden?: boolean
  setSelectedSize?: Dispatch<SetStateAction<string | null>>
  selectedSize?: string | null
}

export interface IProductColors {
  colors: string[]
  setSelectedColor: Dispatch<SetStateAction<string | null>>
  selectedColor: string | null
}
