import { statesData } from "@data/register"
import { ICartForm } from "modules/CartForms"
import { IState } from "modules/Register"
import { FC } from "react"
import { UseFormRegister } from "react-hook-form"


interface CartFormProps {
  register: UseFormRegister<ICartForm>;
  errors: any;
}

export const CartForm: FC<CartFormProps> = ({ register, errors }) => {

  // TODO: zobrazovat form, kdyz je uziv. prihlaseny? napr. nasetovat mu ty hodnoty do formu a dat tam readonly?

  return (
    <div
      className="basic-form py-8 basic-form--cart mt-8 w-full">
      <h2 className="uppercase font-medium mb-1 lg:text-[18px] md:text-[16px] text-[15px]">osobní informace</h2>
      <div className="grid md:grid-cols-3 md:gap-x-6 gap-2">

        {/* name input */}
        <div className="md:mb-4 form__input">
          <label htmlFor="name">Jméno a příjmení</label>
          <input
            className={`${errors.name ? "mb-3" : "mb-0"}`}
            id="name"
            type="text"
            placeholder="Jméno a příjmení"
            {...register("name", {
              required: "Jméno je povinné",
            })}
          />
          {/* error message */}
          {errors.name && errors.name.type === "required" && (
            <p className="h-6 text-left error">
              {errors.name.message as string}
            </p>
          )}
        </div>

        {/* email input */}
        <div className="md:mb-4 form__input">
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

        {/* phone input */}
        <div className="mb-4 form__input">
          <label htmlFor="phone">Mobil</label>
          <input
            className={`${errors.phone ? "mb-3" : "mb-0"}`}
            id="phone"
            type="text"
            placeholder="Mobil"
            {...register("phone", {
              required: "Mobil je povinný",
              pattern: {
                value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                message: 'Číslo nemá správný tvar',
              },
            })}
          />
          {/* error message */}
          {errors.phone && errors.phone.type === "required" && (
            <p className="h-6 text-left error">
              {errors.phone.message as string}
            </p>
          )}

          {errors.phone && errors.phone.type === "pattern" && (
            <p className="h-6 text-left error">{errors.phone.message as string}</p>
          )}
        </div>
      </div>

      <h2 className="uppercase font-medium mb-1 mt-4 lg:text-[18px] md:text-[16px] text-[15px]">doručovací adresa</h2>
      <div className="grid md:grid-cols-3 md:gap-x-6 gap-2">

        {/* state input */}
        <div className="md:mb-4 form__input">
          <label htmlFor="state">Stát</label>
          <select
            id="state"
            {...register("state", {
              required: "Stát je povinný",
            })}
          >
            {statesData.map((state: IState, key: number) => {
              const { text, code } = state
              return (
                <option key={key} value={code}>
                  {text}
                </option>
              )
            })}
          </select>
          {/* error message */}
          {errors.state && errors.state.type === "required" && (
            <p className="h-6 text-left error">
              {errors.state.message as string}
            </p>
          )}
        </div>

        {/* city input */}
        <div className="md:mb-4 form__input">
          <label htmlFor="city">Město</label>
          <input
            className={`${errors.city ? "mb-3" : "mb-0"}`}
            id="city"
            type="text"
            placeholder="Město"
            {...register("city", {
              required: "Město je povinné",
            })}
          />
          {/* error message */}
          {errors.city && errors.city.type === "required" && (
            <p className="h-6 text-left error">
              {errors.city.message as string}
            </p>
          )}
        </div>
        <div className="md:mb-4 form__input">
          <label htmlFor="street">Ulice</label>
          <input
            className={`${errors.street ? "mb-3" : "mb-0"}`}
            id="street"
            type="text"
            placeholder="Ulice"
            {...register("street", {
              required: "Ulice je povinná",
            })}
          />
          {/* error message */}
          {errors.street && errors.street.type === "required" && (
            <p className="h-6 text-left error">
              {errors.street.message as string}
            </p>
          )}
        </div>

        {/* cadastral_number input */}
        <div className="md:mb-4 form__input">
          <label htmlFor="cadastral_number">Číslo popisné</label>
          <input
            className={`${errors.cadastral_number ? "mb-3" : "mb-0"}`}
            id="cadastral_number"
            type="text"
            placeholder="Číslo popisné"
            {...register("cadastral_number", {
              required: "Číslo popisné je povinné",
            })}
          />
          {/* error message */}
          {errors.cadastral_number && errors.cadastral_number.type === "required" && (
            <p className="h-6 text-left error">
              {errors.cadastral_number.message as string}
            </p>
          )}
        </div>

        {/* zip_code input */}
        <div className="md:mb-4 form__input">
          <label htmlFor="zip_code">PSČ</label>
          <input
            className={`${errors.zip_code ? "mb-3" : "mb-0"}`}
            id="zip_code"
            type="text"
            placeholder="PSČ"
            {...register("zip_code", {
              required: "PSČ je povinné",
            })}
          />
          {/* error message */}
          {errors.zip_code && errors.zip_code.type === "required" && (
            <p className="h-6 text-left error">
              {errors.zip_code.message as string}
            </p>
          )}
        </div>

        {/* note input */}
        <div className="mb-4 form__input">
          <label htmlFor="note">Poznámka</label>
          <input
            className={`${errors.note ? "mb-3" : "mb-0"}`}
            id="note"
            type="text"
            placeholder="Poznámka"
            {...register("note")}
          />
          {/* error message */}
          {errors.note && errors.note.type === "required" && (
            <p className="h-6 text-left error">
              {errors.note.message as string}
            </p>
          )}
        </div>
      </div>

      <h2 className="uppercase font-medium mb-1 mt-4 lg:text-[18px] md:text-[16px] text-[15px]">platební metoda</h2>
      <div>
        <input
          type="radio"
          id="card"
          value="card"
          defaultChecked={true}
          className="hidden"
          {...register("payment", {
            required: "Platební metoda je povinná",
          })}
          name="payment"
        />
        <label
          htmlFor="card"
          className="button button--small button--light cursor-pointer"
        >
          platební karta
        </label>

        <input
          type="radio"
          id="delivery"
          value="delivery"
          className="hidden"
          {...register("payment", {
            required: "Platební metoda je povinná",
          })}
          name="payment"
        />
        <label
          htmlFor="delivery"
          className="button button--small button--light ml-2 cursor-pointer"
        >
          dobírka
        </label>
      </div>

    </div>
  )
}
