import React from "react";
import { ItemCount } from "./ItemCount";
import "./ItemDetail.css"

export const ItemDetail = ({ item }) => {
  return (
    <div className="detail-box">
      <img src={item.pictureUrl} alt="" className="detail-image"/>
      <h2 className="detail-title">{item.title}</h2>
      <div className="detail-subtitle">{item.subtitle}</div>
      <div className="detail-price">$ {item.price}</div>
      <ItemCount initial={1} stock={item.stock} />
    </div>
  );
};
