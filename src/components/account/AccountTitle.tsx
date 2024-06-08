"use client"

import { FC } from "react"

export const AccountTitle: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="lg:my-16 md:my-12 my-10">
      <h1 className="uppercase font-medium lg:text-[28px] md:text-[24px] text-[19px]">
        {title}
      </h1>
      <h2 className="font-medum text-grey lg:text-[17px] md:text-[16px] text-[14px] mt-1">
        {subtitle}
      </h2>
    </div>
  )
}
