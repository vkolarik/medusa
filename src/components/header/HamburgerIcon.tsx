import { Dispatch, FC, SetStateAction } from 'react'

export const BurgerIcon: FC<{ active: boolean, setActive: Dispatch<SetStateAction<boolean>> }> = ({ 
  active,
  setActive
}) => {
  const toggleMenu = () => {
    setActive(!active)
  }

  return <svg id="hamburger"
    onClick={() => toggleMenu()}
    className={`toggle-svg cursor-pointer w-[30px] ${active ? 'is-open' : ''}`} viewBox="0 0 60 40">
  <g stroke="#161A24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path id="top-line" d="M10,10 L50,10 Z" />
    <path id="middle-line" d="M10,20 L50,20 Z" />
    <path id="bottom-line" d="M10,30 L50,30 Z" />
  </g>
</svg>
}

