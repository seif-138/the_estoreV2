import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice=createSlice({
    initialState:{isLoggedIn:false},
    name:"loggedSlice",
    reducers:{
        logIn:(state,action)=>{
            state.isLoggedIn = true;
        },
        logOut:(state,action)=>{
            state.isLoggedIn = false;
        }

    }
})

export const {logIn, logOut} =loggedSlice.actions;
export default loggedSlice.reducer; 

export const selectIsLoggedIn = (state) => state.logg.isLoggedIn;