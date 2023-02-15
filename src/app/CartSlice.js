import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],  /*like database */
    cartTotalQuantity: 0,
    cartTotalAmount: 0
};

const CartSlice = createSlice({
    initialState,
    name:"cart",
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.success(`Item Quantity of ${action.payload.title} increased`)
            }else {
                const Additem = {...action.payload, cartQuantity: 1}
                state.cartItems.push(Additem)  

                toast.success(`${action.payload.title} added to Cart`);
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
           
        },
        setRemoveItemFromCart: (state,action) => {
            const removeItem = state.cartItems.filter((item)=> item.id !== action.payload.id);
            state.cartItems = removeItem;
            localStorage.setItem('cart',JSON.stringify(state.cartItems));

            toast.success(`${action.payload.title} removed from Cart`)
        },
        setIncreaseItemQuantity: (state,action) =>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.success(`Item Quantity of ${action.payload.title} increased`)
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItems)) 
        },
        setDecreaseItemQuantity: (state,action) =>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.success(`Item Quantity of ${action.payload.title} increased`)
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItems)) 
        },
        setClearCartItems: (state,action) =>{
            state.cartItems = [];
            toast.success(`Cart Cleared`);
            localStorage.setItem('cart',JSON.stringify(state.cartItems)) 
        },
        setGetTotal: (state, action) => {
            let {totalAmount, totalQuantity} = state.cartItems.reduce((cartTotal,cartItem)=> {
                const {price, cartQuantity} = cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQuantity += cartQuantity;
                return cartTotal;
            }, {
                totalAmount: 0,
                totalQuantity: 0,
            });

            state.cartTotalAmount = totalAmount;      /*setting global state of totals */
            state.cartTotalQuantity = totalQuantity;   
        }
    }
});

export const {setOpenCart,
              setCloseCart, 
              setAddItemToCart,
              setRemoveItemFromCart,
              setIncreaseItemQuantity,
              setDecreaseItemQuantity,
              setClearCartItems,
              setGetTotal} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;