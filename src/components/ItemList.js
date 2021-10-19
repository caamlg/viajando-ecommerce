import React from "react";
import "./ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item.js";

export const ItemList = ({ items }) => {
  return (
    <div className="flex-container">
      {items.length ? (
        items.map((item) => <Item item={item} key={item.id} />)
      ) : (
        <FontAwesomeIcon icon={faSpinner} className="load-icon" />
      )}
    </div>
  );
};
