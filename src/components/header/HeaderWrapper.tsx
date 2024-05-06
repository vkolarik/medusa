"use server"

import { getCustomerAction } from "../../app/actions"
import { FC } from "react"
import { Header } from "@components/header/Header"

type Props = {}

export const HeaderWrapper: FC<Props> = async ({}) => {
  const customer = await getCustomerAction()

  return (
      <Header customer={customer}/>
  )
}
