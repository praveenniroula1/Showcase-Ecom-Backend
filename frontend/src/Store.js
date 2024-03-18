import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/A Slice/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
