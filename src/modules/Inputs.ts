import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export enum InputType {
  TEXT = "text",
  NUMBER = "number",
  PASSWORD = "password",
  SELECT = "select",
  RADIO = "radio",
  CHECKBOX = "checkbox",
}

export type IGeneralInput<T extends FieldValues> =
  | Omit<ISelect<T>, "register" | "errors">
  | Omit<IBasicInput<T>, "register" | "errors">
  | Omit<IRadioInput<T>, "register" | "errors">
  | Omit<ICheckbox<T>, "register" | "errors">

export interface IBasicInput<T extends FieldValues> {
  placeholder: string
  id: Path<T> | string
  required?: string
  pattern?: RegExp
  register: UseFormRegister<T>
  errors: any
  type: InputType
  min?: number
  max?: number
  minLengthErr?: string
  maxLengthErr?: string
  noPaddingOnMobile?: boolean
  readOnly?: boolean
}

export interface ISelect<T extends FieldValues> {
  placeholder: string
  id: Path<T> | string
  required?: string
  register: UseFormRegister<T>
  errors: any
  options: IOption[]
  type: InputType
  noPaddingOnMobile?: boolean
  readOnly?: boolean
}

export interface IOption {
  value: string
  label: string
}

export interface IRadioInput<T extends FieldValues> {
  placeholder: string
  id: Path<T> | string
  required?: string
  register: UseFormRegister<T>
  options: IOption[]
  type: InputType
  noPaddingOnMobile?: boolean
  readOnly?: boolean
}

export interface ICheckbox<T extends FieldValues> {
  placeholder: string
  id: Path<T> | string
  required?: string
  register: UseFormRegister<T>
  options: string[]
  type: InputType
  noPaddingOnMobile?: boolean
  readOnly?: boolean
}
