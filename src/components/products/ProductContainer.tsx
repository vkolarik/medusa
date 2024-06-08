"use client"

import { IProductPreview } from "modules/Product"
import { FC, useEffect, useState } from "react"
import { ProductItemPreview } from "./ProductItemPreview"
import { useQuery } from "@utils/useQuery"
import { applyFilter } from "@utils/filter"
import { NoData } from "@components/NoData"

export const ProductContainer: FC<{ data: IProductPreview[] }> = ({ data }) => {
  const { getQueryString } = useQuery()
  const [noDataSubtitle, setNoDataSubtitle] = useState<string | undefined>(undefined)

  data = applyFilter(data, getQueryString)

  useEffect(() => {
    if (getQueryString("sizes") || getQueryString("price")) {
      setNoDataSubtitle("Změnte vyhledávací dotaz")
    } else {
      setNoDataSubtitle(undefined)
    }
  }, [getQueryString])

  return (
    <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 md:mt-8 mt-5 md:min-h-[20rem] min-h-[12rem] relative">
      {data && data.length > 0 ? (data.map((product: IProductPreview, key: number) => {
        return <ProductItemPreview key={key} product={product} />
      })) : (
        <NoData subtitle={noDataSubtitle} />
      )}
    </div>
  )
}
