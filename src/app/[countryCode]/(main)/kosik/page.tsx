"use server"

import { NextPage } from "next"
import { getCartAction } from "@utils/apiActions/actions"
import CartContainer from "@components/cart/CartContainer"
import { getCustomer } from "@utils/apiActions/signUp"

const CartPage: NextPage = async () => {
  const cart = await getCartAction()
  const customer = await getCustomer()

  return (
    <CartContainer startCart={cart} customer={customer}/>
  )
}

export default CartPage
