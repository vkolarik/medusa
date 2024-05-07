"use client"

import { FC, Suspense, useEffect, useState } from "react"
import Link from "next/link"
import logo from "../../../public/images/logo.svg"
import Image from "next/image"
import user from "../../../public/images/icons/user.svg"
import { mainLinks } from "@data/links"
import { IHeaderDropdown, ILink } from "modules/Link"
import { FaAngleDown } from "react-icons/fa"
import { HeaderCart } from "./HeaderCart"
import * as ROUTES from "../../constants/routes"
import { BurgerIcon } from "./HamburgerIcon"
import { SearchForm } from "./SearchForm"
import { MobileMenu } from "./MobileMenu"
import { signOut } from "@modules/account/actions"
import { Cart, Customer } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import CustomCartDropdown from "@components/header/CustomCartDrowpdown"
import { useFormState } from "react-dom"
import { getCartAction, getCustomerAction } from "../../app/actions"
import { useAppContext } from "@context/MainContext"

type Props = {
  customer: Omit<Customer, "password_hash"> | null
  startCart: null | Omit<Cart, "refundable_amount" | "refunded_total">
}

export const Header: FC<Props> = ({ customer, startCart }) => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false)
  const { updated, setUpdated } = useAppContext()

  const [cart, dispatchCart] = useFormState(
    () => getCartAction(),
    startCart
  )

  useEffect(() => {
    dispatchCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setUpdated(false)
  }, [updated])


  const handleLogout = () => {
    signOut()
    customer = null
  }

  return (
    <div className="header-wrapper md:border-b border-lightGrey z-50 bg-white fixed top-0 left-0 w-full">
      <header className="flex justify-between items-center max-width py-2 relative z-50 bg-white">
        <div className="flex items-center 2xl:gap-24 xl:gap-16 gap-12">
          <Link href={ROUTES.HOME} className="logo-container">
            <Image
              src={logo.src}
              alt="Trend Trove - logo"
              layout="fill"
              objectFit="fill"
              loading="lazy"
            />
          </Link>

          <ul className="2xl:gap-12 gap-6 items-center lg:flex hidden">
            {mainLinks.map((item: IHeaderDropdown, itemKey: number) => {
              const { text, route, links } = item
              return (
                <li
                  key={itemKey}
                  className="dropdown cursor-pointer inline-block uppercase xl:text-[18px] text-[16px] font-bold"
                >
                  <Link href={route!} className="dropdown__text relative">{text}</Link>
                  {links.length > 0 && <FaAngleDown className="inline text-black 2xl:ml-2 ml-1" />}
                  <div className="dropdown__content hidden absolute z-10 min-w-[160px] pt-5 duration-300">
                    <ul className="shadow-2xl bg-white px-4 space-y-2 py-2">
                      {links.map((link: ILink, linkKey: number) => {
                        const { text, route } = link
                        return (
                          <li
                            key={linkKey}
                            className="xl:text-[15px] text-[14px] duration-300"
                          >
                            <Link href={route}>{text}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex items-center 2xl:gap-16 xl:gap-12 lg:gap-8 gap-4">
          <div className="md:block hidden">
            <SearchForm />
          </div>

          <ul className="flex items-center lg:gap-5 gap-3">
            <li className="dropdown relative cursor-pointer z-[999]">
              <Image
                src={user.src}
                alt="Trend Trove - uživatel"
                width={25}
                height={25}
                loading="lazy"
              />
              <div className="dropdown__content hidden absolute right-0 z-10 min-w-[160px] lg:pt-5 duration-300">
                <ul className="shadow-2xl bg-white px-4 space-y-2 py-2">
                  {customer ? (
                    <>
                      <li className={`text-[15px] duration-300 font-semibold`}>
                        <Link href={"/ucet/objednavky"}>{customer.first_name + " " + customer.last_name}</Link>
                      </li>
                      <li className={`text-[15px] duration-300`}>
                        <a onClick={handleLogout}>Odhlásit</a>
                      </li>
                    </>


                  ) : (
                    <>
                      <li className={`text-[15px] duration-300`}>
                        <Link href={"/prihlaseni"}>Přihlášení</Link>
                      </li>
                      <li className={`text-[15px] duration-300`}>
                        <Link href={"/registrace"}>Registrace</Link>
                      </li>
                    </>

                  )}
                </ul>
              </div>
            </li>


            <Suspense fallback={<p>Loading</p>}>
              <CustomCartDropdown cart={cart} />
            </Suspense>



            {/*<HeaderCart />*/}

            <div className="lg:hidden block">
              <BurgerIcon
                active={mobileMenuActive}
                setActive={setMobileMenuActive}
              />
            </div>
          </ul>
        </div>
      </header>

      <div className="max-width md:hidden block z-10 bg-white relative border-b border-lightGrey pt-2">
        <SearchForm />
      </div>

      <MobileMenu active={mobileMenuActive} setActive={setMobileMenuActive} />
    </div>
  )
}
