"use client"

import { NextPage } from "next"
import Link from "next/link"
import * as ROUTES from "@constants/routes"
import { FaArrowLeft } from "react-icons/fa"
import { useAppContext } from "@context/MainContext"

const ThankYouPage: NextPage = () => {
  const { updated, setUpdated } = useAppContext()
  setUpdated(true)
  return (
    <main className="max-width">
      <div className="sm:p-8 px-2 py-4 mx-auto flex justify-center items-center shadow-2xl lg:w-max">
        <div className="md:p-5 px-3 py-5">
          <h2 className="lg:text-[25px] md:text-[23px] text-[18px] font-semibold leading-1">
            Děkujeme za objednávku!
          </h2>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] md:mb-5 mb-2">
            Všechno pro Vás nachystáme a doručíme co nejdříve.
          </p>
          <Link href={ROUTES.HOME} className="button w-max">
            Pokračovat v nákupech
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ThankYouPage
