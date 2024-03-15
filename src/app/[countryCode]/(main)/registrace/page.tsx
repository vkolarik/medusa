"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { NextPage } from "next"
import { IRegisterData } from "modules/Register"
import { registerInputs1, registerInputs2 } from "@data/forms"
import { Form } from "@components/forms/Form"
import { SubmitButton } from "@components/SubmitButton"

const Register: NextPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [btnText, setBtnText] = useState<string>("Registrovat se")

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IRegisterData>()

  useEffect(() => {
    setValue("gender", "male")
  }, [])

  const onSubmit: any = async (data: IRegisterData, e: Event) => {
    e.preventDefault()
    setBtnText("Registrace...")
    setIsDisabled(true)

    // toast.success('Registrace byla úspěšná')
    // toast.error('ddddddd')
    // setBtnText('Přihlásit se')
    // setIsDisabled(false)
  }


  // if (session.status === 'authenticated') {
  //   router.push(ROUTES.ACCOUNT)
  // }

  return (
    <div className="max-width md:py-36 py-12 w-full">
      <form className="basic-form basic-form--register" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4 md:mb-8 text-center">
          <h1 className="md:mb-1 text-[22px] md:text-[25px] uppercase">
            Registrace
          </h1>
          <p className="md:text-[17px] text-[15px] text-grey">
            Vytvořte si u nás nový účet
          </p>
        </div>

        <div className="flex lg:gap-5 lg:flex-row flex-col w-full">
          <div className="w-full">
            <Form data={registerInputs1}
              errors={errors}
              register={register}/>

          </div>

          <div className="w-full">
            <Form data={registerInputs2}
              errors={errors}
              register={register} />
          </div>
        </div>

        <div className="ease-in duration-200 mt-5 md:mt-8 flex justify-center">
          {/* Submit button */}
          <SubmitButton
            isDisabled={isDisabled}
            text={btnText} />
        </div>
      </form>
    </div>
  )
}

export default Register
