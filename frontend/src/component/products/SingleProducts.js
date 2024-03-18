import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductsAction } from "../../A Action/productAction";
import { useParams } from "react-router-dom";
import ProductCard from "../Home/ProductCard";

const SingleProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  console.log(singleProduct);
  useEffect(() => {
    dispatch(getSingleProductsAction(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="container" id="container">
        {singleProduct && (
          <ProductCard key={singleProduct._id} product={singleProduct} />
        )}
      </div>
    </div>
  );
};

export default SingleProducts;
