import { FC } from "react"
import Image from "next/image"
import { truncate } from "@utils/truncate"
import { RemoveIcon } from "../cart/RemoveIcon"
import { ColorCircle } from "../cart/ColorCircle"
import { IProductSummary } from "modules/Product"

export const ProductSummary: FC<IProductSummary> = ({ item, canBeDeleted = false, setLoading }) => {
  const { title, amount, price, image, size, color } = item
  return (
    <li className="flex w-full gap-2 justify-between">
      <div className="flex flex-start gap-5">
        <Image
          src={image}
          alt="title"
          className="cart-image object-contain"
          width={60}
          height={60}
          loading="lazy"
        />

        <div className="space-y-1 w-full flex flex-col justify-center">
          <p className="font-medium xl:text-[19px] text-[15px] md:mb-0 mb-2">{truncate(title, 50)}</p>
          <div className="flex 2xl:gap-12 md:gap-6 gap-1 md:flex-row flex-col">
            <p className="small">Velikost: {size?.toUpperCase()}</p>
            <p className="small flex gap-2">Barva: <ColorCircle color={color as string} /></p>
            <p className="small">Množství: {amount} ks</p>
            <p className="block md:hidden font-semibold xl:text-[18px] text-[13px] w-full">Cena: {price} Kč</p>
          </div>
        </div>
      </div>

      <div className="flex md:items-center gap-5 w-max pl-5">
        <p className="md:block hidden font-semibold text-right xl:text-[18px] text-[14px] whitespace-nowrap">
          {price} Kč
        </p>
        {canBeDeleted && setLoading && <RemoveIcon itemId={item.id}
          setLoading={setLoading} />}
      </div>
    </li>
  )
}
