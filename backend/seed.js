import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product.js';

dotenv.config();

const products = [
  { name: 'Apple', price: 20, image: 'apple.png' },
  { name: 'Banana', price: 10, image: 'banana.png' },
  { name: 'Mango', price: 50, image: 'mango.png' }
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded.');
  process.exit(0);
}

seed();
