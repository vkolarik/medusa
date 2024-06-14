"use server"

import { NextPage } from "next"
import { getCartAction } from "@utils/apiActions/actions"
import CartContainer from "@components/cart/CartContainer"
import { getCustomer } from "@utils/apiActions/signUp"
import { setPaymentMethod } from "@utils/apiActions/checkout"
import { createPaymentSessions } from "@lib/data"
import { CartWithCheckoutStep } from "../../../../aaa-temp/types/global"

const CartPage: NextPage = async () => {
  const cart = await getCartAction()
  const customer = await getCustomer()

  return (
    <CartContainer startCart={cart} customer={customer}/>
  )
}

export default CartPage
