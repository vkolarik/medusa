import type { Metadata } from "next"
import "@styles/main.scss"
import { Footer } from "@components/Footer"
import { Toaster } from "sonner"
import { AppWrapper } from "@context/MainContext"
import { HeaderWrapper } from "@components/header/HeaderWrapper"

export const metadata: Metadata = {
  title: "Trend Trove - Stylové oblečení, boty a doplňky",
  description:
    "Objevte široký výběr stylového oblečení, bot a doplňků v Trend Trove. Nejnovější módní trendy pro muže, ženy a děti za skvělé ceny.",
  keywords: [
    "Trend Trove",
    "oblečení",
    "boty",
    "doplňky",
    "móda",
    "stylové oblečení",
    "muži",
    "ženy",
    "děti",
    "módní trendy",
    "eshop",
  ],
}

export default async function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="cs">
    <AppWrapper>
      <body className="flex justify-between min-h-screen flex-col">
      <HeaderWrapper />
      <Toaster richColors closeButton />
      <div className="flex-grow flex items-center lg:mt-10 mt-20">
        {children}
      </div>
      <Footer />
      </body>
    </AppWrapper>
    </html>
  )
}
