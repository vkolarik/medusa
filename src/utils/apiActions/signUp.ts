"use server"

import { StorePostCustomersReq } from "@medusajs/medusa"
import { revalidateTag } from "next/cache"
import { getMedusaHeaders, medusaClient } from "../config"
import { getToken } from "./login"

export const signUp = async (_currentState: unknown, formData: FormData) => {
  const customer = {
    email: formData.get("email"),
    password: formData.get("password"),
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    phone: formData.get("phone"),
  } as StorePostCustomersReq

  try {
    await createCustomer(customer)
    await getToken({ email: customer.email, password: customer.password }).then(
      () => {
        revalidateTag("customer")
      }
    )
  } catch (error: any) {
    return error.toString()
  }
}

export const createCustomer = async (data: StorePostCustomersReq) => {
  const headers = getMedusaHeaders(["customer"])

  return medusaClient.customers
  .create(data, headers)
  .then(({ customer }) => customer)
  .catch((err) => console.log(err))
}

export async function getCustomer() {
  const headers = getMedusaHeaders(["customer"])

  return medusaClient.customers
    .retrieve(headers)
    .then(({ customer }) => customer)
    .catch((err) => null)
}
