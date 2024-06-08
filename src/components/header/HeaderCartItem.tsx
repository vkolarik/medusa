import { FC } from "react"
import Image from "next/image"
import { truncate } from "@utils/truncate"
import Link from "next/link"
import { LineItem } from "@medusajs/medusa"

export const HeaderCartItem: FC<{ item: LineItem, price: string}> = ({ item, price }) => {
  return (
    <li className="flex gap-2">
      <Image
        src={item.thumbnail || ""}
        alt="title"
        className="cart-image"
        width={80}
        height={80}
        loading="lazy"
      />

      <div className="space-y-1">
        <Link href={"/produkty/"+item.variant.product.handle}>{truncate(item.title, 25)}</Link>
        <p className="small">Počet: {item.quantity} ks</p>
        <p className="small">Velikost: {item.variant.title.toUpperCase()}</p>
        <p className="small font-semibold">Cena: {price.slice(4, -3).replace(",", "")} Kč</p>
      </div>

    </li>
  )
}
