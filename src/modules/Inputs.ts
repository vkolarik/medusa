import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { IState } from "./Register";

export enum InputType {
  TEXT = "text",
  NUMBER = "number",
  PASSWORD = "password",
  SELECT = "select",
  RADIO = "radio"
}

export type IGeneralInput<T extends FieldValues> = Omit<ISelect<T>, "register" | "errors">
  | Omit<IBasicInput<T>, "register" | "errors"> | Omit<IRadioInput<T>, "register" | "errors">;

export interface IBasicInput<T extends FieldValues> {
  placeholder: string;
  id: Path<T> | string;
  required?: string;
  pattern?: RegExp;
  register: UseFormRegister<T>;
  errors: any;
  type: InputType
  min?: number;
  max?: number;
  minLengthErr?: string;
  maxLengthErr?: string;
  noPaddingOnMobile?: boolean
}

export interface ISelect<T extends FieldValues> {
  placeholder: string;
  id: Path<T> | string;
  required?: string;
  register: UseFormRegister<T>;
  errors: any;
  options: IState[]
  type: InputType
  noPaddingOnMobile?: boolean
}

export interface IRadioInput<T extends FieldValues> {
  placeholder: string;
  id: Path<T> | string;
  required?: string;
  register: UseFormRegister<T>;
  options: IRadioInputOption[]
  type: InputType
  noPaddingOnMobile?: boolean
}

export interface IRadioInputOption {
  value: string
  label: string 
}


