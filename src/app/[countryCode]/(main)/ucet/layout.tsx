"use server"

import { getCustomer } from "@utils/apiActions/signUp"
import { redirect } from "next/navigation"

export default async function CustomAccountPageLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {

  const customer = await getCustomer().catch(() => null)

  //if customer does not exist, redirect to prihlaseni
  if (!customer) redirect("/prihlaseni")

  return (
    <>
      {children}
    </>
  )

}
