import { ICartItem } from "modules/CartItem"
import { FC } from "react"
import Image from "next/image"
import { truncate } from "@utils/truncate"

export const HeaderCartItem: FC<{ item: ICartItem }> = ({ item }) => {
  const { title, amount, price, image, size } = item

  return (
    <li className="flex gap-2">
      <Image
        src={image}
        alt="title"
        className="cart-image"
        width={80}
        height={80}
        loading="lazy"
      />

      <div className="space-y-1">
        <p>{truncate(title, 25)}</p>
        <p className="small">Počet: {amount} ks</p>
        <p className="small">Velikost: {size?.toUpperCase()}</p>
        <p className="small font-semibold text-right">
          Cena: {price} Kč
        </p>
      </div>
    </li>
  )
}