"use client"

import { NoData } from "@components/NoData"
import { ProductSummary } from "@components/products/ProductSummary"
import { LineItem, Order } from "@medusajs/medusa"
import { calculateTotalPrice } from "@utils/prices"
import { FC } from "react"

export const AccountOrdersContainer: FC<{ data: Order[] }> = ({
  data
}) => {
  return (
    <div className="lg:max-h-[90vh] lg:overflow-y-auto lg:pr-5 relative min-h-[15rem]">
      {data.length > 0 ? data.map((item: Order, key: number) => {
        const { cart, items } = item
        return (
          <div key={key}>
            <div className="flex justify-between lg:py-2 py-1">
              <h2 className="font-medium lg:text-[16px] md:text-[15px] text-[14px]">
                Objednáno: {formatDate(cart.completed_at)}
              </h2>
              <h2 className="font-medium lg:text-[16px] md:text-[15px] text-[14px]">
                Celkem: {calculateTotalPrice(item.cart.items, item.cart)} Kč
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 gap-y-5 lg:py-8 pb-8 pt-4 border-t border-lightGrey">
              {items.map((product: LineItem, productKey: number) => {
                return (
                  <ProductSummary
                    key={productKey}
                    item={product}
                    canBeDeleted={false}
                  />
                )
              })}
            </div>
          </div>
        )
      }) : <NoData subtitle="Musíte nejprve udělat objednávku" />}
    </div>
  )
}
