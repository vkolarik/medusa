"use server"

import { AddressPayload, Customer, StorePostAuthReq, StorePostCustomersCustomerReq } from "@medusajs/medusa"
import { getMedusaHeaders, medusaClient } from "@utils/config"
import { revalidateTag } from "next/cache"

async function updateCustomer(data: StorePostCustomersCustomerReq) {
  const headers = getMedusaHeaders(["customer"])

  return medusaClient.customers
    .update(data, headers)
    .then(({ customer }) => customer)
    .catch((err) => console.log(err))
}

export const editCustomer = async (_currentState: unknown, formData: FormData) => {
  const address = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    phone: formData.get("phone"),
    postal_code: formData.get("postal_code"),
    city: formData.get("city"),
    address_1: formData.get("address_1"),
    province: formData.get("province"),
  } as AddressPayload

  const customer = {
    password: formData.get("password"),
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    billing_address: address
  } as StorePostCustomersCustomerReq

  try {
    await updateCustomer(customer).then(() => {
      revalidateTag("customer")
    })
    return { success: true, error: null }
  } catch (error: any) {
    return { success: false, error: error.toString() }
  }
}

export async function updateCustomerPassword(
  currentState: {
    customer: Omit<Customer, "password_hash">
    success: boolean
    error: string | null
  },
  formData: FormData
) {
  const email = currentState.customer.email as string
  const new_password = formData.get("new_password") as string
  const old_password = formData.get("old_password") as string
  const confirm_password = formData.get("confirm_password") as string
  const isValid = await authenticate({ email, password: old_password })
    .then(() => true)
    .catch(() => false)

  if (!isValid) {
    return {
      customer: currentState.customer,
      success: false,
      error: "Staré heslo je neplatné",
    }
  }

  if (new_password !== confirm_password) {
    return {
      customer: currentState.customer,
      success: false,
      error: "Hesla nejsou stejná",
    }
  }

  try {
    await updateCustomer({ password: new_password }).then(() => {
      revalidateTag("customer")
    })

    return {
      customer: currentState.customer,
      success: true,
      error: null,
    }
  } catch (error: any) {
    return {
      customer: currentState.customer,
      success: false,
      error: error.toString(),
    }
  }
}

export async function authenticate(credentials: StorePostAuthReq) {
  const headers = getMedusaHeaders(["auth"])

  return medusaClient.auth
    .authenticate(credentials, headers)
    .then(({ customer }) => customer)
    .catch((err) => console.log(err))
}