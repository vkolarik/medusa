"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"
import { SubmitButton } from "@components/SubmitButton"


const CustomRegisterForm = () => {
  const [message, formAction] = useFormState(signUp, null)

  return (

    <form className="basic-form basic-form--register" action={formAction}>
      <div className="w-full mb-4 md:mb-8 text-center">
        <h1 className="md:mb-1 text-[22px] md:text-[25px] uppercase">
          Registrace
        </h1>
        <p className="md:text-[17px] text-[15px] text-grey">
          Vytvořte si u nás nový účet
        </p>
      </div>

      <div className="w-full">
        <input
          placeholder="Jméno"
          name="first_name"
          required
          autoComplete="given-name"
        />
      </div>

      <div className="w-full">
        <input
          placeholder="Příjmení"
          name="last_name"
          required
          autoComplete="family-name"
        />
      </div>


      <input
        placeholder="Email"
        name="email"
        required
        type="email"
        autoComplete="email"
      />

      <input
        placeholder="Telefon"
        name="phone"
        type="tel"
        autoComplete="tel"
      />

      <input
        placeholder="Heslo"
        name="password"
        required
        type="password"
        autoComplete="new-password"
      />

      {message && <p>{message}</p>}

      <span>
          Vytvořením účtu souhlasíte s{" "}
        <Link
          href="/gdpr"
          className="underline"
        >
            GDPR
          </Link>{" "}
        {"a "}
        <Link
          href="/obchodni-podminky"
          className="underline"
        >
            obchodními podmínkami
          </Link>
          .
        </span>
      <SubmitButton isDisabled={false} text={"Registrovat"} />
    </form>
  )
}

export default CustomRegisterForm