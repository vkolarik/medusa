import { FC } from "react"

export const ColorCircle: FC<{ color: string }> = ({ color }) => {
  return <span className="w-3 h-3 block rounded-full border border-grey"
    style={{ backgroundColor: `${color}` }} />
}
