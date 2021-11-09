import React from "react";
import { Link } from "react-router-dom";

export const Cart = ({ quantity }) => {
  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <button className="button-cart">
        Agregaste {quantity} productos
      </button>
    </Link>
  );
};
