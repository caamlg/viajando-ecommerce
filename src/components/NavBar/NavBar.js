import {React, useState} from "react";
import { CartWidget } from "./CartWidget.js";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export const NavBar = () => {
  const { cart } = useCart();

  const itemsInCart = cart.reduce((total, p) => total + p.quantity, 0);

  const [open, setOpen] = useState(false);

  const barsIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <FontAwesomeIcon
      icon={faTimes}
      className="hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="brand">
        <Link to={"/"}>viajando ✈</Link>
      </div>
      {open ? closeIcon : barsIcon}
      <div
        id="mainListDiv"
        className={open ? "main_list main_list--open" : "main_list"}
      >
        <ul className="navlinks">
          <li onClick={closeMobileMenu}>
            <NavLink to={"/category/organizacion"}>Organización</NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to={"/category/cuadernos"}>Cuadernos</NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to={"/category/deco"}>Deco y regalos</NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to={"/category/accesorios"}>Accesorios</NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to={"/category/mochilas"}>Mochilas y valijas</NavLink>
          </li>
        </ul>
      </div>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <CartWidget totalItems={itemsInCart} />
      </Link>
    </nav>
  );
};
