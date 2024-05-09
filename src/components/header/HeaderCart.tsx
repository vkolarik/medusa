import { FC } from "react"
import Image from "next/image"
import cartIcon from "../../../public/images/icons/cart.svg"
import Link from "next/link"
import * as ROUTES from "@constants/routes"
import { useAppContext } from "@context/MainContext"
import { calculateTotalPrice } from "@utils/totalPrice"

export const HeaderCart: FC = () => {
  const { cartProducts } = useAppContext()

  const totalPrice = calculateTotalPrice(cartProducts)

  // Calculate the total number of items in the cart, summing the amounts of each product.
  // If the 'amount' property is not defined, default to 1.
  const totalItems = cartProducts.reduce((sum, product) => {
    return sum + (product.amount || 1)
  }, 0)

  // TODO: updatni ukazany pocet polozek v kosiku po kazdem pridani do kosiku

  return (
    <li className="dropdown cursor-pointer relative z-[999]">
      <Link className="cart-icon" href={ROUTES.CART} data-items={totalItems}>
        <Image
          src={cartIcon.src}
          alt="Trend Trove - Košík"
          width={25}
          height={25}
          loading="lazy"
        />
      </Link>
      <div className="dropdown__content hidden absolute right-0 z-50 min-w-[300px] lg:pt-5 duration-300">
        {cartProducts.length > 0 ? (
          <div className="shadow-2xl bg-white px-4">
            <span className="font-semibold text-center block py-2 text-[16px] border-b border-lightGrey uppercase">
              Váš nákupní košík
            </span>
            <ul className="space-y-2 py-2 max-h-[350px] overflow-y-auto pr-1">
              {/* TODO: get items from session */}
              {/*{cartProducts.map((item: ICartItem, key: number) => {*/}
              {/*  return <HeaderCartItem key={key} item={item} />*/}
              {/*})}*/}
            </ul>

            <p className="border-t border-lightGrey pt-2 text-right font-semibold">
              Cena celkem: {totalPrice} Kč
            </p>
            <div className="text-center pt-3 pb-5">
              <Link
                className="button button--small button--cart block"
                href={ROUTES.CART}
              >
                Přejít do košíku
              </Link>
            </div>
          </div>
        ) : (
          <div className="shadow-2xl bg-white px-4">
            <span className="font-semibold text-center block py-2 text-[16px] border-b border-lightGrey uppercase">
              Váš nákupní košík je prázdný
            </span>
            <div className="text-center pt-3 pb-5">
              <Link
                className="button button--small button--cart block"
                href={ROUTES.HOME}
              >
                Jít nakupovat
              </Link>
            </div>
          </div>
        )}
      </div>
    </li>
  )
}
