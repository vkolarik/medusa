import { removeItem } from "@utils/apiActions/cart"
import { Dispatch, FC, SetStateAction } from "react"

export const RemoveIcon: FC<{
  cartId: string
  lineId: string
  setLoading: Dispatch<SetStateAction<boolean>>
  setUpdated?: () => void
}> = ({ cartId, lineId, setLoading, setUpdated }) => {

  const removeProduct = () => {
    setLoading(true)
    removeItem({
      cartId,
      lineId
    })
    if (setUpdated) setUpdated()
    setLoading(false)
  }

  return (
    <svg
      onClick={() => removeProduct()}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
