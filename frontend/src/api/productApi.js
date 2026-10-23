const PRODUCTS_API_URL = 'http://localhost:5000/api/products';

export async function fetchProducts() {
  const res = await fetch(PRODUCTS_API_URL);
  const data = await res.json();
  return data;
}
