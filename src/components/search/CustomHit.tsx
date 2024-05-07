import { ProductVariant } from "@medusajs/medusa"
import { Container, Text } from "@medusajs/ui"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

export type CustomProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: ProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type CustomHitProps = {
  hit: CustomProductHit
}

const CustomCustomHit = ({ hit }: CustomHitProps) => {
  return (
    <div className="flex align-items-center gap-4 items-center">
      <Image
        alt={hit.title}
        src={hit.thumbnail || ""}
        width={30}
        height={30}
        loading="lazy"
        className={`object-cover`}
        style={{ width: "28px" }}
      />
      <p className="md:text-[16px] text-[15px] normal-case font-normal text-black">{hit.title}</p>
    </div>
  )
}

export default CustomCustomHit
