import { IHeaderDropdown, ILink, ISocialLink } from "modules/Link"
import * as ROUTES from "@constants/routes"
import facebookIcon from "../../public/images/icons/facebook.svg"
import instagramIcon from "../../public/images/icons/instagram.svg"
import xIcon from "../../public/images/icons/x.svg"

export const userLinks: IHeaderDropdown = {
  links: [
    {
      text: "Můj účet",
      route: ROUTES.PERSONAL_INFO,
    },
    {
      text: "Přihlášení",
      route: ROUTES.LOGIN,
    },
    {
      text: "Registrace",
      route: ROUTES.REGISTER,
    },
  ],
}

export const mainLinks: IHeaderDropdown[] = [
  {
    text: "Oblečení",
    route: "/kategorie/obleceni",
    links: [
      {
        text: "Trička",
        route: "/kategorie/tricka",
      },
      {
        text: "Mikiny",
        route: "/kategorie/mikiny",
      },
      {
        text: "Kalhoty",
        route: "/kategorie/kalhoty",
      },
      {
        text: "Čepice",
        route: "/kategorie/čepice",
      },
    ],
  },
  {
    text: "Boty",
    route: "/kategorie/boty",
    links: [],
  },
  {
    text: "Doplňky",
    route: "/kategorie/doplnky",
    links: [],
  },
]

export const documentsLinks: ILink[] = [
  {
    text: "GDPR",
    route: ROUTES.GDPR,
  },
  {
    text: "Cookies",
    route: ROUTES.COOKIES,
  },
  {
    text: "Obchodní podmínky",
    route: ROUTES.VOP,
  },
]

export const socialsLinks: ISocialLink[] = [
  {
    alt: "Facebook",
    route: "https://www.facebook.com/",
    icon: facebookIcon.src,
  },
  {
    alt: "Instagram",
    route: "https://www.instagram.com/",
    icon: instagramIcon.src,
  },
  {
    alt: "X",
    route: "https://twitter.com/?lang=cs",
    icon: xIcon.src,
  },
]
