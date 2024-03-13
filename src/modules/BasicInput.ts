import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export enum InputType {
  TEXT = "text",
  NUMBER = "number",
  PASSWORD = "password"
}

export interface IBasicInput<T extends FieldValues> {
  placeholder: string;
  id: Path<T> | string;
  required: string;
  pattern?: RegExp;
  register: UseFormRegister<T>;
  errors: any;
  type?: InputType
  min?: number;
  max?: number;
  minLengthErr?: string;
  maxLengthErr?: string;
}
