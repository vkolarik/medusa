"use client"

import {
  IBasicInput,
  ICheckbox,
  IRadioInput,
  ISelect,
  InputType,
} from "modules/forms/Inputs"
import { BasicInput } from "./BasicInput"
import { FieldValues } from "react-hook-form"
import { Select } from "./Select"
import { RadioInput } from "./RadioInput"
import { Checkbox } from "./Checkbox"
import { IForm } from "modules/forms/Form"

export const Form: <T extends FieldValues>(props: IForm<T>) => JSX.Element = <
  T extends FieldValues
>({
  data,
  register,
  errors,
  readOnly = false,
}: IForm<T>) => {
  return (
    <>
      {data.map((input, key) => {
        if (
          [InputType.NUMBER, InputType.TEXT, InputType.PASSWORD].includes(
            input.type
          )
        ) {
          const {
            placeholder,
            id,
            required,
            pattern,
            type,
            min,
            max,
            minLengthErr,
            maxLengthErr,
            noPaddingOnMobile,
          } = input as IBasicInput<T>
          return (
            <BasicInput
              key={key}
              placeholder={placeholder}
              id={id}
              errors={errors}
              register={register}
              required={required}
              type={type}
              pattern={pattern}
              min={min}
              max={max}
              minLengthErr={minLengthErr}
              maxLengthErr={maxLengthErr}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={readOnly}
            />
          )
        } else if (input.type === InputType.SELECT) {
          const {
            placeholder,
            id,
            required,
            options,
            type,
            noPaddingOnMobile,
          } = input as ISelect<T>
          return (
            <Select
              key={key}
              register={register}
              placeholder={placeholder}
              id={id}
              errors={errors}
              required={required}
              options={options}
              type={type}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={readOnly}
            />
          )
        } else if (input.type === InputType.RADIO) {
          const {
            placeholder,
            id,
            required,
            options,
            type,
            noPaddingOnMobile,
          } = input as IRadioInput<T>
          return (
            <RadioInput
              key={key}
              register={register}
              placeholder={placeholder}
              id={id}
              required={required}
              options={options}
              type={type}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={readOnly}
            />
          )
        } else {
          const {
            placeholder,
            id,
            required,
            options,
            type,
            noPaddingOnMobile,
          } = input as ICheckbox<T>
          return (
            <Checkbox
              key={key}
              register={register}
              placeholder={placeholder}
              id={id}
              required={required}
              options={options}
              type={type}
              noPaddingOnMobile={noPaddingOnMobile}
              readOnly={readOnly}
            />
          )
        }
      })}
    </>
  )
}
