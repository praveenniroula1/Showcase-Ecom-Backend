import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@mui/lab";
import { FaAccessibleIcon } from "react-icons/fa";
import "../../CSS/Admin/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <FaAccessibleIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<FaAccessibleIcon />}
          defaultExpandIcon={<FaAccessibleIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<FaAccessibleIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<FaAccessibleIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <FaAccessibleIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <FaAccessibleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <FaAccessibleIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
