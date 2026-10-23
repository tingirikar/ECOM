/**
 * CartPage.jsx
 * displays items added to cart and total bill
**/

import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cart = [], onRemoveFromCart }) {
  // Total price calculation
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="container cart-page">
      <h1>Your Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Your cart is empty!</p>
          <Link to="/" style={{ color: '#22c064', fontWeight: 'bold' }}>
            ← Back to Products
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={`/images/${item.image}`} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div> 
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary" style={{ marginTop: '1rem' }}>
            <h2>Total: ₹{totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
