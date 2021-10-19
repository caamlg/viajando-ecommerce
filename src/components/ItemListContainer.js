import React from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import Products from "./Products.json";

export const ItemListContainer = (props) => {
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
    <>
      <ItemList items={items} />
    </>
  );
};
