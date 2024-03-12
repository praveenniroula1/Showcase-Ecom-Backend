import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSLice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
