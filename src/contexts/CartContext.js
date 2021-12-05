import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isItemInCart = (id) => cart.some((item) => item.info.id === id);

  const addItem = (item) => {
    if (!isItemInCart(item.info.id)) {
      setCart([...cart, item]);
    } else {
      setCart(cart.map((value) => {
        if (value.info.id === item.info.id) {
          value.quantity += item.quantity;
        } return value;
      }))
    }
  };

  const removeItem = (id) => {
    const filteredCart = cart.filter((item) => item.info.id !== id);
    setCart(filteredCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, isItemInCart, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
