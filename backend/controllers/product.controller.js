/**
 * product.controller.js
 * 
**/

import Product from '../models/product.model.js';

export async function getProducts(req, res) {
  const products = await Product.find({});
  res.status(200).json({
    success: true,
    data: products
  });
}
