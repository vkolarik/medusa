import { ICartItem } from "modules/CartItem"
import { FC } from "react"
import Image from "next/image"
import { truncate } from "@utils/truncate"
import { RemoveIcon } from "./RemoveIcon"
import { ColorCircle } from "./ColorCircle"

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  const { title, amount, price, image, size, color } = item
  return (
    <li className="flex w-full gap-2 justify-between">
      <div className="flex gap-5">
        <Image
          src={image}
          alt="title"
          className="cart-image"
          width={60}
          height={60}
        />

        <div className="space-y-1 w-full flex flex-col justify-center">
          <p className="font-medium lg:text-[19px] text-[17px]">{truncate(title, 75)}</p>
          <div className="flex gap-12">
            <p className="small">Velikost: {size ?? "XS"}</p>
            <p className="small flex gap-2">Barva: <ColorCircle color={"#000000"} /></p>
            <p className="small">Množství: {amount} ks</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 w-max">
        <p className="font-semibold text-right lg:text-[18px] text-[16px]">
          {price} Kč
        </p>
        <RemoveIcon />
     </div>
    </li>
  )
}
