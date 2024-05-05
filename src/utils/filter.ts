import { IProductPreview } from "../modules/Product"
import { colorHexArray } from "@data/colors"

export function applyFilter(data: IProductPreview[], getQueryString: Function) {
  // Sorting
  const sorting = getQueryString("sorting")
  if (sorting === "cheapest") {
    data.sort((a, b) => a.price - b.price)
  } else if (sorting === "mostExpensive") {
    data.sort((a, b) => b.price - a.price)
  }

  // Price Range Filtering
  const priceRange = getQueryString("price")
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split("-").map(Number)
    data = data.filter((item) => item.price >= minPrice && item.price <= maxPrice)
  }

  // Color Filtering
  const colors = getQueryString("colors")
  if (colors) {
    const colorArray = colors.toLowerCase().split(",")
    // @ts-ignore
    const hexColorArray = colorArray.map(colorName => {
      const colorObject = colorHexArray.find(colorObj => colorObj.color.toLowerCase() === colorName)
      return colorObject ? colorObject.hex : null
    })
    data = data.filter((item) => item.colors.some(color => hexColorArray.includes(color)))
  }

  // Size Filtering
  const sizes = getQueryString("sizes")
  if (sizes) {
    const sizeArray = sizes.toLowerCase().split(",")
    data = data.filter((item) => item.sizes.some(size => sizeArray.includes(size.toLowerCase())))
  }

  return data
}