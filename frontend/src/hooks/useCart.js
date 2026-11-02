/**
 * useCart.js
**/

import { useState } from 'react';

export function useCart(user) {

  const [guestCart, setGuestCart] = useState(() => {
    const saved = localStorage.getItem('guest_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [userCart, setUserCart] = useState(() => {
    if (user) {
      const saved = localStorage.getItem(`cart_${user.username}`);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const activeCart = user ? userCart : guestCart;

  const mergeOnLogin = (username) => {
    const saved = localStorage.getItem(`cart_${username}`);
    const existingCart = saved ? JSON.parse(saved) : [];

    const uniqueGuestItems = guestCart.filter(guestItem => 
      !existingCart.some(userItem => userItem._id === guestItem._id)
    );
    const merged = [...existingCart, ...uniqueGuestItems];

    setUserCart(merged);
    localStorage.setItem(`cart_${username}`, JSON.stringify(merged));
  };

  const clearUserCart = () => setUserCart([]);

  const addToCart = (product) => {
    if (user) {
      const updated = [...userCart, product];
      setUserCart(updated);
      localStorage.setItem(`cart_${user.username}`, JSON.stringify(updated));
    }
    else {
      const updated = [...guestCart, product];
      setGuestCart(updated);
      localStorage.setItem('guest_cart', JSON.stringify(updated));
    }
  };

  const increaseQty = (product) => addToCart(product);

  const decreaseQty = (product) => {
    if (user) {
      const index = userCart.findIndex(item => item._id === product._id);
      if (index !== -1) {
        const updated = userCart.filter((_, i) => i !== index);
        setUserCart(updated);
        localStorage.setItem(`cart_${user.username}`, JSON.stringify(updated));
      }
    }
    else {
      const index = guestCart.findIndex(item => item._id === product._id);
      if (index !== -1) {
        const updated = guestCart.filter((_, i) => i !== index);
        setGuestCart(updated);
        localStorage.setItem('guest_cart', JSON.stringify(updated));
      }
    }
  };

  const removeFromCart = (productId) => {
    if (user) {
      const updated = userCart.filter(item => item._id !== productId);
      setUserCart(updated);
      localStorage.setItem(`cart_${user.username}`, JSON.stringify(updated));
    }
    else {
      const updated = guestCart.filter(item => item._id !== productId);
      setGuestCart(updated);
      localStorage.setItem('guest_cart', JSON.stringify(updated));
    }
  };

  return { 
    activeCart, 
    mergeOnLogin, 
    clearUserCart, 
    addToCart, 
    increaseQty, 
    decreaseQty, 
    removeFromCart 
  };
}
