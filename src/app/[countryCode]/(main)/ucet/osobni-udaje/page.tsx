"use client"

import { AccountHeader } from "@components/account/AccountHeader";
import { AccountTitle } from "@components/account/AccountTitle";
import { UserInfoFormsContainer } from "@components/account/UserInfoFormsContainer";
import { IUserInfo } from "modules/UserInfo";
import { NextPage } from "next";

const PersonalInfo: NextPage = () => {

  // TODO: remove and use data from db
  const data: IUserInfo = {
    id: 1,
    name: "John",
    email: "john@example.com",
    surname: "Doe",
    password: "password123",
    state: "cz",
    city: "Los Angeles",
    street: "Main Street 123",
    zip_code: 90001,
    cadastral_number: 1234,
    phone: "123456789"
  };

  return <main className="page max-width w-full">
    <div className="md:mt-8 mt-5">
        
        <AccountHeader />
        <AccountTitle title="Osobní údaje"
          subtitle="Na této stránce si můžete zobrazit a upravit Vaše osobní údaje." />
        <UserInfoFormsContainer data={data} />
      </div>
  </main>
}

export default PersonalInfo
