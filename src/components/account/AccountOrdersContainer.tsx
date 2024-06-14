"use server"

import { NoData } from "@components/NoData"
import { ProductSummary } from "@components/products/ProductSummary"
import { LineItem, Order } from "@medusajs/medusa"
import { calculateTotalPrice, formatAmount } from "@utils/prices"
import { FC } from "react"
import { formatDate } from "@utils/dat"
import Image from "next/image"
import { truncate } from "@utils/truncate"
import { RemoveIcon } from "@components/cart/RemoveIcon"

export const AccountOrdersContainer: FC<{ data: Order[] }> = ({
  data
}) => {
  return (
    <div className="lg:max-h-[90vh] lg:overflow-y-auto lg:pr-5 relative min-h-[15rem]">
      {data.length > 0 ? data.map((order: Order, key: number) => {
        console.log(order)
        // const { cart, items } = item
        return (
          <div key={key}>
            <div className="flex justify-between lg:py-2 py-1">
              <h2 className="font-medium lg:text-[16px] md:text-[15px] text-[14px]">
                Objednáno: {formatDate(order.created_at.toString())}
              </h2>
              <h2 className="font-medium lg:text-[16px] md:text-[15px] text-[14px]">
                Celkem: {" "}
                {formatAmount({
                  amount: order.payments[0].amount || 0,
                  region: order.region,
                  includeTaxes: false,
                })}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 gap-y-5 lg:py-8 pb-8 pt-4 border-t border-lightGrey">
              {order.items.map((product: LineItem, productKey: number) => {

                const formatedPrice = formatAmount({
                  amount: product.total || 0,
                  region: order.region,
                  includeTaxes: false,
                })

                return (
                <li key={productKey} className="flex w-full gap-2 justify-between md:mb-0 mb-6">
                  <div className="flex flex-start gap-5">
                    {product.thumbnail && (
                      <Image
                        src={product.thumbnail}
                        alt="title"
                        className="cart-image object-contain"
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    )}

                    <div className="space-y-1 w-full flex flex-col justify-center">
                      <p className="font-medium xl:text-[19px] text-[15px] mb-0">
                        {truncate(product.title, 50)}
                      </p>
                      <div className="flex 2xl:gap-12 md:gap-6 gap-1 md:flex-row flex-col">
                        <p className="small">Velikost: {product.variant?.title?.toUpperCase()}</p>
                        <p className="small">Množství: {product.quantity} ks</p>
                        <p className="block md:hidden font-semibold xl:text-[18px] text-[13px] w-full">
                          Cena:{" "}
                          {formatedPrice}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:items-center gap-5 w-max pl-5">
                    <p className="md:block hidden font-semibold text-right xl:text-[18px] text-[14px] whitespace-nowrap">
                      {formatedPrice}
                    </p>
                    {/*{canBeDeleted && setLoading && (*/}
                    {/*  <RemoveIcon*/}
                    {/*    cartId={item.cart_id}*/}
                    {/*    lineId={item.id}*/}
                    {/*    setLoading={setLoading}*/}
                    {/*    setUpdated={setUpdated}*/}
                    {/*  />*/}
                    {/*)}*/}
                  </div>
                </li>
                )
              })}
            </div>
          </div>
        )
      }) : <p>sikokot</p>}
    </div>
  )
}

// <NoData subtitle="Musíte nejprve udělat objednávku" />