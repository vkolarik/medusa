"use server"

import { getCustomerAction, getCart } from "../../app/actions"
import { FC } from "react"
import { Header } from "@components/header/Header"

type Props = {}

export const HeaderWrapper: FC<Props> = async ({}) => {
  const customer = await getCustomerAction()
  const cart = await getCart()

  return (
      <Header customer={customer} cart={cart}/>
  )
}
