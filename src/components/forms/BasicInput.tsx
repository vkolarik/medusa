import { IBasicInput, InputType } from "modules/forms/Inputs"
import { FieldValues, Path } from "react-hook-form"

export const BasicInput: <T extends FieldValues>(
  props: IBasicInput<T>
) => JSX.Element = <T extends FieldValues>({
  placeholder,
  id,
  required,
  pattern,
  register,
  errors,
  type = InputType.TEXT,
  min,
  max,
  minLengthErr,
  maxLengthErr,
  noPaddingOnMobile,
  readOnly,
}: IBasicInput<T>) => {
  const error = errors[id]
  const showLabel = type !== InputType.PASSWORD || !readOnly || id === "new_password";
  const labelContent = type !== InputType.PASSWORD || !readOnly ? placeholder : "Heslo";

  return (
    <div className={`${noPaddingOnMobile ? "md:" : ""} form__input ${showLabel ? "mb-4" : ""}`}>
      {showLabel && (
        <label htmlFor={id}>{labelContent}</label>
      )}

      <input
        className={`${error ? "mb-3" : "mb-0"} ${type === InputType.PASSWORD && readOnly ? "hidden opacity-0 h-0" : ""}`}
        id={id}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        {...register(id as Path<T>, {
          required: readOnly ? false : required,
          pattern,
          maxLength: max,
          minLength: min,
        })}
      />

      {/* error message */}
      {error && error.type === "required" && (
        <p className="h-6 text-left error">{error.message}</p>
      )}

      {error && error.type === "pattern" && (
        <p className="h-6 text-left error">{`${placeholder} nemá správný tvar`}</p>
      )}

      {error && error.type === "minLength" && (
        <p className="h-6 text-left error">{minLengthErr}</p>
      )}

      {error && error.type === "maxLength" && (
        <p className="h-6 text-left error">{maxLengthErr}</p>
      )}
    </div>
  )
}
