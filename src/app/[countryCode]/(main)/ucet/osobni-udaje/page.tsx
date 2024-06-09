"use server"

import { AccountHeader } from "@components/account/AccountHeader"
import { AccountTitle } from "@components/account/AccountTitle"
import { UserInfoFormsContainer } from "@components/account/UserInfoFormsContainer"
import { IUserInfo } from "../../../../../modules/account/UserInfo"
import { NextPage } from "next"
import { getCustomer } from "@utils/apiActions/signUp"
import { notFound } from "next/navigation"

const PersonalInfo: NextPage = async () => {
  const customer = await getCustomer().catch(() => null)

  if (!customer) {
    notFound()
  }

  return (
    <main className="page max-width w-full">
      <AccountHeader />
      <AccountTitle
        title="Osobní údaje"
        subtitle="Na této stránce si můžete zobrazit a upravit Vaše osobní údaje."
      />
      <UserInfoFormsContainer data={customer} />
    </main>
  )
}

export default PersonalInfo
