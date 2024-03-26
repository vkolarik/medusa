"use client"

import {
  IProductDetailModalHeader,
  ProductDetailModalState,
} from "modules/Product"
import { FC } from "react"

export const ProductDetailModalHeader: FC<IProductDetailModalHeader> = ({
  setState,
  state,
}) => {
  const data = [
    {
      state: ProductDetailModalState.CALCULATOR,
      text: "Výpočet velikosti",
    },
    {
      state: ProductDetailModalState.TABLE,
      text: "Tabulka velikostí",
    },
  ]

  return (
    <ul className="w-full flex">
      {data.map((item, index: number) => {
        return (
          <li
            key={index}
            onClick={() => setState(item.state)}
            className={`${
              state === item.state
                ? "border-blue text-black"
                : "border-lightGrey text-grey hover:text-black hover:border-black"
            }
          w-full text-center duration-300 border-b  p-2 lg:text-[18px] md:text-[15px] text-[14px] font-medium cursor-pointer`}
          >
            {item.text}
          </li>
        )
      })}
    </ul>
  )
}
