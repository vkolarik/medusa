import { FieldValues } from "react-hook-form"
import { IGeneralInput } from "./Inputs"

export interface IForm<T extends FieldValues> {
  data: IGeneralInput<T>[]
  register: any
  errors: any
  readOnly?: boolean
}
