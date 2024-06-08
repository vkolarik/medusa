import { SubmitButton } from "@components/SubmitButton"
import { Form } from "@components/forms/Form"
import { filterForm } from "@data/forms"
import { useQuery } from "@utils/useQuery"
import { IFilterForm } from "modules/forms/FilterForm"
import { Dispatch, FC, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { IconContext } from "react-icons"
import { GrClose } from "react-icons/gr"

export const Filter: FC<{
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}> = ({ isActive, setIsActive }) => {
  const { getQueryString, createQueryStringArray, resetQueries } = useQuery()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFilterForm>({
    defaultValues: {
      price:
        (getQueryString("price") as unknown as (string | undefined)[]) ??
        ([] as (string | undefined)[]),
      sizes:
        (getQueryString("sizes") as unknown as (string | undefined)[]) ??
        ([] as (string | undefined)[]),
      sorting: getQueryString("sorting") ?? "default",
    },
  })

  const onSubmit: any = async (data: IFilterForm, e: Event) => {
    resetQueries()

    const query = Object.entries(data)
      .filter(([_, value]) => value && value.length > 0) 
      .map(([key, value]) => ({
      name: key,
      value,
    }))

    createQueryStringArray(query)
  }

  const onReset = () => {
    reset({
      price: [],
      sizes: [],
      sorting: "default",
    })

    resetQueries()
  }

  return (
    <div
      className={`fixed top-0 transform left-0 h-full lg:w-[25rem] bg-white shadow-2xl z-50 duration-500 ${
        isActive ? "" : "-translate-x-full"
      }`}
    >
      <div
        className="flex justify-end mb-2 border-b border-lightGrey py-2 pr-5"
        onClick={() => setIsActive(false)}
      >
        <IconContext.Provider
          value={{ size: "20px", className: "cursor-pointer" }}
        >
          <div>
            <GrClose />
          </div>
        </IconContext.Provider>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="basic-form basic-form--filter overflow-y-auto overflow-x-hidden max-h-full"
      >
        <Form data={filterForm} register={register} errors={errors} />

        <div className="flex justify-end gap-2">
          <button 
            type="button" 
            className="button button--small button--light" 
            onClick={onReset}
          >
            Resetovat
          </button>
          
          <SubmitButton text="Filtrovat" color="dark" />
        </div>
      </form>
    </div>
  )
}
