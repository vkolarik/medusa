import { IRadioInput, IOption } from "modules/Inputs";
import { FieldValues, Path } from "react-hook-form";
import React from "react";

export const RadioInput: <T extends FieldValues>(
  props: IRadioInput<T>
) => JSX.Element = <T extends FieldValues>({
  placeholder,
  id,
  required,
  register,
  options,
  noPaddingOnMobile,
  readOnly
}: IRadioInput<T>) => {

    return (
      <div className={`${noPaddingOnMobile ? "md:" : ""}mb-4 form__input`}>
        <label htmlFor={id}>{placeholder}</label>
        <div>
          {options.map((option: IOption, key: number) => {
            return <div key={key}
              className={options.length > 2 ? "w-full my-2" : "inline"}>
              <input
                type="radio"
                readOnly={readOnly}
                id={option.value}
                value={option.value}
                className="hidden"
                defaultChecked={key === 0}
                {...register(id as Path<T>, {
                  required,
                })}
                name={id}
              />
              <label
                htmlFor={option.value}
                className={`${key === 1 && options.length === 2 ? "ml-2" : ""}
                  ${options.length > 2 ? "w-full block" : ""}
                  button button--small button--light cursor-pointer`}
              >
                {option.label}
              </label>
            </div>
          })}
        </div>
      </div>
    );
  };
