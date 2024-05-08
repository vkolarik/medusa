import { Dispatch, SetStateAction } from "react"
import { ICartItem } from "./CartItem"

export interface AppProviderInterface {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  updated: boolean
  setUpdated: Dispatch<SetStateAction<boolean>>
  showSearch: boolean
  setShowSearch: Dispatch<SetStateAction<boolean>>
  cartProducts: ICartItem[]
  setCartProducts: Dispatch<SetStateAction<ICartItem[]>>
}
