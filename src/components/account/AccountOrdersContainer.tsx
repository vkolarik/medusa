"use client"

import { ProductSummary } from "@components/products/ProductSummary"
import { calculateTotalPrice } from "@utils/prices"
import { IAccountOrders } from "modules/account/AccountOrders"
import { IProductSummary } from "modules/Product"
import { FC } from "react"

export const AccountOrdersContainer: FC<{ data: IAccountOrders[] }> = ({
  data,
}) => {
  return (
    <div className="lg:max-h-[90vh] lg:overflow-y-auto lg:pr-5">
      {data.map((item: IAccountOrders, key: number) => {
        const { date, products } = item
        return (
          <div key={key}>
            <div className="flex justify-between lg:py-2 py-1">
              <h2 className="font-medium lg:text-[16px] md:text-[15px] text-[14px]">
                Objednáno: {date}
              </h2>
              <h2 className="font-medium lg:text-[16px] md:text-[15px] text-[14px]">
                Celkem: {calculateTotalPrice(products.map((p) => p.item))} Kč
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 gap-y-5 lg:py-8 pb-8 pt-4 border-t border-lightGrey">
              {products.map((product: IProductSummary, productKey: number) => {
                const { item, canBeDeleted } = product
                return (
                  <ProductSummary
                    key={productKey}
                    item={item}
                    canBeDeleted={canBeDeleted}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
