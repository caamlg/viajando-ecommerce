import React from "react";
import "./ItemList.css";
import { useEffect, useState } from "react";
import Products from "./Products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item.js";

export const ItemList = () => {
  const [items, setItems] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontró nada");
        }
      }, 2000);
    });

  useEffect(() => {
    getData(Products)
      .then((result) => setItems(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex-container">
      {items.length
        ? items.map((item) => (
            <Item item={item} key={item.id} />
          ))
        : <FontAwesomeIcon icon={faSpinner} className="load-icon"/>}
    </div>
  );
};
