import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getCartProducts = createAsyncThunk(
  "cartProducts/getAllCartProducts",
  async () => {
    const cartProducts =
      (await JSON.parse(localStorage.getItem("cartProducts"))) || [];
    return cartProducts;
  }
);

const initialState = {
  cartProducts: [],
  status: "idle",
  error: "null",
};

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts = action.payload;
      localStorage.setItem("cartProducts", JSON.stringify(action.payload));
    },
    removeFromCart: (state, action) => {
      state.cartProducts = action.payload;
      localStorage.setItem("cartProducts", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.cartProducts = action.payload;
    });
  },
});

export const {addToCart, removeFromCart} = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
