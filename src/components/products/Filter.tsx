import { Dispatch, FC, SetStateAction } from "react"
export const Filter: FC<{
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}> = ({ isActive, setIsActive }) => {
  return (
    <div
      className={`fixed top-0 transform left-0 h-full w-[25rem] bg-white shadow-2xl z-50 duration-500 ${
        isActive ? "" : "-translate-x-full"
      }`}
    >
      <svg
        className="absolute top-5 right-5 cursor-pointer"
        onClick={() => setIsActive(false)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="black"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  )
}
