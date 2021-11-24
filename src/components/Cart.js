import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";
import { getFirestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
//import {getFirestore, collection, addDoc} from "./firebase";

export const Cart = () => {
  const { cart, removeItem, clear } = useCart();
  const [buyer, setBuyer] = useState({
    buyerName: "",
    buyerMail: "",
    buyerPhone: "",
  });
  const totalToPay = cart.reduce((total, item) => {
    return total + item.info.price * item.quantity;
  }, 0);
  const date = new Date();
  const orderDate = date.toLocaleDateString();
  const formHandler = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  //CLASE FIREBASE 2 -- VARIABLE ORDER

  const handleBuy = (e) => {
    const db = getFirestore();
    const order = {
      buyer,
      cart,
      totalToPay,
      date: orderDate,
    };

    console.log(order)

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) =>
      console.log(id)
    );
    clear();
  };

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
            <form onSubmit={handleBuy}>
              <input
                type="text"
                placeholder="Nombre"
                name="buyerName"
                onChange={formHandler}
              />
              <input
                type="email"
                placeholder="Mail"
                name="buyerMail"
                onChange={formHandler}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                name="buyerPhone"
                onChange={formHandler}
              />
            </form>
            <div className="btn continue">Comprar</div>
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
