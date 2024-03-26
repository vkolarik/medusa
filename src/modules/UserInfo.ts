import { IRegisterData } from "./Register"

export interface IUserInfo extends Omit<IRegisterData, "gender"> {
  id: number
  phone: string
}

export interface IUserInfoForm {
  icon: string
  values: string[]
}
