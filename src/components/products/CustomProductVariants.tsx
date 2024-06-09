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
    createQueryString("variant", size)
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
              className={`text-center p-0.5 border border-lightGrey leading-none text-black uppercase lg:text-[14px]
                 text-[12px] duration-300 ${!hidden ? "cursor-pointer hover:bg-blueHover hover:text-white" : ""}
                 ${
                   getQueryString("variant") === variant?.title && !hidden
                     ? "bg-blue text-white"
                     : ""
                 }`}
            >
              {variant.title}
            </p>
          )
        })}
      </div>
    </div>
  )
}
