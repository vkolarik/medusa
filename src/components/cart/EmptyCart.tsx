import Link from "next/link"
import * as ROUTES from "@constants/routes"
import { FC } from "react"
import image from "../../../public/images/empty-cart.png"
import Image from "next/image"

export const EmptyCart: FC = () => {
  return (
    <div className="max-width">
      <div className="sm:p-8 px-2 py-4 mx-auto flex justify-center items-center shadow-2xl lg:w-max">
        <div className="md:p-5 px-3 py-5 text-center">
          <Image src={image.src}
            width={150}
            height={150}
            alt="Trend trove - prádný košík"
            className="mx-auto md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] object-contain"/>
          
          <h1 className="md:my-6 my-2 lg:text-[25px] md:text-[23px] text-[20px] font-semibold leading-1">
            Váš košík je prázdný
          </h1>

          <Link href={ROUTES.HOME} className="button w-max mx-auto">
            Jít nakupovat
          </Link>
        </div>
      </div>
    </div>
  )
}

