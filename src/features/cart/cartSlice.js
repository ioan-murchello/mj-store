import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultValue = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart'));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage() || defaultValue,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === product.cartId);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      //use reducer in another reducers
      cartSlice.caseReducers.calculateTotal(state);
      toast.success('Item added successfuly')
    },

    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultValue));
      return defaultValue;
    },

    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === cartId);
      state.cartItems = state.cartItems.filter((el) => el.cartId !== cartId);
      state.numItemsInCart -= item.amount;
      state.cartTotal -= item.price * item.amount;
      cartSlice.caseReducers.calculateTotal(state);

      toast.success('Item removed');

    },

    editItem: (state, action) => {
        const {cartId,amount} = action.payload
        const itemInCart = state.cartItems.find(i => i.cartId === cartId)
        state.numItemsInCart += amount - itemInCart.amount
        state.cartTotal += itemInCart.price * (amount - itemInCart.amount)
        itemInCart.amount = amount
        cartSlice.caseReducers.calculateTotal(state)

    },

    calculateTotal: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;


