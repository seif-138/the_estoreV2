import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
            const findproduct=state.find((product)=>product.id==action.payload.id);
            if(findproduct){
                findproduct.quantity++
                return
            }
            else{
                const productClone={...action.payload,quantity:1};
                state.push(productClone)
            }
            
        },
        removeFromCart:(state,action)=>{
            return state.filter((product)=>product.id!= action.payload.id)
        },
        clearCart:(state,action)=>{
            return []
        },
    }
})

export const {addToCart, removeFromCart, clearCart}= cartSlice.actions
export default cartSlice.reducer