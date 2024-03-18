import axios from "axios"; // You can use axios or any other HTTP library
import { setProducts, setSingleProduct } from "../A Slice/productSlice";

const apiEndPoint = "http://localhost:4000";

export const getProductsAction = () => async (dispatch) => {
  const response = await axios.get(apiEndPoint + "/api/v1/products");
  const val = response.data;
  val.success === true && dispatch(setProducts(val.products));
};

export const getSingleProductsAction = (id) => async (dispatch) => {
  const response = await axios.get(apiEndPoint + `/api/v1/product` + "/" + id);
  const val = response.data;
  console.log(val);
  val.success === true && dispatch(setSingleProduct(val.product));
};
