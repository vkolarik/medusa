"use client"
import Image from "next/image"
import { NextPage } from "next"
import * as ROUTES from "@constants/routes"
import Link from "next/link"
import image from "../../../../../public/images/icons/logout.svg"

const LogOut: NextPage = () => {
  return (
    <main className="page max-width w-full">
      <div className="sm:p-8 px-2 py-4 mx-auto flex justify-center items-center shadow-2xl lg:w-max">
        <div className="md:p-5 px-3 py-5 text-center">
          <Image
            src={image.src}
            width={100}
            height={100}
            alt="Trend trove - odhlášení"
            loading="lazy"
            className="mx-auto md:w-[8rem] md:h-[8rem] w-[6rem] h-[6rem] object-contain"
          />

          <h1 className="md:my-6 my-2 lg:text-[25px] md:text-[23px] text-[20px] font-semibold leading-1">
            Odhlášení bylo úspěšné
          </h1>
          <Link href={ROUTES.HOME} className="button w-max mx-auto">
            Úvodní strana
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LogOut
