import { ICheckbox } from "modules/Inputs"
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
        {options.map((option: string, key: number) => {
          return (
            <label key={key} htmlFor={option} className="checkbox-container">
              {option}
              <input
                type="checkbox"
                readOnly={readOnly}
                id={option}
                value={option}
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
