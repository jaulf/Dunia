import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/components/redux/products/productSlice";

export const Store = configureStore({
    reducer: {
        Products: productSlice
    }
});