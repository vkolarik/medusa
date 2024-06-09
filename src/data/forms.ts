import { IGeneralInput, InputType } from "modules/forms/Inputs"
import { statesData } from "./countries"
import { IRegisterData } from "modules/Register"
import { ISigninData } from "modules/Login"
import { ICartForm } from "modules/cart/CartForms"
import { IFilterForm } from "modules/forms/FilterForm"
import { allSizes } from "./sizes"
import { allSorting } from "./sorting"
import { priceCategories } from "./prices"
import { IProductCalculator } from "modules/Product"
import { StorePostCustomersCustomerReq } from "@medusajs/medusa"

export const loginInputs: IGeneralInput<ISigninData>[] = [
  {
    placeholder: "Email",
    id: "email",
    required: "Email je povinný",
    pattern: /^\S+@\S+$/i,
    type: InputType.TEXT,
  },
  {
    placeholder: "Heslo",
    id: "password",
    required: "Heslo je povinné",
    type: InputType.PASSWORD,
    min: 5,
    max: 40,
    minLengthErr: "Heslo musí mít alespoň 5 znaků",
    maxLengthErr: "Heslo musí mít maximálně 40 znaků",
  },
]

export const registerInputs: IGeneralInput<IRegisterData>[] = [
  {
    placeholder: "Jméno",
    id: "first_name",
    required: "Jméno je povinné",
    type: InputType.TEXT,
  },
  {
    placeholder: "Příjmení",
    id: "last_name",
    required: "Příjmení je povinné",
    type: InputType.TEXT,
  },
  {
    placeholder: "Email",
    id: "email",
    required: "Email je povinný",
    pattern: /^\S+@\S+$/i,
    type: InputType.TEXT,
  },
  {
    placeholder: "Heslo",
    id: "password",
    required: "Heslo je povinné",
    type: InputType.PASSWORD,
    min: 5,
    max: 40,
    minLengthErr: "Heslo musí mít alespoň 5 znaků",
    maxLengthErr: "Heslo musí mít maximálně 40 znaků",
  },
  {
    placeholder: "Mobil",
    id: "phone",
    required: "Mobil je povinný",
    pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
    type: InputType.TEXT,
  },
]

export const addressInputs: IGeneralInput<IRegisterData>[] = [
  {
    placeholder: "Město",
    id: "city",
    required: "Město je povinné",
    type: InputType.TEXT,
  },
  {
    placeholder: "Ulice",
    id: "address_1",
    required: "Ulice je povinná",
    type: InputType.TEXT,
  },
  {
    placeholder: "Číslo popisné",
    id: "province",
    required: "Číslo popisné je povinné",
    type: InputType.TEXT,
  },
  {
    placeholder: "PSČ",
    id: "postal_code",
    required: "PSČ je povinné",
    type: InputType.TEXT,
  }
]

export const cartPersonalInfo: IGeneralInput<ICartForm>[] = [
  {
    placeholder: "Jméno",
    id: "first_name",
    required: "Jméno je povinné",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Příjmení",
    id: "last_name",
    required: "Příjmení je povinné",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Email",
    id: "email",
    required: "Email je povinný",
    pattern: /^\S+@\S+$/i,
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Mobil",
    id: "phone",
    required: "Mobil je povinný",
    pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
    type: InputType.TEXT,
  },
]

export const cartAddress: IGeneralInput<ICartForm>[] = [
  {
    placeholder: "Město",
    id: "city",
    required: "Město je povinné",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Ulice",
    id: "address_1",
    required: "Ulice je povinná",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Číslo popisné",
    id: "province",
    required: "Číslo popisné je povinné",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "PSČ",
    id: "postal_code",
    required: "PSČ je povinné",
    pattern: /^[0-9\s]+$/,
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  }
]

export const cartDelivery: IGeneralInput<ICartForm>[] = [
  {
    id: "payment",
    placeholder: "Platba",
    type: InputType.RADIO,
    options: [
      {
        value: "card",
        label: "platební karta",
      },
      {
        value: "delivery",
        label: "dobírka",
      },
    ],
  },
]

export const filterForm: IGeneralInput<IFilterForm>[] = [
  {
    placeholder: "Řazení",
    id: "sorting",
    type: InputType.SELECT,
    options: allSorting,
  },
  {
    placeholder: "Velikosti",
    id: "sizes",
    type: InputType.CHECKBOX,
    options: allSizes,
  },
  {
    placeholder: "Cena",
    id: "price",
    type: InputType.CHECKBOX,
    options: priceCategories,
  },
]

export const personalInfoForm: IGeneralInput<StorePostCustomersCustomerReq>[] = [
  ...registerInputs,
  ...addressInputs,
  {
    placeholder: "Staré heslo",
    id: "old_password",
    required: "Heslo je povinné",
    type: InputType.PASSWORD,
    min: 5,
    max: 40,
    minLengthErr: "Heslo musí mít alespoň 5 znaků",
    maxLengthErr: "Heslo musí mít maximálně 40 znaků",
  },
  {
    placeholder: "Nové heslo",
    id: "new_password",
    required: "Heslo je povinné",
    type: InputType.PASSWORD,
    min: 5,
    max: 40,
    minLengthErr: "Heslo musí mít alespoň 5 znaků",
    maxLengthErr: "Heslo musí mít maximálně 40 znaků",
  },
  {
    placeholder: "Heslo znovu",
    id: "confirm_password",
    required: "Heslo je povinné",
    type: InputType.PASSWORD,
    min: 5,
    max: 40,
    minLengthErr: "Heslo musí mít alespoň 5 znaků",
    maxLengthErr: "Heslo musí mít maximálně 40 znaků",
  }
]

export const productDetailCalculator: IGeneralInput<IProductCalculator>[] = [
  {
    placeholder: "Obvod pasu",
    id: "waistCircumference",
    required: "Obvod pasu je povinný",
    type: InputType.NUMBER,
  },
  {
    placeholder: "Obvod boků",
    id: "hipsCircumference",
    required: "Obvod boků je povinný",
    type: InputType.NUMBER,
  },
  {
    placeholder: "Obvod přes prsa",
    id: "breastsCircumference",
    required: "Obvod přes prsa je povinný",
    type: InputType.NUMBER,
  },
  {
    placeholder: "Pohlaví",
    id: "gender",
    options: [
      { value: "male", label: "MUŽ" },
      { value: "female", label: "ŽENA" },
    ],
    type: InputType.RADIO,
  },
]
