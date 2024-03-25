import { allSizes } from "@data/sizes"
import { IProductSizes } from "modules/Product"
import { FC } from "react"

export const ProductSizes: FC<IProductSizes> = ({ sizes, hidden = false, setSelectedSize, selectedSize }) => {
  const handleSelection = (size: string) => {
    if (!setSelectedSize || !isAvailable(size)) return
    setSelectedSize(size)
  }

  const isAvailable = (size: string) => {
    return sizes.includes(size.toUpperCase())
  }

  return <div className={`${hidden ? "absolute bottom-0 left-0 h-0" : ""} sizes duration-500 w-full bg-white overflow-hidden`}>
  <span className="small semibold uppercase mt-3">velikosti</span>
  <div className="flex flex-wrap gap-1">
    {allSizes.map((size: string, key: number) => {
      return (
        <p
          key={key}
          onClick={() => handleSelection(size)}
          className={`text-center p-0.5 border border-lightGrey leading-none ${
            isAvailable(size)
              ? "text-black"
              : "opacity-75 grey"
          }
    uppercase lg:text-[14px] text-[12px] duration-300
      ${setSelectedSize && isAvailable(size) ? "cursor-pointer hover:bg-blueHover hover:text-white" : ""}
      ${selectedSize === size ? "bg-blue text-white" : ""}`}
        >
          {size}
        </p>
      )
    })}
  </div>
</div>
}