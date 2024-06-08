"use client"

import { CategoryPreviewProps } from "modules/Category"
import Link from "next/link"
import { FC } from "react"

const CategoryPreview: FC<CategoryPreviewProps> = ({
  link, linkClassName, backgroundImage, title, sizes
}) => {
  return (
    <Link
      href={link}
      className={linkClassName}
    >
      <div className={`category-card w-full ${sizes} block relative`}>
        <div
          className="w-full bg-no-repeat bg-center bg-cover h-full relative flex items-end"
          style={{
            backgroundImage: backgroundImage,
          }}
        >
          <div className="category-card__bg absolute w-full h-full bg-black opacity-50 duration-300" />
          <div className="lg:p-8 p-5 relative z-10">
            <h1 className="uppercase font-medium lg:text-[35px] md:text-[30px] text-[25px] text-white">
              {title}
            </h1>
            <button className="button button--bordered mt-2">Zobrazit</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryPreview
