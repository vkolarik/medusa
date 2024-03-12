export interface IRegisterData {
  name: string
  email: string
  surname: string
  password: string
  state: string
  city: string
  street: string
  psc: number
  cp: number
  gener: "male" | "female"
}

export interface IState {
  text: string
  code: string
}
