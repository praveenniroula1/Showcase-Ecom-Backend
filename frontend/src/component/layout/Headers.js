import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import logo from "../../images/logo.png";

const Headers = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Praveen's Ecommerce</h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/products">
          {" "}
          <FaUserAlt /> Products
        </a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaUserAlt />
      </button>
    </header>
  );
};

export default Headers;
