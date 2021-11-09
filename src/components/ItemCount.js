import React from "react";
import "./ItemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const { useState } = React;

export const ItemCount = ({ stock, initial, id, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () =>
    counter < stock
      ? setCounter(counter + 1)
      : alert("No hay suficiente stock");

  const remove = () =>
    counter > 0
      ? setCounter(counter - 1)
      : alert("Ya quitaste todas las unidades");

  const handleOnAdd = () => {
    if (counter !== 0) {
      onAdd(counter);
    }
  };

  return (
    <div className="counter__container">
      <div className="counter">
        <div className="button__wrapper">
          <button onClick={remove}>-</button>
        </div>
        <p>{counter}</p>
        <div className="button__wrapper">
          <button onClick={add}>+</button>
        </div>
      </div>
      <button className="button-cart" id={id} onClick={() => handleOnAdd()}>
        agregar al carrito{" "}
        <FontAwesomeIcon icon={faCartPlus} className="icon_cart" />{" "}
      </button>
    </div>
  );
};
