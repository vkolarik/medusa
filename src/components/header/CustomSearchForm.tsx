"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image"
import searchIcon from "../../../public/images/icons/search.svg"
import { useForm } from "react-hook-form"
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete"
import { IProductPreview } from "modules/Product"
import { SEARCH_INDEX_NAME, searchClient } from "@lib/search-client"
import { productsPreviewData } from "@data/products"
import { InstantSearch } from "react-instantsearch-hooks-web"
import SearchBox from "@modules/search/components/search-box"
import Hits from "@modules/search/components/hits"
import Hit from "@modules/search/components/hit"
import CustomHit from "@components/search/CustomHit"
import CustomHits from "@components/search/CustomHits"
import CustomSearchBox from "@components/search/CustomSearchBox"

export const CustomSearchForm: FC = () => {
  const [items, setItems] = useState<IProductPreview[]>([])
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [filteredItems, setFilteredItems] = useState<IProductPreview[]>([])

  const { register, handleSubmit } = useForm()

  const panelFooterTemplate = () => {
    const isItemSelected = (filteredItems || []).some(item => item.title === selectedItem)
    return (
      <div className="py-2 px-3">
        {isItemSelected ? (
          <span>
                    <b>{selectedItem}</b>
                </span>
        ) : (
          "Žádný produkt nevybrán."
        )}
      </div>
    )
  }


  const search = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
      let _filteredItems

      if (!event.query.trim().length) {
        _filteredItems = [...items]
      } else {
        _filteredItems = items.filter((item) => {
          return item.title.toLowerCase().startsWith(event.query.toLowerCase())
        })
      }

      setFilteredItems(_filteredItems)
    }, 250)
  }

  const itemTemplate = (item: IProductPreview) => {
    return (
      <div className="flex align-items-center">
        <Image
          alt={item.title}
          src={item.image}
          className={`object-cover`}
          style={{ width: "18px" }}
        />
        <div>{item.title}</div>
      </div>
    )
  }

  const onSubmit: any = async (data: { text: string | null }, e: Event) => {
    alert(data.text)
  }

  return (
    <InstantSearch
      indexName={SEARCH_INDEX_NAME}
      searchClient={searchClient}
    >
      <li className="dropdown cursor-pointer inline-block uppercase xl:text-[18px] text-[16px] font-bold">
        <CustomSearchBox />

        <div className="dropdown__content hidden absolute z-10 min-w-[160px] pt-5 duration-300">
          <CustomHits hitComponent={CustomHit} />
        </div>

      </li>

    </InstantSearch>
  )
}
