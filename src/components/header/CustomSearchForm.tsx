"use client"

import { FC } from "react"
import { SEARCH_INDEX_NAME, searchClient } from "@lib/search-client"
import { InstantSearch } from "react-instantsearch-hooks-web"
import CustomHit from "@components/search/CustomHit"
import CustomHits from "@components/search/CustomHits"
import CustomSearchBox from "@components/search/CustomSearchBox"

export const CustomSearchForm: FC = () => {

  return (
    <InstantSearch
      indexName={SEARCH_INDEX_NAME}
      searchClient={searchClient}
    >
      <li className="dropdown cursor-pointer inline-block uppercase xl:text-[18px] text-[16px] font-bold z-50 bg-white relative">
        <CustomSearchBox />

        <div className="dropdown__content hidden absolute z-10 min-w-[160px] w-full pt-5 duration-300 bg-white p-2 border border-lightGrey">
          <CustomHits hitComponent={CustomHit} />
        </div>

      </li>

    </InstantSearch>
  )
}
