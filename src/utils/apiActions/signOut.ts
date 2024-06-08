"use server"

import { revalidateTag } from "next/cache"
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export async function signOut() {
  cookies().set("_medusa_jwt", "", {
    maxAge: -1,
  })
  const nextUrl = headers().get("next-url")
  const countryCode = nextUrl?.split("/")[1] || ""
  revalidateTag("auth")
  revalidateTag("customer")
  if (nextUrl) {
    redirect(`/${countryCode}/account`)
  }
}
