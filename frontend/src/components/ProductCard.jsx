/**
 *  ProductCard.jsx
**/

import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={`/images/${product.image}`} />

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
