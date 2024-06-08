"use client"

import Link from "next/link"
import { registerInputs as registerInputs } from "@data/forms"
import { SubmitButton } from "@components/SubmitButton"
import { Form } from "@components/forms/Form"
import { useForm } from "react-hook-form"
import { StorePostCustomersReq } from "@medusajs/medusa"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import { handleMessage } from "@utils/errors"
import { signUp } from "@utils/apiActions/signUp"

const CustomRegisterForm = () => {
  const [message, formAction] = useFormState(signUp, null)
  
  const {
    register,
    formState: { errors }
  } = useForm<StorePostCustomersReq>()

  useEffect(() => {
    if (message !== null) handleMessage(message)
  }, [message])

  return (
    <form className="basic-form basic-form--register"
    action={formAction}>
      <div className="w-full mb-4 md:mb-8 text-center">
        <h1 className="md:mb-1 text-[22px] md:text-[25px] uppercase">
          Registrace
        </h1>
        <p className="md:text-[17px] text-[15px] text-grey">
          Vytvořte si u nás nový účet
        </p>
      </div>

      <Form data={registerInputs} errors={errors} register={register} />

      <div className="my-4">
        <p>
          Vytvořením účtu souhlasíte s{" "}
          <Link href="/gdpr" className="underline">
            GDPR
          </Link>{" "}
          {"a "}
          <Link href="/obchodni-podminky" className="underline">
            obchodními podmínkami
          </Link>
          .
        </p>
      </div>

      <div className="flex justify-center">
        <SubmitButton isDisabled={false} text={"Registrovat"} />
      </div>
    </form>
  )
}

export default CustomRegisterForm
