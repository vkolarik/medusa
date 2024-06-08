"use client"

import { FC } from "react"
import { InstantSearch } from "react-instantsearch-hooks-web"
import CustomHit from "@components/search/CustomHit"
import CustomHits from "@components/search/CustomHits"
import CustomSearchBox from "@components/search/CustomSearchBox"
import { useAppContext } from "@context/MainContext"
import { SEARCH_INDEX_NAME, searchClient } from "@utils/searchClient"

export const CustomSearchForm: FC = () => {
  const { showSearch } = useAppContext()

  return (
    <InstantSearch
      indexName={SEARCH_INDEX_NAME}
      searchClient={searchClient}
    >
      <li
        className="dropdown search-dropdown cursor-pointer inline-block uppercase xl:text-[18px]
          text-[16px] font-bold z-50 bg-white relative w-full">
        <CustomSearchBox />

        <div
          className={"dropdown__content absolute z-10 min-w-[160px] w-full pt-5 duration-300 bg-white p-2 border border-lightGrey "
           + (showSearch ? "show" : "hidden")}>
          <CustomHits hitComponent={CustomHit} />
        </div>

      </li>

    </InstantSearch>
  )
}
