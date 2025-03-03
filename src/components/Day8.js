import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  items: [],
  total: 0,
};

// Create a slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});