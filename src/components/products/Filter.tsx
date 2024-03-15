import { SubmitButton } from "@components/SubmitButton"
import { Form } from "@components/forms/Form"
import { filterForm } from "@data/forms"
import { IFilterForm } from "modules/FilterForm"
import { Dispatch, FC, SetStateAction } from "react"
import { useForm } from "react-hook-form"

export const Filter: FC<{
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}> = ({ isActive, setIsActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFilterForm>()

  const onSubmit: any = async (data: IFilterForm, e: Event) => {
    e.preventDefault()
    console.log(data)
    // TODO: vyuzit take loading z contextu (viz kosik)
  }

  return (
    <div
      className={`fixed top-0 transform left-0 h-full lg:w-[25rem] bg-white shadow-2xl z-50 duration-500 ${
        isActive ? "" : "-translate-x-full"
      }`}
    >
      <div className="w-full fixed top-0 right-0 bg-white h-[3rem] border-b border-lightGrey z-50">
        <svg
          className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
          onClick={() => setIsActive(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}
        className="basic-form basic-form--filter overflow-y-auto overflow-x-hidden max-h-full">

        <Form data={filterForm}
          register={register}
          errors={errors} />

        <div className="flex justify-end">
          <SubmitButton text="Filtrovat"
            color="dark" />
        </div>
      </form>
    </div>
  )
}
