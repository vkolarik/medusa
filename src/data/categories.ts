import { ICategory } from "modules/Category"
import clothesImage from "../../public/images/clothes.png"
import shoesImage from "../../public/images/shoes.png"
import accessoriesImage from "../../public/images/accessories.png"

export const subcategoriesClothesData: ICategory[] = [
  {
    id: 1,
    title: "Tricka",
    route: "/kategorie/obleceni/tricka",
    image: clothesImage.src,
  },
  {
    id: 2,
    title: "Kalhoty",
    route: "/kategorie/obleceni/kalhoty",
    image: clothesImage.src,
  },
  {
    id: 3,
    title: "Svetry",
    route: "/kategorie/obleceni/svetry",
    image: clothesImage.src,
  },
  {
    id: 4,
    title: "mikiny",
    route: "/kategorie/obleceni/mikiny",
    image: clothesImage.src,
  },
]

export const subcategoriesShoesData: ICategory[] = [
  {
    id: 1,
    title: "Botasky",
    route: "/kategorie/boty/botasky",
    image: shoesImage.src,
  },
  {
    id: 2,
    title: "Tenisky",
    route: "/kategorie/boty/tenisky",
    image: shoesImage.src,
  },
  {
    id: 3,
    title: "Pantofle",
    route: "/kategorie/boty/pantofle",
    image: shoesImage.src,
  },
  {
    id: 4,
    title: "Zimni boty",
    route: "/kategorie/boty/zimni-boty",
    image: shoesImage.src,
  },
]

export const subcategoriesAccessoriesData: ICategory[] = [
  {
    id: 1,
    title: "Pasky",
    route: "/kategorie/doplnky/pasky",
    image: accessoriesImage.src,
  },
  {
    id: 2,
    title: "Cepice",
    route: "/kategorie/doplnky/cepice",
    image: accessoriesImage.src,
  },
  {
    id: 3,
    title: "Rukavice",
    route: "/kategorie/doplnky/Rukavice",
    image: accessoriesImage.src,
  },
  {
    id: 4,
    title: "Saly",
    route: "/kategorie/doplnky/saly",
    image: accessoriesImage.src,
  },
]

export const categoriesData: ICategory[] = [
  {
    id: 1,
    title: "Oblečení",
    route: "/kategorie/obleceni",
    image: clothesImage.src,
    data: subcategoriesClothesData,
  },
  {
    id: 2,
    title: "Boty",
    route: "/kategorie/boty",
    image: shoesImage.src,
    data: subcategoriesShoesData,
  },
  {
    id: 3,
    title: "Doplňky",
    route: "/kategorie/doplnky",
    image: accessoriesImage.src,
    data: subcategoriesAccessoriesData,
  },
]
