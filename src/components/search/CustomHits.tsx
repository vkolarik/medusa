import React from "react"
import {
  UseHitsProps,
  useHits,
} from "react-instantsearch-hooks-web"
import { CustomProductHit } from "@components/search/CustomHit"

type CustomHitsProps<THit> = React.ComponentProps<"div"> &
  UseHitsProps & {
  hitComponent: (props: { hit: THit }) => JSX.Element
}

const CustomHits = ({ hitComponent: Hit, className, ...props }: CustomHitsProps<CustomProductHit>) => {
  const { hits } = useHits(props)

  return (
    <>
      {hits.slice(0, 6).map((hit, index) => (
        <Hit key={index} hit={hit as unknown as CustomProductHit} />
      ))}

      {hits.length === 0 &&
        <p>Nenalezeny žádné výsledky</p>
      }
    </>
  )
}

export default CustomHits
