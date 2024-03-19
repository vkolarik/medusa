"use client"

import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as ROUTES from "@constants/routes"
import { NextPage } from "next"
import { ISigninData } from "modules/Login"
import { SubmitButton } from "@components/SubmitButton"
import { loginInputs } from "@data/forms"
import { Form } from "@components/forms/Form"

const SignIn: NextPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [btnText, setBtnText] = useState<string>("Přihlásit se")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISigninData>()

  const onSubmit: any = async (data: ISigninData, e: Event) => {
    e.preventDefault()
    setBtnText("Přihlašování...")
    setIsDisabled(true)
    console.log(data)

    // toast.success('Přilhášení bylo úspěšné')
    // toast.error('ddddddd')
    // setBtnText('Přihlásit se')
    // setIsDisabled(false)
  }

  // if (session.status === 'authenticated') {
  //   router.push(ROUTES.ACCOUNT)
  // }

  return (
    <main className="max-width login md:py-36 py-12">
      <form className="basic-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4 md:mb-8 text-center">
          <h1 className="md:mb-1 text-[22px] md:text-[25px] uppercase">
            Přihlásit se
          </h1>
          <p className="md:text-[17px] text-[15px] text-grey">
            Přihlaste se k Vašemu účtu
          </p>
        </div>

        <Form data={loginInputs}
          register={register}
          errors={errors}/>

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
          {/* Submit button */}
          <SubmitButton
            isDisabled={isDisabled}
            text={btnText} />
        </div>
      </form>
    </main>
  )
}

export default SignIn
