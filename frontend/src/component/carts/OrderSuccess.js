import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaAccessibleIcon } from "react-icons/fa";
import "../../CSS/Cart/orderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <FaAccessibleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
