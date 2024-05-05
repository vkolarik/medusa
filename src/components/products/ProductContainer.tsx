"use client"

import { IProductDetail, IProductPreview } from "modules/Product"
import { FC } from "react"
import { ProductItemPreview } from "./ProductItemPreview"
import { useQuery } from "@utils/useQuery"
import { colorHexArray } from "@data/colors"
import { applyFilter } from "@utils/filter"

export const ProductContainer: FC<{ data: IProductPreview[] }> = ({ data }) => {
  const { getQueryString } = useQuery()

  data = applyFilter(data, getQueryString)

  return (
    <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 md:mt-8 mt-5">
      {data && data.length > 0 ? (data.map((product: IProductPreview, key: number) => {
        return <ProductItemPreview key={key} product={product} />
      })) : (<h1>Tady jsme nic nenašli</h1>)}
    </div>
  )
}
