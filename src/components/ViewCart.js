import React from "react";
import { Link } from "react-router-dom";

export const ViewCart = ({ quantity }) => {
  return (
    <div className="counter__container">
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <button className="button-cart">Agregaste {quantity} productos</button>
      </Link>
    </div>
  );
};
