import { allSizes } from "@data/sizes"
import { IProductVariants, IProductVariant } from "modules/Product"
import { FC } from "react"
import { useQuery } from "@utils/useQuery"

export const CustomProductVariants: FC<IProductVariants> = ({
                                                              variants,
                                                              hidden = false,
                                                            }) => {

  const { getQueryString, createQueryString } = useQuery()
  if (!variants) return null

  const handleSelection = (size: string) => {
    if (!isAvailable(size)) return
    createQueryString("variant", size)
  }

  const isAvailable = (variant: string) => {
    // if (!variants) return false
    // //console.log("size "+size+", variants "+variants)
    // return variants.some((variant: IProductVariant) => variant.title.toUpperCase() === size.toUpperCase())
    return true
  }

  return (
    <div
      className={`${
        hidden ? "absolute bottom-0 left-0 h-0" : ""
      } sizes duration-500 w-full bg-white overflow-hidden`}
    >
      <span className="small semibold uppercase mt-3">VARIANTY</span>
      <div className="flex flex-wrap gap-1">
        {variants.map((variant: IProductVariant, key: number) => {
          return (
            <p
              key={key}
              onClick={() => handleSelection(variant.title)}
              className={`text-center p-0.5 border border-lightGrey leading-none ${
                isAvailable(variant.title) ? "text-black" : "opacity-75 grey"
              }
uppercase lg:text-[14px] text-[12px] duration-300
  ${isAvailable(variant.title)
                ? "cursor-pointer hover:bg-blueHover hover:text-white"
                : ""
              }
  ${getQueryString("variant") === variant.title ? "bg-blue text-white" : ""}`}
            >
              {variant.title}
            </p>
          )
        })}
      </div>
    </div>
  )
}