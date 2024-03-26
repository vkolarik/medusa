import { ICartItem } from "modules/CartItem"

export const calculateTotalPrice = (cartProducts: ICartItem[]) => {
  return cartProducts.reduce((acc, currentItem) => {
    return acc + currentItem.price * (currentItem.amount ?? 1)
  }, 0)
}
