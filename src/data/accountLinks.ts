import { ILink } from "modules/Link"
import * as ROUTES from "@constants/routes"

export const accountLinks: ILink[] = [
  {
    text: "Osobní údaje",
    route: ROUTES.PERSONAL_INFO,
  },
  {
    text: "Objednávky",
    route: ROUTES.ORDERS,
  },
]
