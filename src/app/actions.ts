'use server'

import { IProductDetail, IProductPreview } from "../modules/Product"
import { MedusaApi } from "@constants/api"
import { getCustomer } from "@lib/data"
import { Customer } from "@medusajs/medusa"

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
