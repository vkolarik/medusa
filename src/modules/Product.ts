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
  color: string
}

export interface IProductSummary {
  item: ICartItem
  canBeDeleted?: boolean
  setLoading?: Dispatch<SetStateAction<boolean>>
}