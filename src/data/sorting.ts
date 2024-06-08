import { ISorting } from "modules/forms/FilterForm"

export const allSorting: ISorting[] = [
  {
    value: "default",
    label: "Výchozí",
  },
  {
    value: "cheapest",
    label: "Od nejlevnějších",
  },
  {
    value: "mostExpensive",
    label: "Od nejdražších",
  },
]
