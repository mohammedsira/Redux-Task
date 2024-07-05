import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

export const datastore = configureStore({
    reducer: {
        cart: ProductSlice
    }
})