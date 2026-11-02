/**
 *  ProductCard.jsx
**/

import './ProductCard.css';
import { API_URL } from '../api/config.js';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">

      <img src={`${API_URL}/images/${product.image}`} />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>

        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        > Add to Cart </button>
      </div>
    </div>
  );
}

export default ProductCard;
