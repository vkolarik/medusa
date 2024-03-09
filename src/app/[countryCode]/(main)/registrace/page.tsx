'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as ROUTES from '@constants/routes'
import { NextPage } from 'next'
import { IRegisterData, IState } from '@interfaces/Register'
import { statesData } from '@data/register'

const Register: NextPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [btnText, setBtnText] = useState<string>('Registrovat se')

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  // TODO: rozjet prepinani genderu

  useEffect(() => {
    setValue('gender', 'male')
  }, [])

  const onSubmit: any = async (data: IRegisterData, e: Event) => {
    e.preventDefault()
    setBtnText('Registrace...')
    setIsDisabled(true)

    // toast.success('Registrace byla úspěšná')
    // toast.error('ddddddd')
    // setBtnText('Přihlásit se')
    // setIsDisabled(false)
  }

  // if (session.status === 'authenticated') {
  //   router.push(ROUTES.ACCOUNT)
  // }

  return (
    <div className='max-width md:py-36 py-12 w-full'>
        <form
          className='basic-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='w-full mb-4 md:mb-8 text-center'>
            <h1 className='md:mb-1 text-[22px] md:text-[25px] uppercase'>
              Registrace
            </h1>
            <p className='md:text-[17px] text-[15px] text-grey'>
              Vytvořte si u nás nový účet
            </p>
          </div>

          <div className="flex lg:gap-5 lg:flex-row flex-col">
            <div>
              <div className='mb-4 form__input'>
                <label htmlFor="name">Jméno</label>
                <input
                  className={`${
                    errors.name ? 'mb-3' : 'mb-0'
                  }`}
                  id='name'
                  type='text'
                  placeholder='Jméno'
                  {...register('name', {
                    required: 'Jméno je povinné',
                  })}
                />
                {/* error message */}
                {errors.name && errors.name.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.name.message as string}
                  </p>
                )}
              </div>

              <div className='mb-4 form__input'>
                <label htmlFor="surname">Příjmení</label>
                <input
                  className={`${
                    errors.surname ? 'mb-3' : 'mb-0'
                  }`}
                  id='surname'
                  type='text'
                  placeholder='Příjmení'
                  {...register('surname', {
                    required: 'Příjmení je povinné',
                  })}
                />
                {/* error message */}
                {errors.surname && errors.surname.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.surname.message as string}
                  </p>
                )}
              </div>

              {/* Email input */}
              <div className='mb-4 form__input'>
                <label htmlFor="email">Email</label>
                <input
                  className={`${
                    errors.email ? 'mb-3' : 'mb-0'
                  }`}
                  id='email'
                  type='text'
                  placeholder='Email'
                  {...register('email', {
                    required: 'Email je povinný',
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {/* error message */}
                {errors.email && errors.email.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.email.message as string}
                  </p>
                )}

                {errors.email && errors.email.type === 'pattern' && (
                  <p className='h-6 text-left error'>
                    Email nemá správný tvar
                  </p>
                )}
              </div>
              
              <div className='mb-4 form__input'>
                <label htmlFor="password">Heslo</label>
                <input
                  className={`${
                    errors.password ? 'mb-3' : 'mb-0'
                  }`}
                  id='password'
                  type='password'
                  autoComplete='on'
                  placeholder='Heslo'
                  {...register('password', {
                    required: 'Heslo je povinné',
                    maxLength: 40,
                    minLength: 5,
                  })}
                />
                {/* error message */}
                {errors.password && errors.password.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.password.message as string}
                  </p>
                )}

                {errors.password && errors.password.type === 'minLength' && (
                  <p className='h-6 text-left error'>
                    Heslo musí mít alespoň 5 znaků
                  </p>
                )}
              </div>

              <div className='mb-4 form__input'>
                <label htmlFor="state">Stát</label>
                <select
                  id='state'
                  {...register('state', {
                    required: 'Stát je povinný',
                  })}>
                  {statesData.map((state: IState, key: number) => {
                    const { text, code } = state
                    return <option key={key}
                      value={code}>{text}</option>
                  })}
                </select>
                {/* error message */}
                {errors.state && errors.state.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.state.message as string}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className='mb-4 form__input'>
                <label htmlFor="city">Město</label>
                <input
                  className={`${
                    errors.city ? 'mb-3' : 'mb-0'
                  }`}
                  id='city'
                  type='text'
                  placeholder='Město'
                  {...register('city', {
                    required: 'Město je povinné',
                  })}
                />
                {/* error message */}
                {errors.city && errors.city.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.city.message as string}
                  </p>
                )}
              </div>
              <div className='mb-4 form__input'>
                <label htmlFor="street">Ulice</label>
                <input
                  className={`${
                    errors.street ? 'mb-3' : 'mb-0'
                  }`}
                  id='street'
                  type='text'
                  placeholder='Ulice'
                  {...register('street', {
                    required: 'Ulice je povinná',
                  })}
                />
                {/* error message */}
                {errors.street && errors.street.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.street.message as string}
                  </p>
                )}
              </div>
              <div className='mb-4 form__input'>
                <label htmlFor="cp">Číslo popisné</label>
                <input
                  className={`${
                    errors.cp ? 'mb-3' : 'mb-0'
                  }`}
                  id='cp'
                  type='text'
                  placeholder='Číslo popisné'
                  {...register('cp', {
                    required: 'Číslo popisné je povinné',
                  })}
                />
                {/* error message */}
                {errors.cp && errors.cp.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.cp.message as string}
                  </p>
                )}
              </div>
              <div className='mb-4 form__input'>
                <label htmlFor="psc">PSČ</label>
                <input
                  className={`${
                    errors.psc ? 'mb-3' : 'mb-0'
                  }`}
                  id='psc'
                  type='text'
                  placeholder='PSČ'
                  {...register('psc', {
                    required: 'PSČ je povinné',
                  })}
                />
                {/* error message */}
                {errors.psc && errors.psc.type === 'required' && (
                  <p className='h-6 text-left error'>
                    {errors.psc.message as string}
                  </p>
                )}
              </div>
              <div className='mb-4 form__input'>
                <label htmlFor="gender">Pohlaví</label>
                <div>
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    className='hidden'
                    {...register('gender', {
                      required: 'Pohlaví je povinné',
                    })}
                  />
                  <label htmlFor="male"
                    onClick={() => setValue('gender', 'male')}
                    className={`${getValues('gender') === 'male' ? '' : ' button--light'} button button--small`}>MUŽ</label>

                  <input
                    type="radio"
                    id="female"
                    value="female"
                    className='hidden'
                    {...register('gender', {
                      required: 'Pohlaví je povinné',
                    })}
                  />
                  <label htmlFor="female"
                    onClick={() => setValue('gender', 'female')}
                    className={`${getValues('gender') === 'female' ? '' : ' button--light'} button button--small ml-2`}>ŽENA</label>
                </div>
              </div>
            </div>
          </div>

          <div className='ease-in duration-200 mt-5 md:mt-8 flex justify-center'>
            {/* Submit button */}
            <button type='submit'
              className='button button--light'
              disabled={isDisabled}>
              {btnText}
            </button>
          </div>
        </form>
      </div>
  )
}

export default Register
