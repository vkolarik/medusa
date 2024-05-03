import { IProductDetail } from "../modules/Product"
import { ILink } from "../modules/Link"
import { ProductCategoryWithChildren } from "../aaa-temp/types/global"

export async function getBreadcrumbs(activeProduct: IProductDetail, productCategories: ProductCategoryWithChildren[]): Promise<ILink[]> {
  if (!activeProduct.categories || activeProduct.categories.length === 0) {
    return [{ text: "Nezařazeno", route: "#" }];
  }

  const breadcrumbs: ILink[] = [];

  // Helper function to find a category by its ID
  function findCategoryById(id: string): ProductCategoryWithChildren | undefined {
    return productCategories.find(category => category.id === id);
  }

  // Iterate through each category in the product's categories
  for (const category of activeProduct.categories) {
    // If rank is greater than 1, it's a nested category
    if (category.rank > 1) {
      let parentId: string | null = category.parent_category_id;
      // Keep track of already added categories to avoid duplicates
      const addedCategories: Set<string> = new Set();

      // Keep adding parent categories until reaching the top-level category (rank 1)
      while (parentId) {
        const parentCategory = findCategoryById(parentId);
        if (parentCategory && !addedCategories.has(parentCategory.id)) {
          breadcrumbs.unshift({ text: parentCategory.name, route: parentCategory.handle });
          addedCategories.add(parentCategory.id);
          parentId = parentCategory.parent_category_id;
        } else {
          break;
        }
      }
    }

    // Add the current category to breadcrumbs if it's not already added
    if (!breadcrumbs.some(crumb => crumb.text === category.name)) {
      breadcrumbs.push({ text: category.name, route: category.handle });
    }
  }

  return breadcrumbs;
}