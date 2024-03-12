"use client"

import { FC, useState } from "react"
import Link from "next/link"
import logo from "../../../public/images/logo.svg"
import Image from "next/image"
import user from "../../../public/images/icons/user.svg"
import { userLinks, mainLinks } from "@data/links"
import { IHeaderDropdown, ILink } from "modules/Link"
import { FaAngleDown } from "react-icons/fa"
import { HeaderCart } from "./HeaderCart"
import * as ROUTES from "../../constants/routes"
import { BurgerIcon } from "./HamburgerIcon"
import { SearchForm } from "./SearchForm"
import { MobileMenu } from "./MobileMenu"

export const Header: FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false)

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
            />
          </Link>

          <ul className="2xl:gap-12 gap-6 items-center lg:flex hidden">
            {mainLinks.map((item: IHeaderDropdown, itemKey: number) => {
              const { text, links } = item
              return (
                <li
                  key={itemKey}
                  className="dropdown cursor-pointer inline-block uppercase xl:text-[18px] text-[16px] font-bold"
                >
                  <span className="dropdown__text relative">{text}</span>
                  <FaAngleDown className="inline text-black 2xl:ml-2 ml-1" />
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
              />
              <div className="dropdown__content hidden absolute right-0 z-10 min-w-[160px] lg:pt-5 duration-300">
                <ul className="shadow-2xl bg-white px-4 space-y-2 py-2">
                  {userLinks.links.map((link: ILink, key: number) => {
                    const { text, route } = link
                    return (
                      <li
                        className={`text-[15px] duration-300 ${
                          key === 0 ? "font-semibold" : ""
                        }`}
                        key={key}
                      >
                        <Link href={route}>{text}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>

            <HeaderCart />

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
