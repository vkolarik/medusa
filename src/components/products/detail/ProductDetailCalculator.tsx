import { SubmitButton } from "@components/SubmitButton"
import { Form } from "@components/forms/Form"
import { productDetailCalculator } from "@data/forms"
import { IProductCalculator } from "modules/Product"
import Image from "next/image"
import { FC } from "react"
import { useForm } from "react-hook-form"

export const ProductDetailCalculator: FC<{ image: string }> = ({ image }) => {
  // TODO: jak se bude delat kalkulacka napriklad pro tricka, kalhoty, doplnky? nemuze byt jedna univerzalni - i tabulka musi byt jina

  // TODO: zprovoznit kalkulacku
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IProductCalculator>()

  const onSubmit = (data: IProductCalculator): void => {
    //
  }

  return (
    <div className="flex gap-8 pt-8">
      <div className="relative w-full lg:block hidden">
        <Image
          src={image}
          alt="Trend Trove - kalkulačka"
          className="object-contain"
          layout="fill"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="basic-form basic-form--no-shadow basic-form--full-width"
      >
        <h1 className="font-semibold lg:text-[27px] md:text-[22px] text-[18px] md:mb-5 mb-3">
          Zjistěte, jaká je Vaše ideální velikost
        </h1>

        <Form
          data={productDetailCalculator}
          register={register}
          errors={errors}
        />

        <div className="flex justify-end">
          <SubmitButton text="Vypočítat" color="light" />
        </div>
      </form>
    </div>
  )
}
