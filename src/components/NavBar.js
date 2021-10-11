import React from 'react';
import {CartWidget} from './CartWidget.js'
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="nav">
            <div className="brand">viajando ✈</div>
            <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
                <li><a href="/#">Organización</a></li>
                <li><a href="/#">Cuadernos</a></li>
                <li><a href="/#">Deco y regalos</a></li>
                <li><a href="/#">Accesorios</a></li>
                <li><a href="/#">Mochilas y valijas</a></li>
            </ul>
            </div>
            <CartWidget />
        </nav>
    )
}
