import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
}
const catSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item = state.items.find(
        (el) => el.id === action.payload.id
      );
            if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
        },
        increaseQty:(state, action)=>{
           const item = state.items.find(
        (el) => el.id === action.payload
      );
      if (item) item.quantity += 1;
    },
    decreaseQty(state, action) {
      const item = state.items.find(
        (el) => el.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
        deleteItem: (state, action) => {
      state.items = state.items.filter(
        (el) => el.id !== action.payload
      );
    },
    }
})
export const {addToCart,increaseQty,decreaseQty,deleteItem} = catSlice.actions
export default catSlice.reducer