"use server"

import { AccountHeader } from "@components/account/AccountHeader"
import { AccountOrdersContainer } from "@components/account/AccountOrdersContainer"
import { AccountTitle } from "@components/account/AccountTitle"
import { accountOrders } from "@data/accountOrders"
import { listCustomerOrders } from "@utils/apiActions/getOrdersData"
import { getCustomer } from "@utils/apiActions/signUp"
import { NextPage } from "next"
import { notFound } from "next/navigation"

const Orders: NextPage = async () => {
  const customer = await getCustomer().catch(() => null)
  const orders = (await listCustomerOrders().catch(() => null)) || null

  if (!customer) {
    notFound()
  }

  return (
    <main className="page max-width w-full">
      <AccountHeader />
      <AccountTitle
        title="Objednávky"
        subtitle="Na této stránce si můžete zobrazit Vaše staré objednávky."
      />
      <AccountOrdersContainer data={orders ?? []} />
    </main>
  )
}

export default Orders
