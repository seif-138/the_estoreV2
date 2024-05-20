import { createSlice } from "@reduxjs/toolkit";


export const typeSlice=createSlice({
    initialState:{type:""},
    name:"typeSlice",
    reducers:{
        setType:(state,action)=>{
            state.type = action.payload;
        }
    }

})

export const {setType} = typeSlice.actions;
export default typeSlice.reducer;
export const selectType = (state) => state.type;