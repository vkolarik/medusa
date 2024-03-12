"use client"
import { Dispatch, FC, SetStateAction } from "react"
import Image from "next/image"
import filterIcon from "../../../public/images/icons/filter.svg"

export const FilterButton: FC<{
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}> = ({ isActive, setIsActive }) => {
  const handleActiveFilter = () => {
    setIsActive(!isActive)
  }

  return (
    <button
      className="button button--light button--filter mt-4 flex items-center gap-x-2"
      onClick={() => handleActiveFilter()}
    >
      <Image
        src={filterIcon.src}
        alt="Trend Trove - filtr"
        width={20}
        height={20}
      />
      Filtrovat
    </button>
  )
}
