import { IRadioInput, IRadioInputOption } from "modules/Inputs";
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
  noPaddingOnMobile
}: IRadioInput<T>) => {

    return (
      <div className={`${noPaddingOnMobile ? "md:" : ""}mb-4 form__input`}>
        <label htmlFor={id}>{placeholder}</label>
        <div>
          {options.map((option: IRadioInputOption, key: number) => {
            return <React.Fragment key={key}>
              <input
                type="radio"
                id={option.value}
                value={option.value}
                className="hidden"
                defaultChecked={true}
                {...register(id as Path<T>, {
                  required,
                })}
                name={id}
              />
              <label
                htmlFor={option.value}
                className={`${key === 1 ? "ml-2" : ""} button button--small button--light cursor-pointer`}
              >
                {option.label}
              </label>
            </React.Fragment>
          })}
        </div>
      </div>
    );
  };
