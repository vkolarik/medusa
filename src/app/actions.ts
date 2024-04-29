'use server'

import { IProductDetail } from "../modules/Product"
import { MedusaApi } from "@constants/api"

export async function getProductDetailByHandle(handle: string) : Promise<IProductDetail | null> {
  return await MedusaApi.getProductDetail(handle)
}