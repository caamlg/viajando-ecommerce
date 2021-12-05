import { React, useState } from "react";
import "./ItemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export const ItemCount = ({ stock, initial, id, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () =>
    counter < stock
      ? setCounter(counter + 1)
      : Swal.fire({
          icon: "error",
          title: "Stock insuficiente",
          text: "Lo sentimos, alcanzaste el número máximo de stock disponible",
        });

  const remove = () =>
    counter > 0
      ? setCounter(counter - 1)
      : Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ya quitaste todas las unidades",
        });

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
