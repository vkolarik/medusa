"use client"

import { Popover, Transition } from "@headlessui/react"
import { Cart, LineItem } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { useParams, usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

import { formatAmount } from "@lib/util/prices"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import * as ROUTES from "@constants/routes"
import Image from "next/image"
import cartIcon from "../../../public/images/icons/cart.svg"
import Link from "next/link"
import { ICartItem } from "../../modules/CartItem"
import { HeaderCartItem } from "@components/header/HeaderCartItem"

const CustomCartDropdown = ({
                              cart: cartState,
                            }: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined,
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const { countryCode } = useParams()

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()

    const timer = setTimeout(close, 5000)

    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }

    open()
  }

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/kosik")) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current])

  return (
    <li className="dropdown cursor-pointer relative z-[999]"
        onMouseEnter={openAndCancel}
        onMouseLeave={close}
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
                  .map((item: LineItem, key: number) => {
                    return (
                      <>
                        <HeaderCartItem key={key} item={item} price={formatAmount({
                          amount: item.subtotal || 0,
                          region: cartState.region,
                          includeTaxes: false,
                        })} />
                      </>
                    )
                  })
                }
              </ul>

              <p className="border-t border-lightGrey pt-2 text-right font-semibold">
                Cena celkem: {formatAmount({
                  amount: cartState.subtotal || 0,
                  region: cartState.region,
                  includeTaxes: false,
                }).slice(4, -3)} Kč
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
    </li>
  )
}

export default CustomCartDropdown
