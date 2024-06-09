import { ComputeAmountParams, FormatAmountParams, RegionInfo } from "medusa-react"
import { isEmpty } from "./isEmpty"
import { Cart, LineItem } from "@medusajs/medusa"

export const calculateTotalPrice = (cartProducts: LineItem[], cart: null | Omit<Cart, "refundable_amount" | "refunded_total">) => {
  const getFormattedPrice = (price: number): number => {
    const p = formatAmount({
      amount: price || 0,
      region: cart?.region as RegionInfo,
      includeTaxes: false,
    })

    return Number((p.slice(4, -3).replace(",", "")))
  }

  return cartProducts.reduce((acc, currentItem: LineItem) => {
    return acc + getFormattedPrice(currentItem?.subtotal ?? 0) * (currentItem.quantity ?? 1)
  }, 0)
}

export const formatAmount = ({
  amount,
  region,
  includeTaxes = true,
  ...rest
}: FormatAmountParams) => {
  const taxAwareAmount = computeAmount({
    amount,
    region,
    includeTaxes,
  })

  return convertToLocale({
    amount: taxAwareAmount,
    currency_code: region?.currency_code,
    ...rest,
  })
}

export const computeAmount = ({
  amount,
  region,
  includeTaxes = true,
}: ComputeAmountParams) => {
  const toDecimal = convertToDecimal(amount)
  const taxRate = includeTaxes ? getTaxRate(region) : 0
  const amountWithTaxes = toDecimal * (1 + taxRate)
  return amountWithTaxes
}

const convertToLocale = ({
  amount,
  currency_code,
  minimumFractionDigits,
  maximumFractionDigits,
  locale = "en-US",
}: ConvertToLocaleParams) => {
  return currency_code && !isEmpty(currency_code)
    ? new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency_code,
        minimumFractionDigits,
        maximumFractionDigits,
      }).format(amount)
    : amount.toString()
}

const convertToDecimal = (amount: number) => {
  return Math.floor(amount) / 100
}

const getTaxRate = (region?: RegionInfo) => {
  return region && !isEmpty(region) ? region?.tax_rate / 100 : 0
}

type ConvertToLocaleParams = {
  amount: number
  currency_code: string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  locale?: string
}