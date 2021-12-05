import { React, useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router";
import { getFirestore } from "../../../firebase";
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

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
