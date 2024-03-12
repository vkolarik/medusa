import { Dispatch, FC, SetStateAction, useState } from "react"
import { mainLinks } from "@data/links"
import { IHeaderDropdown, ILink } from "modules/Link"
import { FaAngleDown } from "react-icons/fa"
import Link from "next/link"

export const MobileMenu: FC<{
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}> = ({ active, setActive }) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)

  const toggleSubmenu = (index: number | null) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  return (
    <div
      className={`mobileMenu-wrapper w-full ${
        active ? "mobileMenu-wrapper-active" : ""
      } lg:hidden block bg-white`}
    >
      <div className="mobileMenu bg-white">
        <ul className="h-full items-center">
          {mainLinks.map((item: IHeaderDropdown, itemKey: number) => {
            const { text, links } = item
            return (
              <li key={itemKey} className="text-center gap-3 h-full relative">
                <div className="flex justify-between py-2 md:px-12 px-6 duration-350">
                  {text}
                  <FaAngleDown
                    className={`inline text-black 2xl:ml-2 ml-1 duration-350 ${
                      openSubmenu === itemKey ? "rotate-180" : ""
                    }`}
                    onClick={() => toggleSubmenu(itemKey)}
                  />
                </div>

                <ul
                  className={`sub-menu flex flex-col justify-items-stretch duration-350 ${
                    openSubmenu === itemKey ? "sub-menu-active" : ""
                  }`}
                >
                  {links.map((link: ILink, linkKey: number) => {
                    const { text, route } = link
                    return (
                      <li key={linkKey}>
                        <Link href={route}>{text}</Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
