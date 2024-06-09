"use server"

import { StorePostCartsCartReq } from "@medusajs/medusa"
import { cookies } from "next/headers"
import { updateCart } from "./cart"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { getMedusaHeaders, medusaClient } from "@utils/config"

export async function finishOrder(currentState: {
  cartId: string
}, formData: FormData) {
  try {
    await setAddresses(currentState, formData)
    await completeCart(currentState.cartId)
    await placeOrder()
  } catch (error: any) {
    return error.toString()
  }
}

export async function setAddresses(currentState: unknown, formData: FormData) {
  if (!formData) return "No form data received"
  const cartId = cookies().get("_medusa_cart_id")?.value
  if (!cartId) return { message: "No cartId cookie found" }

  const data = {
    shipping_address: {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      address_1: formData.get("address_1"),
      address_2: "",
      company: "",
      postal_code: formData.get("postal_code"),
      city: formData.get("city"),
      country_code: "cz", // TODO: use dynamic
      province: formData.get("province"),
      phone: formData.get("phone"),
    },
    email: formData.get("email"),
  } as StorePostCartsCartReq

  data.billing_address = data.shipping_address

  try {
    await updateCart(cartId, data)
    revalidateTag("cart")
  } catch (error: any) {
    return error.toString()
  }

  // redirect(
  //   `/${formData.get("shipping_address.country_code")}/checkout?step=delivery`
  // )
}

export async function setShippingMethod(shippingMethodId: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  try {
    await addShippingMethod({ cartId, shippingMethodId })
    revalidateTag("cart")
  } catch (error: any) {
    throw error
  }
}

export async function setPaymentMethod(providerId: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value
  if (!cartId) throw new Error("No cartId cookie found")

  try {
    const cart = await setPaymentSession({ cartId, providerId })
    revalidateTag("cart")
    return cart
  } catch (error: any) {
    throw error
  }
}

export async function placeOrder() {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  let cart

  try {
    cart = await completeCart(cartId)
    revalidateTag("cart")
  } catch (error: any) {
    throw error
  }

  if (cart?.type === "order") {
    const countryCode = cart.data.shipping_address?.country_code?.toLowerCase()
    cookies().set("_medusa_cart_id", "", { maxAge: -1 })
    redirect(`/${countryCode}/order/confirmed/${cart?.data.id}`)
  }

  return cart
}

export async function addShippingMethod({
  cartId,
  shippingMethodId,
}: {
  cartId: string
  shippingMethodId: string
}) {
  const headers = getMedusaHeaders(["cart"])

  return medusaClient.carts
    .addShippingMethod(cartId, { option_id: shippingMethodId }, headers)
    .then(({ cart }) => cart)
    .catch((err) => console.log(err))
}

export async function completeCart(cartId: string) {
  const headers = getMedusaHeaders(["cart"])

  return medusaClient.carts
    .complete(cartId, headers)
    .then((res) => res)
    .catch((err) => console.log(err))
}

export async function setPaymentSession({
  cartId,
  providerId,
}: {
  cartId: string
  providerId: string
}) {
  const headers = getMedusaHeaders(["cart"])

  return medusaClient.carts
    .setPaymentSession(cartId, { provider_id: providerId }, headers)
    .then(({ cart }) => cart)
    .catch((err) => console.log(err))
}