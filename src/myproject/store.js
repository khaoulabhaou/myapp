// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState : { list : [] },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;