import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: "idle",
    error: "null",
  };




export const likedProducts = createAsyncThunk(
    "products/LikedProducts",
    async () => {
      const likedProducts = await JSON.parse(localStorage.getItem("likedProducts")) || [];
      return likedProducts
    }
  )