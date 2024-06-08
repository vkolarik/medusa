import { Dispatch, SetStateAction } from "react"
import { LineItem } from "@medusajs/medusa"

export interface AppProviderInterface {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  updated: boolean
  setUpdated: Dispatch<SetStateAction<boolean>>
  showSearch: boolean
  setShowSearch: Dispatch<SetStateAction<boolean>>
  cartProductsSize: number
  setCartProductsSize: Dispatch<SetStateAction<number>>
}
