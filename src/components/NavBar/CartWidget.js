import React from "react";
import cartImage from "../../images/cart.png";
import { useCart } from "../../contexts/CartContext";
import "./CartWidget.css";

export const CartWidget = ({ totalItems }) => {
  const { cart } = useCart();
  return (
    <div className="cart-widget-container">
      <img src={cartImage} alt="carrito" className="cart-icon" />
      <div className={cart.length > 0 ? "quantity" : "quantity-hidden"}>
        {totalItems}
      </div>
    </div>
  );
};
