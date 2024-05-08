"use client"

import { FC, useEffect, useState } from "react"
import { SEARCH_INDEX_NAME, searchClient } from "@lib/search-client"
import { InstantSearch } from "react-instantsearch-hooks-web"
import CustomHit from "@components/search/CustomHit"
import CustomHits from "@components/search/CustomHits"
import CustomSearchBox from "@components/search/CustomSearchBox"
import { useAppContext } from "@context/MainContext"
import { useFormState } from "react-dom"
import { getCartAction } from "../../app/actions"

export const CustomSearchForm: FC = () => {
  const [isSearching, setIsSearching] = useState(false)
  const { showSearch, setShowSearch } = useAppContext()

  useEffect(() => {
    setIsSearching(showSearch)
  }, [showSearch])


  return (
    <InstantSearch
      indexName={SEARCH_INDEX_NAME}
      searchClient={searchClient}
    >
      <li
        className="dropdown search-dropdown cursor-pointer inline-block uppercase xl:text-[18px] text-[16px] font-bold z-50 bg-white relative">
        <CustomSearchBox />

        <div
          className={"dropdown__content absolute z-10 min-w-[160px] w-full pt-5 duration-300 bg-white p-2 border border-lightGrey " + (isSearching ? "show" : "hidden")}>
          <CustomHits hitComponent={CustomHit} />
        </div>


      </li>

    </InstantSearch>
  )
}
