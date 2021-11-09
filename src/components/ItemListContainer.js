import React from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Products from "../Products.json";

export const ItemListContainer = (props) => {
  const { catId } = useParams();
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
      .then((result) => {
        catId
          ? setItems(result.filter(x => x.category === catId))
          : setItems(result);
      })
      .catch((err) => console.log(err));
  }, [catId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
