"use server"


import { NextPage } from "next"
import { getCustomer } from "@lib/data"
import { redirect } from "next/navigation"
import CustomLoginForm from "@components/account/CustomLoginForm"
import { Customer } from "@medusajs/medusa"

const SignIn: NextPage = async () => {
  const customer  = await getCustomer().catch(() => null)

  //if customer does not exist, redirect to prihlaseni
  if (customer) redirect("/ucet/objednavky")

  return (
    <CustomLoginForm />
  )
}

export default SignIn
