"use client"


import { IProductPreview } from "modules/Product"
import Link from "next/link"
import { FC, useState } from "react"
import Image from "next/image"
import { CustomProductVariants } from "./CustomProductVariants"
import { twMerge } from "tailwind-merge"

export const ProductItemPreview: FC<{ product: IProductPreview }> = ({
  product,
}) => {
  const [isWaiting, setIsWaiting] = useState(false)
  const { title, image, route, variants, price } = product
  console.log(variants)
  return (
    <Link
      href={route}
      className="product-item-preview"
      prefetch
      onClick={() => setIsWaiting(true)}
    >
      <div
        className={twMerge(
          "w-full 2xl:h-[25rem] xl:h-[23rem] md:h-[20rem] h-[14rem] relative overflow-hidden",
          isWaiting && "animate-pulse bg-lightGrey"
        )}
      >
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-cover object-top duration-500"
          loading="lazy"
        />
        <CustomProductVariants variants={variants} hidden={true} />
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
