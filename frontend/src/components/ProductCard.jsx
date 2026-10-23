/**
 *  ProductCard.jsx
**/

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={`/images/${product.image}`} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(product)}
      > Add to Cart </button>
    </div>
  )
}

export default ProductCard;
