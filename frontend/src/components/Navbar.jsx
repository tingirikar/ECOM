/**
 * Navbar.jsx
 * 
 * cart button
 * home button
 * auth button
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
      <Link to="/profile" className="nav-profile-btn">
        😂 Profile
      </Link>
    </nav>
  )
}

export default Navbar
