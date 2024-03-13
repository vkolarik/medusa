import { allSizes } from "@data/sizes"
import { IProductPreview } from "modules/Product"
import Link from "next/link"
import { FC } from "react"
import Image from "next/image"
import { storeInStorage } from "@utils/storage"

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
        />
        <div className="sizes duration-500 absolute bottom-0 left-0 w-full h-0 bg-white overflow-hidden">
          <span className="small semibold uppercase mt-3">velikosti</span>
          <div className="flex flex-wrap gap-1">
            {allSizes.map((size: string, key: number) => {
              return (
                <p
                  key={key}
                  className={`text-center p-0.5 border border-lightGrey leading-none ${
                    sizes.includes(size.toUpperCase())
                      ? "text-black"
                      : "opacity-75 grey"
                  }
            uppercase lg:text-[14px] text-[12px]`}
                >
                  {size}
                </p>
              )
            })}
          </div>
        </div>
      </div>
      <div className="py-3 space-y-2">
        <h2 className="font-semibold md:text-[20px] text-[16px] leading-6">
          {title}
        </h2>
        <h3 className="font-medium lg:text-[18px] text-[14px]">{price} Kč</h3>
        <button className="button button--light"
          onClick={() => storeInStorage("session", "products", [product])}>Detail</button>
      </div>
    </Link>
  )
}
