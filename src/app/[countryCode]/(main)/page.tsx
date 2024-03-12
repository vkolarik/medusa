import { categoriesData } from "@data/categories"
import { ICategory } from "@interfaces/Category"
import Link from "next/link"

export default function Home() {
  return (
    <main className="page flex lg:flex-row flex-col 2xl:gap-6 md:gap-4 gap-3 max-width w-full">
      {categoriesData.map((item: ICategory, key: number) => {
        const { title, route, image } = item
        return (
          <Link key={key} href={route} className="w-full">
            <div className="category-card w-full 2xl:h-[40rem] xl:h-[35rem] lg:h-[30rem] sm:h-[20rem] h-[15rem] block relative">
              <div
                className="w-full bg-no-repeat bg-center bg-cover h-full relative flex items-end"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="category-card__bg absolute w-full h-full bg-black opacity-50 duration-300" />
                <div className="lg:p-8 p-5 relative z-10">
                  <h1 className="uppercase font-medium lg:text-[35px] md:text-[30px] text-[25px] text-white">
                    {title}
                  </h1>
                  <button className="button button--bordered mt-2">
                    Zobrazit
                  </button>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </main>
  )
}
