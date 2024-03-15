import { ISelect } from "modules/Inputs";
import { IState } from "modules/Register";
import { FieldValues, Path } from "react-hook-form";

export const Select: <T extends FieldValues>(
  props: ISelect<T>
) => JSX.Element = <T extends FieldValues>({
  placeholder,
  id,
  required,
  register,
  errors,
  options,
  noPaddingOnMobile
}: ISelect<T>) => {
    const error = errors[id];

    return (
      <div className={`${noPaddingOnMobile ? "md:" : ""}mb-4 form__input`}>
        <label htmlFor={id}>{placeholder}</label>
        <select
          id={id}
          {...register(id as Path<T>, {
            required,
          })}
        >
          {options && options.map((state: IState, key: number) => {
            const { text, code } = state
            return (
              <option key={key} value={code}>
                {text}
              </option>
            )
          })}
        </select>
        {/* error message */}
        {error && error.type === "required" && (
          <p className="h-6 text-left error">{error.message}</p>
        )}
      </div>
    );
  };
