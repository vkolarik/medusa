import { FC, useEffect, useState } from "react"
import Image from "next/image"
import { truncate } from "@utils/truncate"
import { RemoveIcon } from "../cart/RemoveIcon"
import { IProductSummary } from "modules/Product"
import { formatAmount } from "@utils/prices"
import { RegionInfo } from "medusa-react"

export const ProductSummary: FC<IProductSummary> = ({
  item,
  canBeDeleted = false,
  setLoading,
  cart,
  setUpdated
}) => {
  const { title, quantity, subtotal, thumbnail, variant } = item
  const [price, setPrice] = useState("")

  useEffect(() => {
    const p = formatAmount({
      amount: subtotal || 0,
      region: cart?.region as RegionInfo,
      includeTaxes: false,
    })
    setPrice(p.slice(4, -3).replace(",", ""))
  }, [])

  return (
    <li className="flex w-full gap-2 justify-between md:mb-0 mb-6">
      <div className="flex flex-start gap-5">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt="title"
            className="cart-image object-contain"
            width={60}
            height={60}
            loading="lazy"
          />
        )}

        <div className="space-y-1 w-full flex flex-col justify-center">
          <p className="font-medium xl:text-[19px] text-[15px] mb-0">
            {truncate(title, 50)}
          </p>
          <div className="flex 2xl:gap-12 md:gap-6 gap-1 md:flex-row flex-col">
            <p className="small">Velikost: {variant.title?.toUpperCase()}</p>
            <p className="small">Množství: {quantity} ks</p>
            <p className="block md:hidden font-semibold xl:text-[18px] text-[13px] w-full">
              Cena:{" "}
              {price}{" "}
              Kč
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:items-center gap-5 w-max pl-5">
        <p className="md:block hidden font-semibold text-right xl:text-[18px] text-[14px] whitespace-nowrap">
          {price} Kč
        </p>
        {canBeDeleted && setLoading && (
          <RemoveIcon
            cartId={item.cart_id}
            lineId={item.id}
            setLoading={setLoading}
            setUpdated={setUpdated}
          />
        )}
      </div>
    </li>
  )
}
