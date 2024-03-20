"use client"

import { userInfoForms } from "@data/userInfoForms";
import { IUserInfo, IUserInfoForm } from "modules/UserInfo";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { SubmitButton } from "@components/SubmitButton";
import { Form } from "@components/forms/Form";
import { personalInfoForm } from "@data/forms";

export const UserInfoFormsContainer: FC<{ data: IUserInfo }> = ({ data }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [editedForm, setEditedForm] = useState<number | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserInfo>()

  const onSubmit: any = async (data: IUserInfo, e: Event) => {
    e.preventDefault()
    setLoading(true)
    setIsDisabled(true)
    console.log(data)

    // toast.success('Úprava informací byla úspěšná')
    // toast.error('ddddddd')
    // setIsDisabled(false)
    // setLoading(false)

    setEditedForm(null)
  }

  const handleEditedForm = (key: number) => {
    setEditedForm(key)
  }

  useEffect(() => {
    if (!data) return
    Object.entries(data).forEach(d => setValue(d[0] as keyof IUserInfo, d[1]))
  }, [data, setValue])
  
  return (
    <div className="lg:-mt-8">
      <form onSubmit={handleSubmit(onSubmit)}
        className="basic-form form--account md:space-y-8 space-y-4">
        {userInfoForms.map((form: IUserInfoForm, key: number) => {
          const { icon, values } = form
          
          return <div key={key}
            className={`${key === 1 ? "md:pt-8 pt-4 border-t border-b md:pb-0 pb-4" : ""} md:flex items-start 2xl:gap-x-16 lg:gap-x-10 gap-x-5`}>
              <Image src={icon}
                alt={`Formular - ${key}`}
                width={50}
                height={50}
                className="md:block hidden" />
              
              <div className={`${key === 0 ? "grid 2xl:grid-cols-4 grid-cols-2 gap-x-5" : ""} w-full`}>
                <Form data={personalInfoForm.filter(p => values.includes(p.id))}
                    register={register}
                    errors={errors}
                    readOnly={editedForm !== key}
                  />
              </div> 

              <div className="flex justify-end">
                {editedForm !== key
                  ? <button className="button button--small md:w-[13rem] w-[12rem] button--light"
                      type="button"
                      onClick={() => handleEditedForm(key)}>Upravit</button>
                  : <SubmitButton
                      text="Upravit"
                      loading={loading}
                      isDisabled={isDisabled}
                    />}
              </div>
            </div>
        })}
      </form>
    </div>
  )

}
