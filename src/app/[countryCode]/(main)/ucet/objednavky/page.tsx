"use client"

import { AccountHeader } from "@components/account/AccountHeader"
import { AccountOrdersContainer } from "@components/account/AccountOrdersContainer"
import { AccountTitle } from "@components/account/AccountTitle"
import { accountOrders } from "@data/accountOrders"
import { NextPage } from "next"

const Orders: NextPage = () => {
  return (
    <main className="page max-width w-full">
      <AccountHeader />
      <AccountTitle
        title="Objednávky"
        subtitle="Na této stránce si můžete zobrazit Vaše staré objednávky."
      />
      <AccountOrdersContainer data={accountOrders} />
    </main>
  )
}

export default Orders
