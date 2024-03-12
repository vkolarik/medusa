export interface IRegisterData {
  name: string
  email: string
  surname: string
  password: string
  state: string
  city: string
  street: string
  zip_code: number
  cadastral_number: number
  gender: "male" | "female"
}

export interface IState {
  text: string
  code: string
}
