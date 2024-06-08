"use client"

import Link from "next/link"
import { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as ROUTES from "@constants/routes"
import { ISigninData } from "modules/Login"

import { loginInputs } from "@data/forms"
import { Form } from "@components/forms/Form"
import { useFormState } from "react-dom"
import { SubmitButton } from "@components/SubmitButton"
import { handleMessage } from "@utils/errors"
import { logCustomerIn } from "@utils/apiActions/login"

export const CustomLoginForm: FC = () => {
  const [message, formAction] = useFormState(logCustomerIn, null)
  
  const {
    register,
    formState: { errors }
  } = useForm<ISigninData>()

  useEffect(() => {
    if (message !== null) handleMessage(message)
  }, [message])

  return (
    <main className="max-width login md:py-36 py-12">
      <form className="basic-form" action={formAction}>
        <div className="w-full mb-4 md:mb-8 text-center">
          <h1 className="md:mb-1 text-[22px] md:text-[25px] uppercase">
            Přihlásit se
          </h1>
          <p className="md:text-[17px] text-[15px] text-grey">
            Přihlaste se k Vašemu účtu
          </p>
        </div>

      <Form data={loginInputs} register={register} errors={errors} />

      <p className="small text-right">
        Nemáte účet?{" "}
        <Link
          href={ROUTES.REGISTER}
          className="border-b border-lightGrey duration-300 hover:text-black hover:border-black"
        >
          Zaregistrujte se
        </Link>
      </p>

      <div className="ease-in duration-200 mt-5 md:mt-8 flex justify-center">
        <SubmitButton text={"Přihlásit se"} />
      </div>


      </form>
    </main>
  )
}

export default CustomLoginForm
