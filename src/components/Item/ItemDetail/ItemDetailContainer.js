import { React, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getFirestore } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [clickedItem, setClickedItem] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemColl = doc(db, "items", id);
    getDoc(itemColl).then((snap) => {
      if (snap.exists()) {
        setClickedItem(snap.data());
      } 
    });
  }, [id]);

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
