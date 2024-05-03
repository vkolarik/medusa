'use server'

import { IProductDetail, IProductPreview } from "../modules/Product"
import { MedusaApi } from "@constants/api"

export async function getProductDetailByHandle(handle: string) : Promise<IProductDetail | null> {
  return await MedusaApi.getProductDetail(handle)
}

export async function getCategoryProductDetailsByHandle(handle: string) : Promise<(IProductDetail)[] | null>{
  return await MedusaApi.getCategoryProductDetailsByHandle(handle)
}

export async function getCategoryProductPreviewsByHandle(handle: string) : Promise<(IProductPreview)[] | null>{
  return await MedusaApi.getCategoryProductPreviewsByHandle(handle)
}