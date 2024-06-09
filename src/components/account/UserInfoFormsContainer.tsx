"use client"

import { userInfoForms } from "@data/userInfoForms"
import { FC, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Image from "next/image"
import { SubmitButton } from "@components/SubmitButton"
import { Form } from "@components/forms/Form"
import { personalInfoForm, addressInputs } from "@data/forms"
import { IUserInfoForm } from "modules/account/UserInfo"
import {
  AddressPayload,
  Customer,
  StorePostCustomersCustomerReq,
} from "@medusajs/medusa"
import { useAppContext } from "@context/MainContext"
import { Loading } from "@components/Loading"
import { editCustomer, updateCustomerPassword } from "@utils/apiActions/getCustomerData"
import { useFormState } from "react-dom"
import { toast } from "sonner"

export interface IUserInfoEdit extends StorePostCustomersCustomerReq {
  new_password?: string;
  old_password?: string;
  confirm_password?: string;
}

export const UserInfoFormsContainer: FC<{
  data: Omit<Customer, "password_hash">
}> = ({ data }) => {
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  const [editedForm, setEditedForm] = useState<number | null>(null)
  const { setLoading, loading } = useAppContext()

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit
  } = useForm<IUserInfoEdit>()

  const onSubmit: any = async (
    data: IUserInfoEdit,
    e: Event
  ) => {
    e.preventDefault()
    setLoadingBtn(true)
    setEditedForm(null)

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    editedForm === 2 ? formActionPass(formData) : formAction(formData)
  }

  const [message, formAction] = useFormState(editCustomer, null)
  const [state, formActionPass] = useFormState(updateCustomerPassword, {
    customer: data,
    success: false,
    error: false,
  })
  
  useEffect(() => {
    const handleMessages = () => {
      if (message) {
        if (message.success) {
          toast.success("Data byla úspěšně změněna");
          setEditedForm(null);
        } else {
          toast.error("Data se nepodařilo změnit");
        }
        setLoadingBtn(false)
      }
  
      if (state.error) {
        toast.error(state.error);
        setLoadingBtn(false)
      }
  
      if (state.success) {
        toast.success("Heslo bylo úspěšně změněno");
        setEditedForm(null)
        setLoadingBtn(false)
      }
    };
  
    handleMessages();
  }, [message, state]);  

  const handleEditedForm = (key: number) => {
    setEditedForm(key)
  }

  useEffect(() => {
    if (!data) return;
  
    setLoading(true)
    const dataEntries = Object.entries(data);

    dataEntries.forEach(([key, value], index) => {
      // If the key is "billing_address", process the address
      if (key === "billing_address") {
        console.log(key, value)
        if (value) {
          // If the address is stored, set values
          const address = value as AddressPayload;
          Object.entries(address).forEach(([addressKey, addressValue]) => {
            setValue(addressKey as keyof StorePostCustomersCustomerReq, addressValue ?? "-");
          });
        } else {
          // If the address is not stored, show "-"
          addressInputs.map(a => a.id).forEach((id) => {
            setValue(id as keyof StorePostCustomersCustomerReq, "-");
          });
        }
      } else {
        // Set value for the other keys
        setValue(key as keyof StorePostCustomersCustomerReq, (value ?? "-") as string);
      }

      if (index === dataEntries.length - 1){
        setLoading(false)
      }
    });
  }, [data, setValue]);
  
  return (
    <div className="lg:-mt-8">
      {loading ? <Loading /> : <form
        onSubmit={handleSubmit(onSubmit)}
        className="basic-form form--account md:space-y-8 space-y-4"
      >
        {userInfoForms.map((form: IUserInfoForm, key: number) => {
          const { icon, values } = form

          return (
            <div
              key={key}
              className={`${
                key === 1 ? "md:pt-8 pt-4 border-t border-b md:pb-0 pb-4" : ""
              } md:flex items-start 2xl:gap-x-16 lg:gap-x-10 gap-x-5`}
            >
              <Image
                src={icon}
                alt={`Formular - ${key}`}
                width={50}
                height={50}
                className="md:block hidden"
              />

              <div
                className={`${
                  key === 0 ? "grid 2xl:grid-cols-4 grid-cols-2 gap-x-5" : ""
                } w-full`}
              >
                <Form
                  data={personalInfoForm.filter((p) => values.includes(p.id))}
                  register={register}
                  errors={errors}
                  readOnly={editedForm !== key}
                />
              </div>

              <div className="flex justify-end">
                {editedForm !== key ? (
                  <button
                    className="button button--small md:w-[13rem] w-[12rem] button--light"
                    type="button"
                    onClick={() => handleEditedForm(key)}
                  >
                    Upravit
                  </button>
                ) : (
                  <SubmitButton
                    text="Upravit"
                    loading={loadingBtn}
                  />
                )}
              </div>
            </div>
          )
        })}
      </form>}
    </div>
  )
}
