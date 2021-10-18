import React from "react";
import './Item.css';

const Item = ({ item }) => {
  return (
<div className="product">
 <p className="product-title">{item.title}</p>
 <img src={item.pictureUrl} alt="" />
 <div className="product-text">
  <p>$ {item.price}</p>
  <button className="button-item">Ver más</button>
 </div>
</div>
  );
};

export default Item;
