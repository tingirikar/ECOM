/**
 * Navbar.jsx
 * 
 * cart button
 * home button
 * auth button
 * 
**/

import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ cartCount, user }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'nav-active' : '';

  return (
    <nav className="navbar">

      <Link 
        to="/" 
        className={`nav-link ${isActive('/')}`}
      >🛍️ products</Link>

      <Link 
        to="/cart" 
        className={`nav-link ${isActive('/cart')}`}
      >🛒 Cart
      {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </Link>

      <Link 
        to="/profile"
        className={`nav-link ${isActive('/profile')}`}
      >🩻 {user ? user.username : 'Profile'}</Link>

    </nav>
  );
}

export default Navbar;
