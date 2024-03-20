import { IUserInfoForm } from "modules/UserInfo";
import userIcon from "../../public/images/icons/user.svg"
import emailIcon from "../../public/images/icons/email.svg"
import passwordIcon from "../../public/images/icons/password.svg"

export const userInfoForms: IUserInfoForm[] = [
  {
    icon: userIcon.src,
    values: ["name", "surname", "state", "street", "cadastral_number", "city", "phone", "zip_code"]
  },
  {
    icon: emailIcon.src,
    values: ["email"]
  },
  {
    icon: passwordIcon.src,
    values: ["password"]
  }
]
