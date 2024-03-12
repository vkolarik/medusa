import { NextPage } from "next"
import Link from "next/link"
import * as ROUTES from "@constants/routes"
import { FaArrowLeft } from "react-icons/fa"

const NotFoundPage: NextPage = () => {
  return (
    <div className="max-width">
      <div className="sm:p-8 px-2 py-4 mx-auto flex justify-center items-center shadow-2xl lg:w-max">
        <h1 className="md:p-5 px-3 py-5 border-r-2 border-blue lg:text-[56px] md:text-[48px] text-[35px]">
          404
        </h1>
        <div className="md:p-5 px-3 py-5">
          <h2 className="lg:text-[25px] md:text-[23px] text-[18px] font-semibold leading-1">
            Litujeme!
          </h2>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] md:mb-5 mb-2">
            Stránka, kterou hledáte, neexistuje
          </p>
          <Link href={ROUTES.HOME} className="button w-max">
            <FaArrowLeft className="fill-white inline-block mr-2" />
            Úvodní strana
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
