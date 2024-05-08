import { FormEvent, useEffect } from "react"
import { useRouter } from "next/navigation"
import CustomSearchBoxWrapper, { CustomControlledSearchBoxProps } from "@components/search/CustomSearchBoxWrapper"
import { FaTimes } from "react-icons/fa"
import { useAppContext } from "@context/MainContext"
import { useFormState } from "react-dom"
import { getCartAction } from "../../app/actions"


const CustomControlledSearchBox = ({
                                     inputRef,
                                     onChange,
                                     onReset,
                                     onSubmit,
                                     placeholder,
                                     value,
                                     ...props
                                   }: CustomControlledSearchBoxProps) => {
  const { showSearch, setShowSearch } = useAppContext()


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
          className="border border-lightGrey xl:w-[20rem] lg:w-[15rem] md:w-[13rem] w-full relative flex py-1 lg:px-4 px-2 lg:mb-0 mb-2"
          noValidate onSubmit={handleSubmit} onReset={handleReset}>

      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        placeholder={placeholder}
        spellCheck={false}
        value={value}
        onChange={onChange}
        onFocus={() => setShowSearch(true)}
        onBlur={() => setShowSearch(false)}
        className="w-full relative outline-none pr-4 xl:text-[16px] lg:text-[14px] text-[13px] font-normal"
      />
      {value && (
        <button type="submit" onClick={handleReset}>
          <FaTimes className="w-4" />
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
