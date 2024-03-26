import { FC } from "react"

export const ColorCircle: FC<{ color: string }> = ({ color }) => {
  return (
    <span
      className="w-4 h-4 block rounded-full border border-grey"
      style={{ backgroundColor: `${color}` }}
    />
  )
}
