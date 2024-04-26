"use client"
import { FC, useState } from "react"
import { FilterButton } from "@components/products/FilterButton"
import { Filter } from "@components/products/Filter"

type Props = {}

export const FilterWrapper: FC<Props> = ({}) => {
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false)

  return (
    <>

      <Filter isActive={filterIsActive} setIsActive={setFilterIsActive} />
      <FilterButton
        isActive={filterIsActive}
        setIsActive={setFilterIsActive}
      />

    </>
  )
}
