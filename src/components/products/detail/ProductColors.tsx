
import { ColorCircle } from "@components/cart/ColorCircle"
import { allColorsHex } from "@data/colors"
import { IProductColors } from "modules/Product"
import { FC } from "react"

export const ProductColors: FC<IProductColors> = ({ colors, setSelectedColor, selectedColor }) => {
  const handleSelection = (color: string) => {
    if (!isAvailable(color)) return
    setSelectedColor(color)
  }

  const isAvailable = (color: string) => {
    return colors.includes(color.toUpperCase())
  }

  return <div className="duration-500 w-full bg-white overflow-hidden">
  <span className="small semibold uppercase mt-3">barvy</span>
  <div className="flex flex-wrap">
    {allColorsHex.map((color: string, key: number) => {
      return (
        <div key={key}
          onClick={() => handleSelection(color)}
          className={`${isAvailable(color) ? "cursor-pointer" : "opacity-25"} ${selectedColor === color ? "border-black" : "border-transparent"} rounded-full duration-500 border p-0.5`}>
          <ColorCircle color={color} />
        </div>
      )
    })}
  </div>
</div>
}
