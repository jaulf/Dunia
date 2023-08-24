import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = process.env.NEXT_PUBLIC_BASE_URL + "/products";

const initialState = {
  products: [],
  status: "idle",
  error: "null",
};

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(url, config);
    return response.data 
  }
); 

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = state.products.concat(action.payload)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
});

export const getAllProducts = state => state.Products.products
export const getHomeAllProducts = state => state.Products.products[0]

export default productSlice.reducer;
