import React from 'react'
import cartImage from '../images/cart.png'
import './CartWidget.css';

export const CartWidget = () => {
    return (
            <img src={cartImage} alt="carrito" className="cart-icon"/>
    )
}
