import { FC } from 'react'
import Image from 'next/image'
import cartIcon from '../../../public/images/icons/cart.svg'
import Link from 'next/link'
import * as ROUTES from '@constants/routes'
import { cartData } from '@data/cart'
import { ICartItem } from '@interfaces/CartItem'
import { truncate } from '@utils/truncate'

export const HeaderCart: FC = () => {
  const totalPrice = cartData.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.amount;
  }, 0)

  return  <li className='dropdown cursor-pointer relative z-[999]'>
  <Link className='cart-icon'
    href={ROUTES.CART}
    data-items={cartData.length}>
    <Image src={cartIcon.src}
      alt="Trend Trove - Košík"
      width={25}
      height={25} />
  </Link>
  <div className="dropdown__content hidden absolute right-0 z-50 min-w-[300px] lg:pt-5 duration-300">
    {cartData.length > 0 ? <div className='shadow-2xl bg-white px-4'>
      <span className='font-semibold text-center block py-2 text-[16px] border-b border-lightGrey uppercase'>Váš nákupní košík</span>
      <ul className="space-y-2 py-2 max-h-[350px] overflow-y-auto pr-1">
        {/* TODO: get items from session */}
        {cartData.map((item: ICartItem, key: number) => {
          const { title, amount, price, image, size, color } = item
          return <li key={key}
            className='flex gap-2'>
              <Image src={image}
                alt='title'
                className='cart-image'
                width={80}
                height={80}/>

              <div className='space-y-1'>
                <p>{truncate(title, 25)}</p>
                <p className='small'>Počet: {amount} ks</p>
                <p className='small'>Velikost: {size}</p>
                <p className='small font-semibold text-right'>Cena: {price} Kč</p>
              </div>
            </li>
        })}
      </ul>

      <p className='border-t border-lightGrey pt-2 text-right font-semibold'>Cena celkem: {totalPrice} Kč</p>
      <div className='text-center pt-3 pb-5'>
        <Link className='button block'
          href={ROUTES.CART}>Přejít do košíku</Link>
      </div>
    </div> : <div className='shadow-2xl bg-white px-4'>
      <span className='font-semibold text-center block py-2 text-[16px] border-b border-lightGrey uppercase'>Váš nákupní košík je prázdný</span>
      <div className='text-center pt-3 pb-5'>
        <Link className='button block'
          href={ROUTES.HOME}>Jít nakupovat</Link>
      </div>
    </div>}
  </div>
</li>
}
