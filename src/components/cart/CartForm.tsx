import { Form } from "@components/forms/Form"
import { cartAddress, cartDelivery, cartPersonalInfo } from "@data/forms"
import { ICartForm } from "modules/CartForms"
import { FC } from "react"
import { UseFormRegister } from "react-hook-form"

export const CartForm: FC<{
  register: UseFormRegister<ICartForm>
  errors: any
}> = ({ register, errors }) => {
  // TODO: zobrazovat form, kdyz je uziv. prihlaseny? napr. nasetovat mu ty hodnoty do formu a dat tam readonly?

  return (
    <div className="basic-form py-8 basic-form--cart mt-8 w-full">
      <h2 className="uppercase font-medium mb-1 lg:text-[18px] md:text-[16px] text-[15px]">
        osobní informace
      </h2>
      <div className="grid md:grid-cols-3 md:gap-x-6 gap-2">
        <Form data={cartPersonalInfo} register={register} errors={errors} />
      </div>

      <h2 className="uppercase font-medium mb-1 mt-4 lg:text-[18px] md:text-[16px] text-[15px]">
        doručovací adresa
      </h2>
      <div className="grid md:grid-cols-3 md:gap-x-6 gap-2">
        <Form data={cartAddress} register={register} errors={errors} />
      </div>

      <h2 className="uppercase font-medium mb-1 mt-4 lg:text-[18px] md:text-[16px] text-[15px]">
        platební metoda
      </h2>
      <div>
        <Form data={cartDelivery} register={register} errors={errors} />
      </div>
    </div>
  )
}
