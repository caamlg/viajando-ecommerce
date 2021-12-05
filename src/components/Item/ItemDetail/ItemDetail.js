import React, { useState } from "react";
import { ItemCount } from "./ItemCount";
import { CartView } from "./CartView";
import { useCart } from "../../../contexts/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const { addItem } = useCart();

  const saveQuantity = (counter) => {
    setCartQuantity(counter);
    addItem({"info": item, "quantity": counter})
  };

  return (
    <div className="detail-box">
      <img src={item.pictureUrl} alt="" className="detail-image" />
      <h2 className="detail-title">{item.title}</h2>
      <div className="detail-subtitle">{item.subtitle}</div>
      <div className="detail-price">$ {item.price}</div>
      {cartQuantity ? (
        <CartView />
      ) : (
        <ItemCount
          initial={1}
          stock={item.stock}
          id={item.id}
          onAdd={saveQuantity}
        />
      )}
    </div>
  );
};
