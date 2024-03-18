import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Initialize with an empty array
  singleProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setSingleProduct: (state, { payload }) => {
      state.singleProduct = payload;
    },
  },
});

const { reducer, actions } = productsSlice;
export const { setProducts, setSingleProduct } = actions;
export default reducer;
