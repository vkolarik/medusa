"use client"
import { FC, useEffect, useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import "yet-another-react-lightbox/styles.css"
import Image from "next/image"

export const ProductGallery: FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  const [index, setIndex] = useState<number>(-1)
  const [slides, setSlides] = useState<any[]>([])

  useEffect(() => {
    if (!images) return

    setSlides(
      images.map((src) => ({
        src: src,
      }))
    )
  }, [images])

  return (
    <div className="gallery md:w-1/2 w-full md:grid block md:h-auto h-[25rem]">
      {images.slice(0, 5).map((img, index) => (
        <div
          className={`gallery__item relative ${
            index > 0 ? "md:block hidden" : ""
          }`}
          key={index}
        >
          <Image
            onClick={() => setIndex(index)}
            src={img}
            layout="fill"
            objectFit="contain"
            alt={`${title} - obr. ${index + 1}`}
          />

          {index === 4 && images.length > 5 && (
            <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center opacity-80">
              <span className="text-white font-semibold lg:text-[19px] text-[16px]">
                + {images.length - 5}
              </span>
            </div>
          )}

          <div className="absolute right-4 bottom-4 bg-black py-1 px-2 md:hidden block">
            <span className="text-white font-semibold lg:text-[19px] text-[16px] leading-none">
              1 / {images.length}
            </span>
          </div>
        </div>
      ))}

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
  )
}
