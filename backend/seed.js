/**
 * seed.js
 * to inject sample data in database
 * 
 * Terminal nundi direct ga run chese scripts (server.js, seed.js)
 * ki dotenv.config() undali
**/

import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import Product from './models/product.model.js';

dotenv.config();

const products = [
  { name: 'Apple', price: 20, image: 'apple.png' },
  { name: 'Banana', price: 10, image: 'banana.png' },
  { name: 'Mango', price: 50, image: 'mango.png' }
];

async function seed() {
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded.');
  process.exit(0);
}

seed();
