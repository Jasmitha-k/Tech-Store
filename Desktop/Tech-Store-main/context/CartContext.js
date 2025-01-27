'use client'
import React, { createContext, useState, useContext } from 'react';
const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  

  // Add to Cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity  } // Increase quantity
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }]; // Add new item with quantity 1
      }
    });
  };

  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  //Clear the cart after checkout
  const clearCart = () => {
    setCart([]);
  };


  // Update Quantity
  const updateQuantity = (itemId, quantityChange) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: Math.max(cartItem.quantity + quantityChange, 1) }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity ,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext
