import { ILink } from "modules/Link"
import { FC } from "react"
import { FaAngleRight } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import breadcumbrsIcon from "../../public/images/icons/breadcrumbs.svg"
import * as ROUTES from "../constants/routes"

export const PageHeader: FC<{ title?: string; breadcrumbs: ILink[] }> = ({
  title,
  breadcrumbs,
}) => {
  const extendedBreadcrumbs: ILink[] = [
    {
      text: "Domů",
      route: ROUTES.HOME,
    },
    ...breadcrumbs,
  ]

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          loading="lazy"
          src={breadcumbrsIcon.src}
          alt="Trand Trove - navigace"
          width={20}
          height={20}
        />
        {extendedBreadcrumbs.map((item: ILink, key: number) => (
          <div key={key} className={`flex items-center gap-2 ${key === extendedBreadcrumbs.length - 1 ? "text-grey" : "font-medium"}`}>
            <Link href={item.route} className="md:text-[17px] text-[16px]">
              {item.text}
            </Link>
            {key !== extendedBreadcrumbs.length - 1 && (
              <FaAngleRight className="fill-grey" />
            )}
          </div>
        ))}
      </div>

      {title && <h1 className="font-semibold lg:text-[45px] md:text-[37px] text-[34px]">
        {title}
      </h1>}
    </div>
  )
}
