import { IHeaderDropdown, ILink, ISocialLink } from "@interfaces/Link";
import * as ROUTES from '@constants/routes'
import facebookIcon from '../../public/images/icons/facebook.svg'
import instagramIcon from '../../public/images/icons/instagram.svg'
import xIcon from '../../public/images/icons/x.svg'

export const userLinks: IHeaderDropdown = {
  links: [
    {
      text: "Můj účet",
      route: ROUTES.ACCOUNT
    },
    {
      text: "Přihlášení",
      route: ROUTES.LOGIN
    },
    {
      text: "Registrace",
      route: ROUTES.REGISTER
    }
  ]
}

export const mainLinks: IHeaderDropdown[] = [
  {
    text: "Oblečení",
    route: "/obleceni",
    links: [
      {
        text: "Trička",
        route: "/tricka"
      },
      {
        text: "Kalhoty",
        route: "/kalhoty"
      }
    ]
  },
  {
    text: "Boty",
    route: "/boty",
    links: [
      {
        text: "Tenisky",
        route: "/tenisky"
      },
      {
        text: "Botasky",
        route: "/botasky"
      }
    ]
  },
  {
    text: "Doplňky",
    route: "/doplnky",
    links: [
      {
        text: "Pásky",
        route: "/pasky"
      },
      {
        text: "Náramky",
        route: "/naramky"
      }
    ]
  }
]

export const documentsLinks: ILink[] = [
  {
    text: "GDPR",
    route: ROUTES.GDPR
  },
  {
    text: "Cookies",
    route: ROUTES.COOKIES
  },
  {
    text: "Obchodní podmínky",
    route: ROUTES.VOP
  }
]

export const socialsLinks: ISocialLink[] = [
  {
    alt: "Facebook",
    route: "https://www.facebook.com/",
    icon: facebookIcon.src
  },
  {
    alt: "Instagram",
    route: "https://www.instagram.com/",
    icon: instagramIcon.src
  },
  {
    alt: "X",
    route: "https://twitter.com/?lang=cs",
    icon: xIcon.src
  }
]