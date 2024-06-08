"use server"

import { getCustomerAction, getCartAction } from "../../utils/apiActions/actions"
import { FC } from "react"
import { Header } from "@components/header/Header"

type Props = {}

export const HeaderWrapper: FC<Props> = async ({}) => {
  const customer = await getCustomerAction()
  const cart = await getCartAction()

  return (
    <Header customer={customer} startCart={cart}/>
  )
}
