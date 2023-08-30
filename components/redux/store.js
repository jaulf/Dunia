import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/components/redux/products/productSlice";
import likedProductsSlide from "@/components/redux/products/LikedProductsSlice";
import cartProductsSlice from "./products/cartProductsSlice";
import filtersSlice from "./products/filterProductsSlice";

export const Store = configureStore({
  reducer: {
    Products: productSlice,
    likedProducts: likedProductsSlide,
    cartProducts: cartProductsSlice,
    filters: filtersSlice,
  },
});
