import Product from '../models/product.js';

export async function getProducts(req, res) {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
