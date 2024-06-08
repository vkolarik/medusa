"use client"

import { ILink } from "modules/Link"
import * as ROUTES from "@constants/routes"
import { PageHeader } from "@components/PageHeader"
import { FC, useEffect, useState } from "react"
import { CartForm } from "@components/cart/CartForm"
import { AccountStatus } from "modules/account/AccountStatus"
import { useAppContext } from "@context/MainContext"
import { ProductSummary } from "@components/products/ProductSummary"
import { calculateTotalPrice, formatAmount } from "@utils/prices"
import { ICartForm } from "modules/cart/CartForms"
import { useForm } from "react-hook-form"
import { SubmitButton } from "@components/SubmitButton"
import { EmptyCart } from "@components/cart/EmptyCart"
import { Loading } from "@components/Loading"
import { getCartAction } from "@utils/apiActions/actions"
import { Cart, LineItem } from "@medusajs/medusa"
import { useFormState } from "react-dom"
import { getCart } from "@utils/apiActions/cart"
import { RegionInfo } from "medusa-react"

type Props = {
  startCart: null | Omit<Cart, "refundable_amount" | "refunded_total">
}

const CartContainer: FC<Props> = ({ startCart }) => {
  const deliveryPrice = 125
  const { setCartProductsSize, loading, setLoading } = useAppContext()
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  // TODO: jestli je uzivatel prihlasen, nastavit na active misto guest
  const [accountStatus, setAccountStatus] = useState<AccountStatus>(
    AccountStatus.GUEST
  )

  const breadcrumbs: ILink[] = [
    {
      text: "Košík",
      route: ROUTES.GDPR,
    },
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICartForm>()

  const [cart, dispatchCart] = useFormState(
    () => getCartAction(),
    startCart,
  )
  const [updated, setUpdated] = useState<number>(0)
  const [cartItems, setCartItems] = useState<LineItem[]>([])

  const onSubmit: any = async (data: ICartForm, e: Event) => {
    e.preventDefault()
    setIsDisabled(true)
    setBtnLoading(true)

    // toast.success('Registrace byla úspěšná')
    // toast.error('ddddddd')
    // setBtnText('Přihlásit se')
    // setIsDisabled(false)
  }

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let currentCart = await getCart(cart?.id ?? "");
        const items = currentCart?.items ?? []
        setCartItems(items);  
        setCartProductsSize(items?.reduce((acc, item) => {
          return acc + (item.quantity || 0);
        }, 0) || 0)
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [cart?.id, updated]);

  const getFormattedPrice = (price: number): number => {
    const p = formatAmount({
      amount: price || 0,
      region: cart?.region as RegionInfo,
      includeTaxes: false,
    })

    console.log((p.slice(4, -3).replace(",", "")))
    return Number((p.slice(4, -3).replace(",", "")))
  }
  
  return (
    <main className="page max-width w-full">
      {loading && <Loading />}

      {cart && cart.items.length > 0 ? (
        <>
          <PageHeader title={"Košík"} breadcrumbs={breadcrumbs} />
          <form
            className="flex h-full lg:flex-row flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="h-full lg:border-r border-lightGrey py-5 xl:pr-10 pr-5 lg:w-1/2 w-full">
              <div className="flex items-center gap-3">
                <button
                  className={`${
                    accountStatus === AccountStatus.GUEST
                      ? "button button--small"
                      : "button button--light button--small"
                  }`}
                  onClick={() => setAccountStatus(AccountStatus.GUEST)}
                  type="button"
                >
                  Pokračovat bez přihlášení
                </button>
                {/* TODO: pokud je uziv. prihlaseny, nezobrazovat text prihlasit se, ale neco jineho */}
                <button
                  className={`${
                    accountStatus === AccountStatus.ACTIVE
                      ? "button button--small"
                      : "button button--light button--small"
                  }`}
                  onClick={() => setAccountStatus(AccountStatus.ACTIVE)}
                  type="button"
                >
                  Přihlásit se
                </button>
              </div>

              <CartForm errors={errors} register={register} />
            </div>

            <div className="xl:pl-10 pl-5 py-5 lg:w-1/2 flex flex-col w-full">
              <div className="h-full">
                <div className="pb-5 border-b border-lightGrey">
                  {cartItems.map((item: LineItem, key: number) => {
                    return (
                      <ProductSummary
                        key={key}
                        item={item}
                        canBeDeleted={true}
                        setLoading={setLoading}
                        cart={cart}
                        setUpdated={() => setUpdated(updated + 1)}
                      />
                    )
                  })}
                </div>
                <div className="space-y-2 pt-5">
                  <div className="flex justify-between w-full items-center font-medium">
                    <p className="lg:text-[15px] md:text-[14px] text-[13px]">
                      Součet
                    </p>
                    <p className="lg:text-[15px] md:text-[14px] text-[13px]">
                      {calculateTotalPrice(cartItems, cart) + " Kč"}
                    </p>
                  </div>
                  <div className="flex justify-between w-full items-center font-medium">
                    <p className="lg:text-[15px] md:text-[14px] text-[13px]">
                      Doprava
                    </p>
                    <p className="lg:text-[15px] md:text-[14px] text-[13px]">
                      {deliveryPrice + " Kč"}
                    </p>
                  </div>
                  <div className="flex justify-between w-full items-center font-medium lg:text-[35px] md:text-[23px] text-[20px]">
                    <p className="lg:text-[19px] md:text-[17px] text-[15px]">
                      Celkem
                    </p>
                    <p className="lg:text-[19px] md:text-[17px] text-[15px]">
                      {calculateTotalPrice(cartItems, cart) +
                        deliveryPrice +
                        " Kč"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end lg:mt-0 mt-8">
                <SubmitButton
                  isDisabled={isDisabled}
                  loading={btnLoading}
                  text="Dokončit objednávku"
                />
              </div>
            </div>
          </form>
        </>
      ) : (
        <EmptyCart />
      )}
    </main>
  )
}

export default CartContainer
