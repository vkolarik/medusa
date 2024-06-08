import { IProductPreview } from "../modules/Product"

export function applyFilter(data: IProductPreview[], getQueryString: Function) {
  // Sorting
  const sorting = getQueryString("sorting")
  if (sorting === "cheapest") {
    data.sort((a, b) => a.price - b.price)
  } else if (sorting === "mostExpensive") {
    data.sort((a, b) => b.price - a.price)
  }

  // Price Range Filtering
  const priceRangeValues = getQueryString("price");
  if (priceRangeValues) {
    const priceRanges = priceRangeValues.split(",");
    data = data.filter((item) => {
      return priceRanges.some((range: string) => {
        const [minPrice, maxPrice] = getPriceRange(range);
        return item.price >= minPrice && item.price <= maxPrice;
      });
    });
  }

  // Size Filtering
  const sizes = getQueryString("sizes")
  if (sizes) {
    const sizeArray = sizes.toLowerCase().split(",")
    data = data.filter((item) => item.variants.some(size => sizeArray.includes(size.title.toLowerCase())))
  }

  return data
}

const getPriceRange = (range: string): number[] => {
  if (range === "1000+") return [1000, Infinity];
  return range.split("-").map(Number);
};