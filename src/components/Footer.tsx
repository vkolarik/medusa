import { FC } from "react"
import Image from "next/image"
import logo from "../../public/images/logo.svg"
import Link from "next/link"
import * as ROUTES from "../constants/routes"
import { documentsLinks, mainLinks, socialsLinks } from "@data/links"
import { IHeaderDropdown, ILink, ISocialLink } from "modules/Link"

export const Footer: FC = () => {
  return (
    <footer className="border-t border-lightGrey">
      <div className="max-width flex justify-between items-center gap-5 py-3 lg:flex-row flex-col">
        <Link href={ROUTES.HOME} className="footer__logo lg:hidden block">
          <Image
            src={logo.src}
            alt="Trend Trove - logo"
            layout="fill"
            objectFit="fill"
          />
        </Link>

        <div className="flex lg:w-full w-max lg:mx-0 mx-auto 2xl:gap-16 gap-8 lg:justify-start justify-center">
          <Link href={ROUTES.HOME} className="footer__logo lg:block hidden">
            <Image
              src={logo.src}
              alt="Trend Trove - logo"
              layout="fill"
              objectFit="fill"
            />
          </Link>

          <ul className="space-y-2 lg:w-auto w-full">
            <li className="link md:text-[15px] text-[14px]">
              <Link href={ROUTES.HOME}>Domů</Link>
            </li>
            {mainLinks.map((item: IHeaderDropdown, itemKey: number) => {
              const { text, route } = item
              return (
                <li key={itemKey} className="link md:text-[15px] text-[14px]">
                  <Link href={route as string}>{text}</Link>
                </li>
              )
            })}
          </ul>

          <ul className="space-y-2 lg:w-auto w-full">
            {documentsLinks.map((item: ILink, itemKey: number) => {
              const { text, route } = item
              return (
                <li key={itemKey} className="link md:text-[15px] text-[14px]">
                  <Link href={route}>{text}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="w-full lg:text-left text-center">
          <span className="font-semibold lg:text-[20px] md:text-[18px] text-[15px]">
            Děkujeme Vám za Vaši důvěru!
          </span>
          <p className="lg:my-3 my-1">
            Každý Váš nákup je pro nás důležitý. Díky za Vaši důvěru! Sdílejte s
            přáteli naši stránku a pomozte nám rozšířit krásu módy dál.
          </p>
          <ul className="flex items-center gap-2 lg:justify-start justify-center">
            {socialsLinks.map((item: ISocialLink, itemKey: number) => {
              const { alt, route, icon } = item
              return (
                <li key={itemKey}>
                  <a href={route} target="_blank" rel="noreferrer">
                    <Image
                      alt={`Trend Trove - ${alt}`}
                      src={icon}
                      className="duration-350 hover:brightness-75"
                      width={22}
                      height={22}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="footer__authors border-t border-lightGrey py-2">
        <div className="max-width">
          <p className="text-center font-medium">
            © 2024 | Vojtěch Kolařík | Jakub Procházka | Libuše Babičková 
          </p>
        </div>
      </div>
    </footer>
  )
}
