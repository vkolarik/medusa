"use server"

import { NextPage } from "next"
import { getCartAction } from "@utils/apiActions/actions"
import CartContainer from "@components/cart/CartContainer"

const CartPage: NextPage = async () => {
  const cart = await getCartAction()

  return (
    <CartContainer startCart={cart}/>
  )
}

export default CartPage
