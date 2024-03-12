// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false, // Initialize loading state
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload = [] }) => {
      state.products = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { setProducts, setLoading } = productSlice.actions;
export default productSlice.reducer;
