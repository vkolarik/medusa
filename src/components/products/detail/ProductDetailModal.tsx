import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react"
import { GrClose } from "react-icons/gr"
import gsap from "gsap"
import { IconContext } from "react-icons"
import { ProductDetailModalState } from "modules/Product"
import { ProductDetailModalHeader } from "./ProductDetailModalHeader"
import { ProductDetailCalculator } from "./ProductDetailCalculator"
import { ProductDetailSizesTable } from "./ProductDetailSizesTable"

export const ProductDetailModal: FC<{
  image: string
  setActiveModal: Dispatch<SetStateAction<boolean>>
}> = ({ image, setActiveModal }) => {
  const [headerState, setHeaderState] = useState<ProductDetailModalState>(
    ProductDetailModalState.CALCULATOR
  )
  const popupRef = useRef<HTMLDivElement>(null)
  const popupInfoRef = useRef<HTMLDivElement>(null)
  const popupBgRef = useRef<HTMLDivElement>(null)
  const timeline = gsap.timeline()

  const closeAlert = (): void => {
    const popup = document.querySelector(".info-popup")
    if (popup) {
      popup.classList.toggle("active")
      timeline.fromTo(
        ".info-popup__text",
        { y: 0, opacity: 1 },
        { y: 100, opacity: 0, ease: "power1.out", duration: 0.2 }
      )
      timeline.to(".info-popup", { display: "none", duration: 0.1 })
      timeline.to(".popup-bg", { display: "none", duration: 0.1 })
      setActiveModal(false)
    }
  }

  const hideAlert = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === popupInfoRef.current) closeAlert()
  }

  useEffect(() => {
    const popup = document.querySelector(".info-popup")
    if (popup && !popup.classList.contains("active")) {
      popup.classList.toggle("active")
      timeline.to(".info-popup", { display: "flex" })
      timeline.to(".popup-bg", { display: "flex" })
      timeline.fromTo(
        ".info-popup__text",
        { scale: 0, y: 0, ease: "linear" },
        { scale: 1, y: 0, opacity: 1, ease: "linear", duration: 0.2 },
        "<0.5"
      )
    }
  }, [])

  return (
    <div onClick={(e) => hideAlert(e)}>
      <div ref={popupBgRef} className="popup-bg" />
      <div
        ref={popupInfoRef}
        className="info-popup"
        onClick={(e) => hideAlert(e)}
      >
        <div ref={popupRef} className="info-popup__text pt-4 pb-8">
          <div
            className="flex justify-end pb-2 border-b border-lightGrey"
            onClick={() => closeAlert()}
          >
            <IconContext.Provider
              value={{ size: "20px", className: "cursor-pointer mr-5" }}
            >
              <div>
                <GrClose />
              </div>
            </IconContext.Provider>
          </div>

          <div className="px-4 lg:px-8 md:pt-8 pt-4">
            <ProductDetailModalHeader
              state={headerState}
              setState={setHeaderState}
            />

            <div>
              {headerState === ProductDetailModalState.CALCULATOR ? (
                <ProductDetailCalculator image={image} />
              ) : (
                <ProductDetailSizesTable />
              )}

              <div className="pt-8">
                <h2 className="font-semibold lg:text-[22px] md:text-[19px] text-[16px] md:mb-3 mb-2">
                  Jak se správně měřit
                </h2>
                <div className="md:mt-3 mt-2 border-t border-lightGrey">
                  <h3 className="font-medium lg:text-[17px] text-[15px] md:mt-4 mt-2">
                    Prsa
                  </h3>
                  <p>
                    Metr protáhněte v podpaží a změřte se přes nejširší část
                    svého poprsí.
                  </p>
                  <h3 className="font-medium lg:text-[17px] text-[15px] md:mt-4 mt-2">
                    Pas
                  </h3>
                  <p>
                    Metr protáhněte podél svého přirozeného pasu a změřte
                    vzdálenost mezi nejvyšší částí kyčelní kosti a spodními
                    žebry.
                  </p>
                  <h3 className="font-medium lg:text-[17px] text-[15px] md:mt-4 mt-2">
                    Boky
                  </h3>
                  <p>
                    Metr obtočte kolem svých boků a měřte přes nejširší část
                    svého zadku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
