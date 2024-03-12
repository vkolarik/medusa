"use client"

import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as ROUTES from "@constants/routes"
import { NextPage } from "next"
import { ISigninData } from "@interfaces/Login"

const SignIn: NextPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [btnText, setBtnText] = useState<string>("Přihlásit se")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: any = async (data: ISigninData, e: Event) => {
    e.preventDefault()
    setBtnText("Přihlašování...")
    setIsDisabled(true)

    // toast.success('Přilhášení bylo úspěšné')
    // toast.error('ddddddd')
    // setBtnText('Přihlásit se')
    // setIsDisabled(false)
  }

  // if (session.status === 'authenticated') {
  //   router.push(ROUTES.ACCOUNT)
  // }

  return (
    <div className="max-width login md:py-36 py-12">
      <form className="basic-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4 md:mb-8 text-center">
          <h1 className="md:mb-1 text-[22px] md:text-[25px] uppercase">
            Přihlásit se
          </h1>
          <p className="md:text-[17px] text-[15px] text-grey">
            Přihlaste se k Vašemu účtu
          </p>
        </div>
        {/* Email input */}
        <div className="mb-4 form__input">
          <label htmlFor="email">Email</label>
          <input
            className={`${errors.email ? "mb-3" : "mb-0"}`}
            id="email"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email je povinný",
              pattern: /^\S+@\S+$/i,
            })}
          />
          {/* error message */}
          {errors.email && errors.email.type === "required" && (
            <p className="h-6 text-left error">
              {errors.email.message as string}
            </p>
          )}

          {errors.email && errors.email.type === "pattern" && (
            <p className="h-6 text-left error">Email nemá správný tvar</p>
          )}
        </div>
        {/* Password input */}
        <div className="mb-4 form__input">
          <label htmlFor="password">Heslo</label>
          <input
            className={`${errors.password ? "mb-3" : "mb-0"}`}
            id="password"
            type="password"
            autoComplete="on"
            placeholder="Heslo"
            {...register("password", {
              required: "Heslo je povinné",
              maxLength: 40,
              minLength: 5,
            })}
          />
          {/* error message */}
          {errors.password && errors.password.type === "required" && (
            <p className="h-6 text-left error">
              {errors.password.message as string}
            </p>
          )}

          {errors.password && errors.password.type === "minLength" && (
            <p className="h-6 text-left error">
              Heslo musí mít alespoň 5 znaků
            </p>
          )}
        </div>

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
          <button
            type="submit"
            className="button button--light"
            disabled={isDisabled}
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
