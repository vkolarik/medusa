"use client"

import Link from "next/link"
import { registerInputs as registerInputs } from "@data/forms"
import { SubmitButton } from "@components/SubmitButton"
import { Form } from "@components/forms/Form"
import { useForm } from "react-hook-form"
import { StorePostCustomersReq } from "@medusajs/medusa"
import { useFormState } from "react-dom"
import { useEffect, useState } from "react"
import { handleMessage } from "@utils/errors"
import { signUp } from "@utils/apiActions/signUp"

const CustomRegisterForm = () => {
  const [message, formAction] = useFormState(signUp, null)
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<StorePostCustomersReq>()

  const onSubmit: any = async (
    data: StorePostCustomersReq,
    e: Event
  ) => {
    e.preventDefault()
    setLoadingBtn(true)

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    signUp(null, formData)
  }

  useEffect(() => {
    if (message !== null) handleMessage(message)
  }, [message])

  return (
    <form className="basic-form basic-form--register"
      onSubmit={handleSubmit(onSubmit)}>
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
        <SubmitButton loading={loadingBtn} text={"Registrovat"} />
      </div>
    </form>
  )
}

export default CustomRegisterForm
