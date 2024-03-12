"use client"

import { ILink } from "modules/Link";
import { NextPage } from "next";
import * as ROUTES from "@constants/routes"
import { PageHeader } from "@components/PageHeader";
import { useState } from "react";
import { CartForm } from "@components/cart/CartForm";
import { AccountStatus } from "modules/AccountStatus";
import { useAppContext } from "@context/MainContext";
import { ICartItem } from "modules/CartItem";
import { CartItem } from "@components/cart/CartItem";

const CartPage: NextPage = () => {
  const { cartProducts } = useAppContext()
  // TODO: jestli je uzivatel prihlasen, nastavit na active misto guest
  const [accountStatus, setAccountStatus] = useState<AccountStatus>(AccountStatus.GUEST)

  const breadcrumbs: ILink[] = [
    {
      text: "Košík",
      route: ROUTES.GDPR,
    },
  ]

  return <main className="page max-width w-full">

    <PageHeader title={"Košík"} breadcrumbs={breadcrumbs} />
    <div className="flex">
      <div className="h-full border-r border-lightGrey py-5 pr-5 w-1/2">
        <div className="flex items-center gap-3">
          <button className={`${accountStatus === AccountStatus.GUEST ? "button button--small" : "button button--light button--small"}`}
            onClick={() => setAccountStatus(AccountStatus.GUEST)}>Pokračovat bez přihlášení</button>
          {/* TODO: pokud je uziv. prihlaseny, nezobrazovat text prihlasit se, ale neco jineho */}
          <button className={`${accountStatus === AccountStatus.ACTIVE ? "button button--small" : "button button--light button--small"}`}
            onClick={() => setAccountStatus(AccountStatus.ACTIVE)}>Přihlásit se</button>
        </div>

        <CartForm />
      </div>

      <div className="pl-5 py-5 w-1/2 ">
        {cartProducts.map((item: ICartItem, key: number) => {
          return <CartItem key={key}
            item={item} />
        })}
      </div>
    </div>
  </main>
}

export default CartPage