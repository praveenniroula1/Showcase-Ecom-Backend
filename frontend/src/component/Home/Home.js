import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import MetaData from "../../metadata/MetaData";

const product = {
  name: "Apple",
  price: "3000",
  _id: "dsfdsf",
  images: [{ url: "http://i.ibb.co/DRST11n/1.webp" }],
};

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Ecommerce" />

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
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
