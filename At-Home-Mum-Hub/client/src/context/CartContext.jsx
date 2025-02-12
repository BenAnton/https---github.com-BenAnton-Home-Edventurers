/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import itemsData from "../data";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(
    itemsData.map((item) => ({
      ...item,
      id: item.id || Math.random().toString(36).substr(2, 9),
      inCart: false,
    }))
  );

  const addToCart = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, inCart: true } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, inCart: false } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
