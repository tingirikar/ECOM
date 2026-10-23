/**
 *  ProductCard.jsx
**/

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={`/images/${product.image}`} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  )
}

export default ProductCard;
