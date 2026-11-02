/**
 * CartProductCard.jsx
**/

import './CartProductCard.css';
import { API_URL } from '../api/config.js';

function CartProductCard({ product, quantity, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-card">

      <img src={`${API_URL}/images/${product.image}`} />

      <div className="cart-card-info">
        <h4>{product.name}</h4>
        <p>₹{product.price}</p>
      </div>

      <div className="cart-card-qty">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>

      <button className="mini-card-remove" onClick={onRemove}>🗑️</button>
    </div>
  );
}

export default CartProductCard;
