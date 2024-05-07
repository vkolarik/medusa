"use server"

import { getCustomerAction, getCartAction } from "../../app/actions"
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
