import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartState: false,
  cartItems: [],
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
