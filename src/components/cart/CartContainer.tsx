"use client"

import { ILink } from "modules/Link"
import * as ROUTES from "@constants/routes"
import { PageHeader } from "@components/PageHeader"
import { FC, useEffect, useState } from "react"
import { CartForm } from "@components/cart/CartForm"
import { AccountStatus } from "modules/account/AccountStatus"
import { useAppContext } from "@context/MainContext"
import { ProductSummary } from "@components/products/ProductSummary"
import { calculateTotalPrice } from "@utils/prices"
import { useForm } from "react-hook-form"
import { SubmitButton } from "@components/SubmitButton"
import { EmptyCart } from "@components/cart/EmptyCart"
import { Loading } from "@components/Loading"
import { getCartAction } from "@utils/apiActions/actions"
import { AddressPayload, Cart, Customer, LineItem } from "@medusajs/medusa"
import { useFormState } from "react-dom"
import { getCart } from "@utils/apiActions/cart"
import { addressInputs } from "@data/forms"
import { useRouter } from "next/navigation"
import { ICartForm } from "modules/cart/CartForms"
import { finishOrder, setPaymentMethod } from "@utils/apiActions/checkout"

type Props = {
  startCart: null | Omit<Cart, "refundable_amount" | "refunded_total">
  customer: Omit<Customer, "password_hash"> | null
}

const CartContainer: FC<Props> = ({ startCart, customer }) => {
  const [message, formAction] = useFormState(finishOrder, {
    cartId: startCart?.id as string
  })
  const deliveryPrice = 125
  const { setCartProductsSize, loading, setLoading } = useAppContext()

  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ICartForm>()

  const [cart, dispatchCart] = useFormState(() => getCartAction(), startCart)
  const { updated, setUpdated } = useAppContext()
  const [cartItems, setCartItems] = useState<LineItem[]>([])

  const [accountStatus, setAccountStatus] = useState<AccountStatus>(
    customer ? AccountStatus.ACTIVE : AccountStatus.GUEST
  )

  const breadcrumbs: ILink[] = [
    {
      text: "Košík",
      route: ROUTES.GDPR,
    },
  ]


  const onSubmit: any = async (data: ICartForm, e: Event) => {
    e.preventDefault()
    setBtnLoading(true)

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    console.log(formData)
    console.log("----------- try finish order -----------")
    console.log("----------- "+cart?.payment_session+" -----------")

    finishOrder({
      cartId: cart?.id as string
    }, formData)

    router.push('/kosik/dekujeme', { scroll: false })
  }

  useEffect(() => {
    if (message !== null) console.log(message)
  }, [message])

  useEffect(() => {
    if (!customer) return;
    const dataEntries = Object.entries(customer);

    dataEntries.forEach(([key, value], index) => {
      // If the key is "billing_address", process the address
      if (key === "billing_address") {
        if (value) {
          // If the address is stored, set values
          const address = value as AddressPayload;
          Object.entries(address).forEach(([addressKey, addressValue]) => {
            setValue(addressKey as keyof ICartForm, addressValue ?? "-");
          });
        } else {
          // If the address is not stored, show "-"
          addressInputs.map(a => a.id).forEach((id) => {
            setValue(id as keyof ICartForm, "-");
          });
        }
      } else {
        // Set value for the other keys
        setValue(key as keyof ICartForm, (value ?? "-") as string);
      }
    });
  }, [customer, setValue]);

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let currentCart = await getCart(cart?.id ?? "")
        const items = currentCart?.items ?? []
        setCartItems(items)
        setCartProductsSize(
          items?.reduce((acc, item) => {
            return acc + (item.quantity || 0)
          }, 0) || 0
        )
        setLoading(false)
      } catch (error) {
        console.error("Error fetching cart:", error)
        setLoading(false)
      }
    }

    fetchCart()
  }, [cart?.id, updated])

  const payment = watch("payment");

  useEffect(() => {
    const updatePayment = async () => {
      if (payment) {
        await updatePaymentMethod(payment);
      }
    };
  
    updatePayment();
  }, [payment]);  

  const updatePaymentMethod = async (value: string) => {
    await setPaymentMethod(value);
  };


  const [cartSize, setCartSize] = useState(cartItems.length || 0);

  useEffect(() => {
    // Calculate the total number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartSize(totalItems);
  }, [cartItems]);

  return (
    <main className="page max-width w-full">
      {loading ? <Loading /> : cart && cart.items.length > 0 && cartSize > 0 ? (
        <>
          <PageHeader title={"Košík"} breadcrumbs={breadcrumbs} />
          <form
            className="flex h-full lg:flex-row flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="h-full lg:border-r border-lightGrey py-5 xl:pr-10 pr-5 lg:w-1/2 w-full">
              {!customer ? (
                <div className="flex items-center gap-3">
                  <button
                    className="button button--small"
                    onClick={() => setAccountStatus(AccountStatus.GUEST)}
                    type="button"
                  >
                    Pokračovat bez přihlášení
                  </button>
                  <button
                    className="button button--light button--small"
                    onClick={() => router.push(ROUTES.LOGIN)}
                    type="button"
                  >
                    Přihlásit se
                  </button>
                </div>
              ) : (
                <button className="button button--small pointer-events-none" type="button">
                  Přihlášený uživatel
                </button>
              )}

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
                        setUpdated={() => setUpdated(true)}
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
