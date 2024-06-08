"use server"

import { StorePostAuthReq } from "@medusajs/medusa"
import { medusaClient } from "../config"
import { cookies } from "next/headers"
import { revalidateTag } from "next/cache"

export async function getToken(credentials: StorePostAuthReq) {
  return medusaClient.auth
    .getToken(credentials, {
      next: {
        tags: ["auth"],
      },
    })
    .then(({ access_token }) => {
      access_token &&
        cookies().set("_medusa_jwt", access_token, {
          maxAge: 60 * 60 * 24 * 7,
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        })
      return access_token
    })
    .catch(() => {
      throw new Error("Wrong email or password.")
    })
}

export async function logCustomerIn(
  _currentState: unknown,
  formData: FormData
) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    await getToken({ email, password }).then(() => {
      revalidateTag("customer")
    })
  } catch (error: any) {
    return error.toString()
  }
}
