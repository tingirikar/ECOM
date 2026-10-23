/**
 * Navbar.jsx
 * 
 * to go to cart button
 * to go to home button
 * 
**/

import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-home">
        🛍️ products
      </Link>
      <Link to="/cart" className="nav-cart-btn">
        🛒 Cart
        <span className="cart-badge">{cartCount}</span>
      </Link>
    </nav>
  )
}

export default Navbar
