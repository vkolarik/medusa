"use server"

import { PageHeader } from "@components/PageHeader"
import { ILink } from "modules/Link"
import Link from "next/link"
import { ProductContainer } from "@components/products/ProductContainer"
import { IProductPreview } from "../../../../../modules/Product"
import { FilterWrapper } from "@components/products/FilterWrapper"
import { notFound } from "next/navigation"
import { getCategoryProductPreviewsByHandle } from "../../../../actions"
import { getCategoriesList, getCategoryByHandle } from "@lib/data"
import { ProductCategoryWithChildren } from "../../../../../aaa-temp/types/global"
import { ProductCategory } from "@medusajs/medusa"
import { getBreadcrumbsForCategory} from "@utils/breadcrumbs"

const ProductCategoryComponent = async ({
                                          params,
                                          searchParams,
                                        }: {
  params: { slug: string[] }
  searchParams: {
    price: string
    sorting: string
    gender: string
    sizes: string
    colors: string
    categories: string
  }
}) => {
  const { product_categories } = await getCategoryByHandle(
    params.slug,
  ).then((product_categories) => product_categories)

  if (!product_categories[0]) {
    notFound()
  }
  const category: ProductCategoryWithChildren = product_categories[0]

  const children: ProductCategory[] = category.category_children

  let categoryProducts: IProductPreview[] | null = await getCategoryProductPreviewsByHandle(params.slug[0])

  const helper = await getCategoriesList()
  const breadcrumbs: ILink[] = await getBreadcrumbsForCategory(category, helper.product_categories)


  return (
    <main className="max-width page w-full">
      <PageHeader
        title={category.name}
        breadcrumbs={breadcrumbs}
      />

      <div className="md:mt-8 mt-5">
        {children && (
          <div className="flex flex-wrap gap-2 w-full border-b border-lightGray pb-4">
            {children.map((childCategory: ProductCategory) => {
              return (
                <Link key={childCategory.id} className="button" href={"/kategorie/" + childCategory.handle}>
                  {childCategory.name}
                </Link>
              )
            })}
          </div>

        )}
      </div>

      <FilterWrapper />

      <ProductContainer data={categoryProducts || []} />

    </main>
  )
}
export default ProductCategoryComponent
