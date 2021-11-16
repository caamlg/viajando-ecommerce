import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeItem, clear } = useCart();
  const totalToPay = cart.reduce((total, item) => {
    return total + item.info.price * item.quantity;
  }, 0);
  return cart.length ? (
    <div className="wrap cf">
      <div className="heading cf">
        <h1>Carrito de compras</h1>
        <Link to="/">
          <div className="continue">Seguir comprando</div>
        </Link>
      </div>

      {cart?.map((item) => {
        return (
          <div className="cart" key={item.info.id}>
            <ul className="cartWrap">
              <li className="items">
                <div className="infoWrap">
                  <div className="cartSection">
                    <img
                      src={item.info.pictureUrl}
                      alt=""
                      className="itemImg"
                    />
                    <h3>{item.info.title}</h3>

                    <p>
                      {item.quantity} x {item.info.price}
                    </p>
                  </div>

                  <div className="prodTotal cartSection">
                    <p>$ {item.info.price * item.quantity}</p>
                  </div>
                  <div className="cartSection removeWrap">
                    <button
                      className="remove"
                      onClick={() => {
                        removeItem(item.info.id);
                      }}
                    >
                      x
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}

      <div
        className="btn empty"
        onClick={() => {
          clear();
        }}
      >
        Vaciar carrito
      </div>
      <div className="subtotal cf">
        <ul style={{ listStyleType: "none" }}>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">$ {totalToPay}</span>
          </li>
          <li className="totalRow">
            <a href="/#" className="btn continue">
              Comprar
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="wrap cf">
      <div className="heading cf">
        <h1>¡Carrito vacío!</h1>
        <Link to="/">
          <div className="continue">Seguir comprando</div>
        </Link>
      </div>
    </div>
  );
};
