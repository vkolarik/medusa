import userIcon from "../../public/images/icons/user.svg"
import emailIcon from "../../public/images/icons/email.svg"
import passwordIcon from "../../public/images/icons/password.svg"
import { IUserInfoForm } from "modules/account/UserInfo"

export const userInfoForms: IUserInfoForm[] = [
  {
    icon: userIcon.src,
    values: [
      "first_name",
      "last_name",
      "phone",
      "city",
      "postal_code",
      "address_1",
      "province"
    ],
  },
  {
    icon: emailIcon.src,
    values: ["email"],
  },
  {
    icon: passwordIcon.src,
    values: ["new_password", "old_password", "confirm_password"],
  },
]
