import { StorePostCartsCartReq } from "@medusajs/medusa";

export interface ICartForm extends StorePostCartsCartReq {
  payment: string
}
