import { IProductDetail, IProductPreview } from "modules/Product"
import image from "../../public/images/model.png"

export const productsPreviewData: IProductPreview[] = [
  {
    id: 1,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
  {
    id: 2,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
  {
    id: 3,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
  {
    id: 4,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
  {
    id: 5,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
  {
    id: 6,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
  {
    id: 7,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
  {
    id: 8,
    image: image.src,
    title: "Pánské tričko s kulatým výstřihem, 100% bavlna",
    route: "/produkty/panske-tricko-s-kulatym-vystrihem",
    sizes: ["S", "M"],
    price: 599,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
  },
]

export const productDetailData: IProductDetail[] = productsPreviewData.map(
  (product: IProductPreview) => {
    return {
      ...product,
      images: [
        product.image,
        product.image,
        product.image,
        product.image,
        product.image,
        product.image,
        product.image,
        product.image,
      ],
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.", // Přidejte popis produktu
    }
  }
)
