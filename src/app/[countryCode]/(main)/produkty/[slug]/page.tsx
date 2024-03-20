"use client"

import { PageHeader } from "@components/PageHeader"
import { ILink } from "modules/Link"
import * as ROUTES from "@constants/routes"
import { IProductDetail } from "modules/Product"
import { useEffect, useState } from "react"
import { productDetailData } from "@data/products"
import { Loading } from "@components/Loading"
import Image from "next/image"

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const [activeProduct, setActiveProduct] = useState<IProductDetail>()

  // TODO: use dynamic data
  const breadcrumbs: ILink[] = [
    {
      text: "Oblečení",
      route: ROUTES.CLOTHES
    },
    {
      text: "Trička",
      route: `/${ROUTES.CLOTHES}/tricka`
    }
  ]

  useEffect(() => {
    setActiveProduct(productDetailData.find(p => p.route.includes(params.slug)))
  }, [params.slug])

  return (
    <main className="max-width page w-full">
      {!activeProduct
        ? <Loading />
        : (
          <>
            <PageHeader
              breadcrumbs={breadcrumbs}
            />

            <div className="flex">
              <div className="flex w-1/2 h-auto gap-5">
                <div className="relative w-full h-full">
                  <Image src={activeProduct.image}
                    alt={activeProduct.title}
                    loading="lazy"
                    className="object-cover h-auto"
                    layout="fill"/>
                </div>

                <div className="space-y-5">
                  {activeProduct.images.slice(0, 3).map((image: string, key: number) => {
                    return <div key={key}
                      className="relative w-[7rem] h-[7rem]">
                      <Image src={image}
                      alt={activeProduct.title}
                      loading="lazy"
                      className="object-cover"
                      layout="fill"/>
                      </div>
                  })}
                </div>
              </div>

              <div>
                <h1>{activeProduct.title}</h1>
                <p>{activeProduct.desciption}</p>
                <h2>{activeProduct.price} Kč</h2>
              </div>
            </div>
          </>
      )}

    </main>
  )
}
export default ProductDetail
