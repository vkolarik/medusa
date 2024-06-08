"use server"

import { PageHeader } from "@components/PageHeader"
import { ProductContainer } from "@components/products/ProductContainer"
import { FilterWrapper } from "@components/products/FilterWrapper"
import { ProductCategory } from "@medusajs/medusa"
import { categoriesData } from "@data/categories"
import CategoryPreview from "@components/products/CategoryPreview"
import { getCategoriesData } from "@utils/apiActions/getCategoriesData"

const ProductCategoryComponent = async ({
  params,
}: {
  params: { slug: string[] }
}) => {
  const data = await getCategoriesData(params.slug)

  return (
    <main className="max-width page w-full">
      {data && (
        <>
          <PageHeader
            title={data.category.name}
            breadcrumbs={data.breadcrumbs}
          />

          <div className="md:mt-8 mt-5 border-t border-lightGray pt-8">
            {data.categoryChildren && (
              <div className="xl:flex grid md:grid-cols-2 grid-cols-1 xl:gap-0 md:gap-4 gap-2 flex-wrap w-full">
                {data.categoryChildren.map((childCategory: ProductCategory, index: number) => (
                  <CategoryPreview
                    key={index}
                    link={"/kategorie/" + childCategory.handle}
                    linkClassName={`${index != data.categoryChildren.length -1 ? "xl:pr-4 pr-0" : ""} xl:w-1/4 w-full`}
                    sizes="2xl:h-[30rem] xl:h-[25rem] lg:h-[20rem] sm:h-[15rem] h-[13rem]"
                    backgroundImage={`url(${categoriesData.find(c => c.route === "/kategorie/" + params.slug)?.image})`}
                    title={childCategory.name}
                  />
                ))}
              </div>
            )}
          </div>

          {/* productContainer contains ProductPreviews, Filter and NoData component => display this element when 
              1) category has products => products and filter will be displayed
              2) category has neither subcategories nor products => NoData component will be displayed
          */}
          {data.categoryProducts && (data.categoryProducts.length > 0 || data.categoryChildren.length === 0) && (
            <>
              <FilterWrapper />
              <ProductContainer data={data.categoryProducts || []} />
            </>
          )}
        </>
      )}
    </main>
  )
}

export default ProductCategoryComponent
