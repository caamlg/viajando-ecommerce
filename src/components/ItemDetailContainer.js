import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getFirestore } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [clickedItem, setClickedItem] = useState("");
  const { id } = useParams();
  //const itemId = parseInt(id);

  useEffect(() => {
    const db = getFirestore();
    const itemColl = doc(db, "items", id);
    getDoc(itemColl).then((snap) => {
      if (snap.exists()) {
        setClickedItem(snap.data());
      } 
    });
  }, [id]);

/*   const getItem = (item) =>
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
        const [filteredItems] = result.filter(x => x.id === itemId);
        setClickedItem(filteredItems);
      })
      .catch((err) => console.log(err));
  }, [itemId]); */

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
