import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./slice";
const store = configureStore({
    reducer:{
        cart: catSlice,
    }
})
export default store;