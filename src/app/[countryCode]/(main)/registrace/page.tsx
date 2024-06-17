"use server"
import {NextPage} from "next"
import CustomRegisterForm from "@components/account/CustomRegisterForm"
import {redirect} from "next/navigation"
import { getCustomer } from "@utils/apiActions/signUp"

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
