import React from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { catId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const getData = (q) =>
      getDocs(q).then((snap) => {
        setItems(snap.docs.map((item) => item.data()));
      });

    if (catId) {
      const q = query(collection(db, "items"), where("category", "==", catId));
      getData(q);
    } else {
      const q = query(collection(db, "items"));
      getData(q);
    }

  }, [catId]);

/*   const getData = (data) =>
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
  }, [catId]); */

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
