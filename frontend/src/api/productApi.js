/**
 * productApi.js
**/

import { API_URL } from './config.js';

const PRODUCTS_API_URL = `${API_URL}/api/products`;

export async function fetchProducts() {
  const res = await fetch(PRODUCTS_API_URL);
  return await res.json();
}
