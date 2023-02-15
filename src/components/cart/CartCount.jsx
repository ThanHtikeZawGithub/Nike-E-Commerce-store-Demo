import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const CartCount = ({onCartToggle, ClearCart, totalQuantity}) => {
  return (
    <>
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full '>
        <div className='flex items-center accent-pink-300 gap-3'>
            <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-sky-700 stroke-[2]'/>
            </div>
            <div className='grid items-center'>
                <h1 className='text-base font-normal text-slate-900'>Your Cart<span className='bg-theme-cart
                rounded px-1 py-0.5 text-slate-100 text-xs mx-1'>({totalQuantity} Items)</span></h1>
            </div>
        </div>
        <div className='flex items-center '>
            <button type='button' onClick={ClearCart} className='rounded bg-theme-cart active:scale-90 p-0.5'>
                <XMarkIcon className='w-5 h-5 text-slate-100'/>
            </button>
        </div>
    </div>
    </>
  )
}

export default CartCount