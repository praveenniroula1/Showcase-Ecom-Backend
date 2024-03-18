import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard.js"; // Assuming ProductCard component is defined elsewhere
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader";
import { getProductsAction } from "../../A Action/productAction.js";

const Home = () => {
  const dispatch = useDispatch();
  const loading = false; // Set your loading state
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(getProductsAction()); // Fetch products when component mounts
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {Array.isArray(products) &&
              products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
