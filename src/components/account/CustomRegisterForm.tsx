"use client"

import { useFormState } from "react-dom"

import { signUp } from "@utils/apiActions/signUp"
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

      <div className="w-full form__input">
        <label htmlFor="first_name">Jméno</label>

        <input
          id="first_name"
          type="text"
          placeholder="Jméno"
          name="first_name"
          required
          autoComplete="given-name"
        />
      </div>

      <div className="w-full form__input">
        <label htmlFor="last_name">Příjmení</label>

        <input
          id="last_name"
          type="text"
          placeholder="Příjmení"
          name="last_name"
          required
          autoComplete="family-name"
        />
      </div>

      <div className="form__input">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          placeholder="Email"
          name="email"
          required
          type="email"
          autoComplete="email"
        />
      </div>

      <div className="form__input">
        <label htmlFor="phone">Telefon</label>

        <input
          id="phone"
          placeholder="Telefon"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
      </div>

      <div className="form__input">
        <label htmlFor="password">Heslo</label>

        <input
          id="password"
          placeholder="Heslo"
          name="password"
          required
          type="password"
          autoComplete="new-password"
        />
      </div>

      {message && <p>{message}</p>}

      <div className="my-4">
        <p>Vytvořením účtu souhlasíte s{" "}
          <Link href="/gdpr" className="underline">
            GDPR
          </Link>{" "}
          {"a "}
          <Link href="/obchodni-podminky" className="underline">
            obchodními podmínkami
          </Link>
          .</p>
      </div>

      <div className="flex justify-center">
        <SubmitButton isDisabled={false} text={"Registrovat"} />
      </div>

    </form>
  )
}

export default CustomRegisterForm
