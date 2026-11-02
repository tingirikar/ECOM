/**
 * App.jsx
**/

import { Route, Routes, Navigate } from 'react-router-dom';

import { useAuth } from './hooks/useAuth.js';
import { useCart } from './hooks/useCart.js';

import Navbar      from './components/Navbar.jsx';
import HomePage    from './pages/HomePage.jsx';
import CartPage    from './pages/CartPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import AuthPage    from './pages/AuthPage.jsx';

function App() {

  const { user, handleLogin, handleLogout } = useAuth();
  const {
    activeCart, 
    mergeOnLogin,
    clearUserCart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart
  }  = useCart(user);

  const onLoginSuccess = (userData, token) => {
    handleLogin(userData, token);
    mergeOnLogin(userData.username);
  };

  const onLogout = () => {
    handleLogout();
    clearUserCart();
  };
  
  return (
    <div>
      <Navbar cartCount={activeCart.length} user={user} />

      <Routes>

        <Route path="/" element={
          <HomePage onAddToCart={addToCart} />
        } />

        <Route path="/cart" element={
          <CartPage 
            cart={activeCart}
            onRemoveFromCart={removeFromCart}
            onIncreaseQty={increaseQty}
            onDecreaseQty={decreaseQty}
          />
        } />
        <Route path="/profile" element={
          user
            ? <ProfilePage user={user} onLogout={onLogout} />
            : <Navigate to="/auth/login" replace />
        } />

        <Route path="/auth/login" element={
          user
            ? <Navigate to="/profile" replace />
            : <AuthPage onLoginSuccess={onLoginSuccess} />
        } />

      </Routes>
    </div>
  );
}

export default App;
