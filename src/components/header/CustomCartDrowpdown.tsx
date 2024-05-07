"use client"

import { Cart, LineItem } from "@medusajs/medusa"
import { useParams } from "next/navigation"
import { formatAmount } from "@lib/util/prices"
import * as ROUTES from "@constants/routes"
import Image from "next/image"
import cartIcon from "../../../public/images/icons/cart.svg"
import Link from "next/link"
import { HeaderCartItem } from "@components/header/HeaderCartItem"

const CustomCartDropdown = ({
                              cart: cartState,
                            }: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const { countryCode } = useParams()

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0


  return (

    <div className="dropdown cursor-pointer relative z-[999]"
    >
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
        {cartState && cartState.items?.length ? (
          <>
            <div className="shadow-2xl bg-white px-4">
            <span className="font-semibold text-center block py-2 text-[16px] border-b border-lightGrey uppercase">
              Váš nákupní košík
            </span>
              <ul className="space-y-2 py-2 max-h-[350px] overflow-y-auto pr-1">
                {cartState.items
                  .sort((a, b) => {
                    return a.created_at > b.created_at ? -1 : 1
                  })
                  .map((item: LineItem, key) => {
                    return (
                      <HeaderCartItem key={key} item={item} price={formatAmount({
                        amount: item.subtotal || 0,
                        region: cartState.region,
                        includeTaxes: false,
                      })} />
                    )
                  })
                }
              </ul>

              <p className="border-t border-lightGrey pt-2 text-right font-semibold">
                Cena celkem: {formatAmount({
                amount: cartState.subtotal || 0,
                region: cartState.region,
                includeTaxes: false,
              }).slice(4, -3).replace(",", "")} Kč
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
          </>
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
    </div>

  )
}

export default CustomCartDropdown
