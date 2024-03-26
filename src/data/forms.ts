import { IGeneralInput, InputType } from "modules/Inputs";
import { statesData } from "./countries";
import { IRegisterData } from "modules/Register";
import { ISigninData } from "modules/Login";
import { ICartForm } from "modules/CartForms";
import { IFilterForm } from "modules/FilterForm";
import { allSizes } from "./sizes";
import { allColors } from "./colors";
import { allSorting } from "./sorting";
import { priceCategories } from "./prices";
import { IUserInfo } from "modules/UserInfo";
import { IProductCalculator } from "modules/Product";

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
];

export const registerInputs1: IGeneralInput<IRegisterData>[] = [
  {
    placeholder: "Jméno",
    id: "name",
    required: "Jméno je povinné",
    type: InputType.TEXT,
  },
 {
    placeholder: "Příjmení",
    id: "surname",
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
    placeholder: "Stát",
    id: "state",
    required: "Stát je povinný",
    type: InputType.SELECT,
    options: statesData,
  },
];

export const registerInputs2: IGeneralInput<IRegisterData>[] = [
  {
    placeholder: "Město",
    id: "city",
    required: "Město je povinné",
    type: InputType.TEXT,
  },
  {
    placeholder: "Ulice",
    id: "street",
    required: "Ulice je povinná",
    type: InputType.TEXT,
  },
  {
    placeholder: "Číslo popisné",
    id: "cadastral_number",
    required: "Číslo popisné je povinné",
    type: InputType.TEXT,
  },
  {
    placeholder: "PSČ",
    id: "zip_code",
    required: "PSČ je povinné",
    type: InputType.TEXT,
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
];

export const cartPersonalInfo: IGeneralInput<ICartForm>[] = [
  {
    placeholder: "Jméno a příjmení",
    id: "name",
    required: "Jméno je povinné",
    type: InputType.TEXT,
    pattern: /^\S+@\S+$/i,
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
];

export const cartAddress: IGeneralInput<ICartForm>[] = [
  {
    placeholder: "Stát",
    id: "state",
    required: "Stát je povinný",
    type: InputType.SELECT,
    options: statesData,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Město",
    id: "city",
    required: "Město je povinné",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Ulice",
    id: "street",
    required: "Ulice je povinná",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Číslo popisné",
    id: "cadastral_number",
    required: "Číslo popisné je povinné",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "PSČ",
    id: "zip_code",
    required: "PSČ je povinné",
    type: InputType.TEXT,
    noPaddingOnMobile: true,
  },
  {
    placeholder: "Poznámka",
    id: "note",
    type: InputType.TEXT,
  },
];

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
  }
]

export const filterForm: IGeneralInput<IFilterForm>[] = [
  {
    placeholder: "Řazení",
    id: "sorting",
    type: InputType.SELECT,
    options: allSorting,
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
  {
    placeholder: "Velikosti",
    id: "sizes",
    type: InputType.CHECKBOX,
    options: allSizes
  },
  {
    placeholder: "Barvy",
    id: "colors",
    type: InputType.CHECKBOX,
    options: allColors
  },
  {
    placeholder: "Cena",
    id: "price",
    type: InputType.RADIO,
    options: priceCategories
  },
]

export const personalInfoForm: IGeneralInput<IUserInfo>[] = [
  ...registerInputs1,
  ...registerInputs2,
  {
    placeholder: "Mobil",
    id: "phone",
    required: "Mobil je povinný",
    pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
    type: InputType.TEXT,
  },
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
