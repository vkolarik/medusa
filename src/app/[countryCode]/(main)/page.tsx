import CategoryPreview from "@components/products/CategoryPreview"
import { categoriesData } from "@data/categories"
import { ICategory } from "modules/Category"

export default function Home() {
  return (
    <main className="page flex lg:flex-row flex-col 2xl:gap-6 md:gap-4 gap-3 max-width w-full">
      {categoriesData.map((item: ICategory, key: number) => {
        const { title, route, image } = item
        return (
          <CategoryPreview
            key={key}
            link={route}
            linkClassName="w-full"
            backgroundImage={`url(${image})`}
            sizes="2xl:h-[40rem] xl:h-[35rem] lg:h-[30rem] sm:h-[20rem] h-[15rem]"
            title={title}
          />
        )
      })}
    </main>
  )
}
