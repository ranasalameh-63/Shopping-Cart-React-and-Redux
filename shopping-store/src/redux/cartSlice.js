import { createSlice } from "@reduxjs/toolkit";


const saveCart = (cart) =>{
localStorage.setItem('cart' , JSON.stringify(cart));
};
const loadCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: loadCartFromLocalStorage(),
    },
    reducers: {
      addToCart: (state, action) => {
        const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].quantity += 1;
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
        saveCartToLocalStorage(state.cartItems);
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        saveCartToLocalStorage(state.cartItems);
      },
      updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.cartItems.find(item => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
        saveCartToLocalStorage(state.cartItems);
      },
    },
  });

  export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
