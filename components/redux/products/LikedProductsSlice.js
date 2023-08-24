import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLikedProducts = createAsyncThunk(
  "likedProducts/getProducts",
  async () => {
    const likedProducts =
      (await JSON.parse(localStorage.getItem("likedProducts"))) || [];
    return likedProducts;
  }
);

const initialState = {
  likedProducts: [],
  status: "idle",
  error: "null",
};

const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState,
  reducers: {
    like: (state, action) => {
      state.likedProducts = action.payload;
      localStorage.setItem("likedProducts", JSON.stringify(action.payload));
    },
    unlike: (state, action) => {
      state.likedProducts = action.payload;
      localStorage.setItem("likedProducts", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLikedProducts.fulfilled, (state, action) => {
      state.likedProducts = action.payload;
    })
  },
});

export const { like, unlike } = likedProductsSlice.actions; 

export default likedProductsSlice.reducer;
