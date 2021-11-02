import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Products from "./Products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const ItemDetailContainer = () => {
  const [clickedItem, setClickedItem] = useState("");
  const { id } = useParams();
  const itemId = parseInt(id);

  const getItem = (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("No se encontró nada");
        }
      }, 2000);
    });

  useEffect(() => {
    getItem(Products)
      .then((result) => {
        const filteredItems = result.filter(x => x.id === itemId)[0];
        setClickedItem(filteredItems);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <>
      {clickedItem ? (
        <ItemDetail item={clickedItem} />
      ) : (
        <FontAwesomeIcon icon={faSpinner} className="load-icon" />
      )}
    </>
  );
};
