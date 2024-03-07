import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./sllice/productSlice";

const store = configureStore({
    reducer: {
        product: productSlice
    }
})

export default store