import { InputType } from "modules/BasicInput";

export const loginInputs = [
  {
    placeholder: "Email",
    id: "email",
    required: "Email je povinný",
    pattern: /^\S+@\S+$/i,
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
