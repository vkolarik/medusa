import { IProductSummary } from "./Product"

export interface IAccountOrders {
  id: number
  date: string
  products: IProductSummary[]
}
