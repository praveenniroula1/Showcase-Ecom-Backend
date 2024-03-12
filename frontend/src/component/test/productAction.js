// productAction.js
import axios from "axios";
import { setProducts, setLoading } from "./productSLice";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading to true before fetching data
    const { data } = await axios.get(`api/v1/products`);
    console.log(data);
    if (data) {
      dispatch(setProducts(data));
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    dispatch(setLoading(false)); // Set loading to false after fetching data
  }
};
