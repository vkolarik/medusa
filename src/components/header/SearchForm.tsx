"use client"

import { FC } from "react"
import Image from "next/image"
import search from "../../../public/images/icons/search.svg"
import { useForm } from "react-hook-form"

export const SearchForm: FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit: any = async (data: { text: string | null }, e: Event) => {
    console.log(data)
  }

  return (
    <form
      className="rounded-xl border border-grey xl:w-[20rem] lg:w-[15rem] md:w-[13rem] w-full relative flex py-1 lg:px-4 px-2 lg:mb-0 mb-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="w-full relative outline-none pr-4 xl:text-[16px] lg:text-[14px] text-[13px]"
        placeholder="Vyhledejte produkt..."
        {...register("text")}
      />
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        <Image
          src={search.src}
          alt="Trend Trove - hledat"
          className="w-max object-contain cursor-pointer"
          width={15}
          height={15}
        />
      </button>
    </form>
  )
}
