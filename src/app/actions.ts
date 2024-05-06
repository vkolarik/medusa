'use server'

import { IProductDetail, IProductPreview } from "../modules/Product"
import { MedusaApi } from "@constants/api"
import { getCustomer } from "@lib/data"
import { Cart, Customer, LineItem } from "@medusajs/medusa"
import { enrichLineItems, retrieveCart } from "@modules/cart/actions"

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

export async function getCart() : Promise<null | Omit<Cart, "refundable_amount" | "refunded_total">>{
  const cart = await retrieveCart()

  if (cart?.items.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
    cart.items = enrichedItems as LineItem[]
  }

  return cart
}


