import { getMedusaHeaders, medusaClient } from "@utils/config"
import { cache } from "react"

export const listCustomerOrders = cache(async function (
  limit: number = 10,
  offset: number = 0
) {
  const headers = getMedusaHeaders(["customer"])

  return medusaClient.customers
    .listOrders({ limit, offset }, headers)
    .then(({ orders }) => orders)
    .catch((err) => console.log(err))
})
