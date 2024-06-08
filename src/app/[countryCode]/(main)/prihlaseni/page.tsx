"use server"

import { NextPage } from "next"
import { redirect } from "next/navigation"
import CustomLoginForm from "@components/account/CustomLoginForm"
import { getCustomer } from "@utils/apiActions/signUp"

const SignIn: NextPage = async () => {
  const customer  = await getCustomer().catch(() => null)

  //if customer does not exist, redirect to prihlaseni
  if (customer) redirect("/ucet/objednavky")

  return (
    <CustomLoginForm />
  )
}

export default SignIn
