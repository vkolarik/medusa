import { ICheckbox, IOption } from "modules/forms/Inputs"
import { FieldValues, Path } from "react-hook-form"
import React from "react"

export const Checkbox: <T extends FieldValues>(
  props: ICheckbox<T>
) => JSX.Element = <T extends FieldValues>({
  placeholder,
  id,
  required,
  register,
  options,
  noPaddingOnMobile,
  readOnly,
}: ICheckbox<T>) => {
  return (
    <div className={`${noPaddingOnMobile ? "md:" : ""}mb-4 form__input`}>
      <label htmlFor={id}>{placeholder}</label>
      <div className="w-full h-full flex flex-col gap-y-1 mt-1">
        {options.map((option: string | IOption, key: number) => {
          const isOptionString = typeof(option) === "string"
          return (
            <label key={key} htmlFor={isOptionString ? option : option.value} className="checkbox-container">
              {isOptionString ? option : option.label}
              <input
                type="checkbox"
                readOnly={readOnly}
                id={isOptionString ? option : option.value}
                value={isOptionString ? option : option.value}
                {...register(id as Path<T>, {
                  required,
                })}
                name={id}
              />
              <span className="checkbox__span" />
            </label>
          )
        })}
      </div>
    </div>
  )
}
