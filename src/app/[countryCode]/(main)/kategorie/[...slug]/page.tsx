"use client"
import { PageHeader } from "@components/PageHeader"
import { ILink } from "modules/Link"
import { categoriesData } from "@data/categories"
import { ICategory } from "modules/Category"
import Link from "next/link"
import { productsPreviewData } from "@data/products"
import { ProductContainer } from "@components/products/ProductContainer"
import { FilterButton } from "@components/products/FilterButton"
import { useState } from "react"
import { Filter } from "@components/products/Filter"
const ProductCategory = ({ params }: { params: { slug: string } }) => {
  const activeCategory: ICategory = categoriesData.find(
    (c) => c.route === `/kategorie/${params.slug[0]}`
  ) as ICategory
  let activeSubCategory: ICategory | null = null
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false)
  if (params.slug.length > 1 && activeCategory.data) {
    activeSubCategory = activeCategory.data.find(
      (c) =>
        c.route ===
        `${activeCategory.route}/${params.slug[params.slug.length - 1]}`
    ) as ICategory
  }
  const breadcrumbs: ILink[] = [
    {
      text: activeCategory?.title,
      route: activeCategory?.route,
    },
  ]
  if (activeSubCategory) {
    breadcrumbs.push({
      text: activeSubCategory?.title,
      route: activeSubCategory?.route,
    })
  }
  return (
    <main className="max-width page w-full">
      <Filter isActive={filterIsActive} setIsActive={setFilterIsActive} />
      <PageHeader
        title={activeSubCategory?.title ?? activeCategory?.title}
        breadcrumbs={breadcrumbs}
      />

      <div className="md:mt-8 mt-5">
        {params.slug.length === 1 && (
          <div className="flex flex-wrap gap-2 w-full border-b border-lightGray pb-4">
            {activeCategory?.data?.map((item: ICategory, key: number) => {
              const { title, route } = item
              return (
                <Link key={key} className="button" href={route}>
                  {title}
                </Link>
              )
            })}
          </div>
        )}
        <FilterButton
          isActive={filterIsActive}
          setIsActive={setFilterIsActive}
        />
        <ProductContainer data={productsPreviewData} />
      </div>
    </main>
  )
}
export default ProductCategory