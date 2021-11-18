import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";
//import {getFirestore, collection, addDoc} from "./firebase";

export const Cart = () => {
  const { cart, removeItem, clear } = useCart();
  const totalToPay = cart.reduce((total, item) => {
    return total + item.info.price * item.quantity;
  }, 0);

  //CLASE FIREBASE 2 -- VARIABLE ORDER (HARDCODEO INFO DEL BUYER PORQUE NO TENGO FORMULARIO)
  const handleBuy = () => {
    console.log(order);
  };
  const order = {
    buyer: { name: "Camila", phone: "555", email: "email@email.com" },
    items: cart,
    totalToPay,
  };

/*   const db = getFirestore();
const ordersCollection = collection(db, "orders");

addDoc(ordersCollection, order).then (({id}) => console.log(id)); */

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
            <div className="btn continue" onClick={() => handleBuy()}>
              Comprar
            </div>
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
