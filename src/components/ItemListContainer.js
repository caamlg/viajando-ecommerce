import React from "react";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="item-list">
      <p>{props.greeting}</p>
    </div>
  );
};
