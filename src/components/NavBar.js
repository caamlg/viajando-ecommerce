import React from 'react';
import {CartWidget} from './CartWidget.js'
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

export const NavBar = () => {

    const [open, setOpen] = useState(false);

    const barsIcon = <FontAwesomeIcon icon={faBars} className="hamburger" onClick={() => setOpen(!open)}/>

    const closeIcon = <FontAwesomeIcon icon={faTimes} className="hamburger" onClick={() => setOpen(!open)}/>
 
    return (
        <nav className="nav">
            <div className="brand">viajando ✈</div>
            {open ? closeIcon : barsIcon}
            <div id="mainListDiv" className={open ? "main_list--open" : "main_list"}>
            <ul className="navlinks">
                <li><a href="/#">Organización</a></li>
                <li><a href="/#">Cuadernos</a></li>
                <li><a href="/#">Deco y regalos</a></li>
                <li><a href="/#">Accesorios</a></li>
                <li><a href="/#">Mochilas y valijas</a></li>
            </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}
