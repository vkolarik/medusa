import { ProductCategory } from "@medusajs/medusa";
import { CategoriesProps, ProductCategoryWithChildren } from "modules/Category";
import { notFound } from "next/navigation";
import { ILink } from "modules/Link";
import { cache } from "react";
import { getCategoryProductPreviewsByHandle } from "./actions";
import { getBreadcrumbsForCategory } from "./breadcrumbs";
import { medusaClient } from "@utils/config";

export const getCategoriesData = async (slug: string[]) : Promise<CategoriesProps> => {
  const { product_categories } = await getCategoryByHandle(slug).then((product_categories) => product_categories);
  
  if (!product_categories[0]) {
    notFound();
  }
  
  const category: ProductCategoryWithChildren = product_categories[0];
  const categoryProducts = await getCategoryProductPreviewsByHandle(slug[0]);
  const categoryChildren: ProductCategory[] = category.category_children
  
  const helper = await getCategoriesList();
  const breadcrumbs: ILink[] = await getBreadcrumbsForCategory(category, helper.product_categories);

  return {
    category,
    categoryProducts,
    categoryChildren,
    breadcrumbs
  };
};

export const getCategoriesList = cache(async function (
  offset: number = 0,
  limit: number = 100
): Promise<{
  product_categories: ProductCategoryWithChildren[]
  count: number
}> {
  const { product_categories, count } = await medusaClient.productCategories
    .list({ limit, offset }, { next: { tags: ["categories"] } })
    .catch((err) => {
      throw err
    })

  return {
    product_categories,
    count,
  }
})

export const getCategoryByHandle = cache(async function (
  categoryHandle: string[]
): Promise<{
  product_categories: ProductCategoryWithChildren[]
}> {
  const handles = categoryHandle.map((handle: string, index: number) =>
    categoryHandle.slice(0, index + 1).join("/")
  )

  const product_categories = [] as ProductCategoryWithChildren[]

  for (const handle of handles) {
    const category = await medusaClient.productCategories
      .list(
        {
          handle: handle,
        },
        {
          next: {
            tags: ["categories"],
          },
        }
      )
      .then(({ product_categories: { [0]: category } }) => category)
      .catch((err) => {
        return {} as ProductCategory
      })

    product_categories.push(category)
  }

  return {
    product_categories,
  }
})