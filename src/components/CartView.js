import React from "react";
import { Link } from "react-router-dom";

export const CartView = () => {
  return (
    <div className="counter__container">
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <button className="button-cart">Terminar mi compra</button>
      </Link>
    </div>
  );
};
