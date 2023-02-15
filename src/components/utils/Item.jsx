import React from 'react';
import { useDispatch } from 'react-redux';
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import  {setAddItemToCart,setOpenCart}  from '../../app/CartSlice';


const Item = ({ ifPopularsales, id, color, shadow, title, text, img, btn, rating, price }) => {
    const dispatch = useDispatch();

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onAdd = () => {
        const itemOnCart = { id, text, title, img, color, shadow, price };
        dispatch(setAddItemToCart(itemOnCart));
    }

    return (
        <>
            <div className={`relative bg-gradient-to-b ${color} ${shadow} grid
    items-center  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105
    ${ifPopularsales === true ? 'justify-items-start' : 'justify-items-center'}`}>
                <div className='grid items-center justify-items-center'>
                    <h1 className='text-slate-200 text-xl lg:text-lg
            md:text-base font-medium filter drop-shadow '>{title}</h1>
                    <p className='text-slate-200 filter drop-shadow
            text-base md:text-sm font-normal'>{text}</p>

                    <div className='flex items-center justify-between w-28 my-2'>
                        <div className='flex items-center bg-white/80 px-1 rounded'><h1 className=''>${price}</h1></div>
                        <div className='flex items-center gap-1'>
                            <StarIcon className='icon-style text-slate-900 w-5 h-5 md:h-4 md:w-4 ' />
                            <h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <button type='button' className='bg-white/90 blur-effect-theme button-theme p-0.5
                        shadow shadow-sky-200' onClick={()=> onAdd()}>
                        <ShoppingBagIcon className='icon-style text-slate-900' />
                    </button>
                    <button type='button' onClick={()=> {onAdd(); onCartToggle();}} className='bg-white/90 blur-effect-theme button-theme
            px-2 py-1 shadow shadow-sky-200 text-sm text-black '>
                        {btn}
                    </button>
                </div>
                <div className={`flex items-center ${ifPopularsales === true ? 'absolute top-5 right-1' : 'justify-items-center'}`}>
                    <img
                        src={img}
                        alt={`img/item-img/${id}`}
                        className={`transitions-theme hover:-rotate-12 ${ifPopularsales === true ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64'}`}
                    />
                </div>
            </div>
        </>
    )
}

export default Item