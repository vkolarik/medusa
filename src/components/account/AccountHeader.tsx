"use client"

import { accountLinks } from "@data/accountLinks";
import { ILink } from "modules/Link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const AccountHeader: FC = () => {
  const path = usePathname()
  
  return (
    <ul className="w-full flex">
      {accountLinks.map((link: ILink, key: number) => {
        const { text, route } = link
        return <Link key={key}
          className={`${path.includes(route) ? "border-blue text-black" : "border-lightGrey text-grey hover:text-black hover:border-black"}
          w-full text-center duration-300 border-b  p-2 lg:text-[18px] md:text-[15px] text-[14px] font-medium`}
          href={route}>{text}</Link>
      })}
    </ul>
  )
}
