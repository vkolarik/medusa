import { IBasicInput, InputType } from "modules/BasicInput";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

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
  maxLengthErr
}: IBasicInput<T>) => {
    const error = errors[id];

    return (
      <div className="mb-4 form__input">
        <label htmlFor={id}>{placeholder}</label>

        <input
          className={`${error ? "mb-3" : "mb-0"}`}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id as Path<T>, {
            required,
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
    );
  };
