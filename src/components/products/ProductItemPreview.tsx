"use client"

import { allSizes } from "@data/sizes"
import { IProductPreview } from "modules/Product"
import Link from "next/link"
import { FC } from "react"
import Image from "next/image"
import { ProductSizes } from "./ProductSizes"

export const ProductItemPreview: FC<{ product: IProductPreview }> = ({
  product,
}) => {
  const { title, image, route, sizes, price } = product

  return (
    <Link href={route} className="product-item-preview">
      <div className="w-full 2xl:h-[25rem] xl:h-[23rem] md:h-[20rem] h-[14rem] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-cover object-top duration-500"
          loading="lazy"
        />
        <ProductSizes sizes={sizes} hidden={true} />
      </div>
      <div className="py-3 space-y-2">
        <h2 className="font-semibold md:text-[20px] text-[16px] leading-6">
          {title}
        </h2>
        <h3 className="font-medium lg:text-[18px] text-[14px]">{price} Kč</h3>
        <button className="button button--light">Detail</button>
      </div>
    </Link>
  )
}
