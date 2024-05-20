import { configureStore } from "@reduxjs/toolkit";
import  loggedSlice  from "./slices/loggedIn-slice";
import cartSlice from "./slices/cart-slice";
import typeSlice from "./slices/type-slice";

export const store=configureStore({
    reducer:{
        logg:loggedSlice, 
        cart:cartSlice,
        type:typeSlice
    },
})