"use server"
import {NextPage} from "next"
import CustomRegisterForm from "@components/account/CustomRegisterForm"
import {getCustomer} from "@lib/data"
import {redirect} from "next/navigation"

const Register: NextPage = async () => {
    const customer = await getCustomer().catch(() => null)

    if (customer) redirect("/ucet/objednavky")

    return (
        <>
            <main className="max-width md:py-36 py-12 w-full">
                <CustomRegisterForm/>
            </main>
        </>

    )
}

export default Register
