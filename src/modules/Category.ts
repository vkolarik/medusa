import { ProductCategory } from "@medusajs/medusa"
import { ILink } from "./Link"
import { IProductPreview } from "./Product"

export interface ICategory {
  id: number
  title: string
  route: string
  image: string
  data?: ICategory[]
}

export type ProductCategoryWithChildren = Omit<
  ProductCategory,
  "category_children"
> & {
  category_children: ProductCategory[]
  category_parent?: ProductCategory
}

export interface CategoriesProps {
  category: ProductCategoryWithChildren
  categoryProducts: IProductPreview[] | null
  categoryChildren: ProductCategory[]
  breadcrumbs: ILink[]
}

export interface CategoryPreviewProps {
  link: string
  linkClassName: string
  backgroundImage: string
  title: string
  sizes: string
}
