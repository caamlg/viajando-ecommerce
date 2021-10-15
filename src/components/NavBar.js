import React from "react";
import { CartWidget } from "./CartWidget.js";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const NavBar = () => {
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

  const closeMobileMenu = () => setOpen(false)

  return (
    <nav className="nav">
      <div className="brand">viajando ✈</div>
      {open ? closeIcon : barsIcon}
      <div id="mainListDiv" className={open ? "main_list main_list--open" : "main_list"}>
        <ul className="navlinks">
          <li onClick={closeMobileMenu}>
            <a href="/#/">Organización</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="/#">Cuadernos</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="/#">Deco y regalos</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="/#">Accesorios</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="/#">Mochilas y valijas</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
