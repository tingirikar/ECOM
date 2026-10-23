/**
 * App.jsx
**/

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import CartPage from './pages/CartPage.jsx';

// this is basically how our webpage looks
function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route 
          path="/" 
          element={<HomePage onAddToCart={addToCart} />} 
        />
        <Route 
          path="/cart" 
          element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />} 
        />
      </Routes>

    </div>
  )
}

export default App;
