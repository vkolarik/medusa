import { useAppContext } from "@context/MainContext"
import { storeInStorage } from "@utils/storage"
import { FC } from "react"

export const RemoveIcon: FC<{ itemId: number }> = ({ itemId }) => {
  const { cartProducts, setCartProducts } = useAppContext()

  const removeProduct = () => {
    const filteredProducts = cartProducts.filter(c => c.id !== itemId)
    setCartProducts(filteredProducts)
    storeInStorage("session", "products", filteredProducts)
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