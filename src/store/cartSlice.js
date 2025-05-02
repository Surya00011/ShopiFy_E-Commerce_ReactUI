import { createSlice } from "@reduxjs/toolkit";


let datafromWeb = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState: datafromWeb, 
    reducers: {
        addItem(state, action) {
            let newCart = [...state, action.payload]; 
            localStorage.setItem("cart", JSON.stringify(newCart)); 
            return newCart; 
        },
        removeItem(state, action) {
            let newCart = state.filter(product => product.id !== action.payload); 
            localStorage.setItem("cart", JSON.stringify(newCart)); 
            return newCart; 
        }
    }
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
