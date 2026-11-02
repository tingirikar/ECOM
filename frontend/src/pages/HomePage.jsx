/**
 * HomePage.jsx
**/

import './HomePage.css';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { fetchProducts } from '../api/productApi.js';

function HomePage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    async function loadProducts() {
      const response = await fetchProducts();
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <div className="page-container">
      <h2>Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
