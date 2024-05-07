'use server'

import { IProductDetail, IProductPreview } from "../modules/Product"
import { MedusaApi } from "@constants/api"
import { addItem, getCustomer } from "@lib/data"
import { Cart, Customer, LineItem } from "@medusajs/medusa"
import { enrichLineItems, getOrSetCart, retrieveCart } from "@modules/cart/actions"
import { revalidateTag } from "next/cache"

export async function getProductDetailByHandle(handle: string) : Promise<IProductDetail | null> {
  return await MedusaApi.getProductDetail(handle)
}

export async function getCategoryProductDetailsByHandle(handle: string) : Promise<(IProductDetail)[] | null>{
  return await MedusaApi.getCategoryProductDetailsByHandle(handle)
}

export async function getCategoryProductPreviewsByHandle(handle: string) : Promise<(IProductPreview)[] | null>{
  return await MedusaApi.getCategoryProductPreviewsByHandle(handle)
}

export async function getCustomerAction() : Promise<Omit<Customer, "password_hash"> | null>{
  return await getCustomer().catch(() => null)
}

export async function getCartAction() : Promise<null | Omit<Cart, "refundable_amount" | "refunded_total">>{
  const cart = await retrieveCart()

  if (cart?.items.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
    cart.items = enrichedItems as LineItem[]
  }

  return cart
}

export async function addToCartAction({
                                  variantId,
                                  quantity,
                                  countryCode,
                                }: {
  variantId: string
  quantity: number
  countryCode: string
}) {
  const cart = await getOrSetCart(countryCode).then((cart) => cart)

  if (!cart) {
    return "Missing cart ID"
  }

  if (!variantId) {
    return "Missing product variant ID"
  }

  try {
    await addItem({ cartId: cart.id, variantId, quantity })
    //revalidateTag("cart")
  } catch (e) {
    return "Error adding item to cart"
  }
}


