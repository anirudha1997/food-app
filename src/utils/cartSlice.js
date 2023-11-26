import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    showToast: { show: false, message: "" },
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      state.items.splice(itemToRemove, 1);
    },
    updateQuantity: (state, action) => {
      const updatedItem = state.items.filter(
        (item) => item.card.info.id === action.payload.id.toString()
      );
      updatedItem[0].quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    setShowToast: (state, action) => {
      state.showToast = action.payload;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, setShowToast } =
  cartSlice.actions;

export default cartSlice.reducer;
