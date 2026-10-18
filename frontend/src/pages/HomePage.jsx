import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi.js';
import ProductCard from '../components/ProductCard.jsx';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      if (res.success) setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
