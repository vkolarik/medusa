import { FormEvent } from "react"
import { useRouter } from "next/navigation"
import CustomSearchBoxWrapper, { CustomControlledSearchBoxProps } from "@components/search/CustomSearchBoxWrapper"


const CustomControlledSearchBox = ({
                                     inputRef,
                                     onChange,
                                     onReset,
                                     onSubmit,
                                     placeholder,
                                     value,
                                     ...props
                                   }: CustomControlledSearchBoxProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (onSubmit) {
      onSubmit(event)
    }

    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const handleReset = (event: FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    onReset(event)

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (

    <form action=""
          className="rounded-xl border border-grey xl:w-[20rem] lg:w-[15rem] md:w-[13rem] w-full relative flex py-1 lg:px-4 px-2 lg:mb-0 mb-2"
          noValidate onSubmit={handleSubmit} onReset={handleReset}>

      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        placeholder={placeholder}
        spellCheck={false}
        value={value}
        onChange={onChange}
        className="w-full relative outline-none pr-4 xl:text-[16px] lg:text-[14px] text-[13px]"
      />
      {value && (
        <button type="submit" onClick={handleReset}>
          X
        </button>
      )
      }
    </form>

  )
}

const CustomSearchBox = () => {
  const router = useRouter()

  return (
    <CustomSearchBoxWrapper>
      {(props) => {
        return (
          <>
            <CustomControlledSearchBox {...props} />
          </>
        )
      }}
    </CustomSearchBoxWrapper>
  )
}

export default CustomSearchBox
