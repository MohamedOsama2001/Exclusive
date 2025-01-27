import { createSlice } from "@reduxjs/toolkit";

//add , delete , increment , decrement , remove ,addfav ,remove fav
const initialState={
    cartProducts: JSON.parse(localStorage.getItem("cart")) || [],
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exictingItem = state.cartProducts.find((i) => i.id === item.id);
      if (exictingItem) {
        exictingItem.quantity += 1;
      } else {
        state.cartProducts.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    incrementQuantity: (state, action) => {
      const item = state.cartProducts.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartProducts));
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartProducts.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartProducts));
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (i) => i.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
  },
});
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
