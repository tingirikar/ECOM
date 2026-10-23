/**
 * db.js
 * ee file la connectDB() function untadhi
 * using this, manam MongoDB ki connect aitham
 * 
**/

import mongoose from 'mongoose'; // mongoose - ODM

// localhost default ip : 127.0.0.1
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecom';

export async function connectDB() {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected');
  }
  catch (error) {
    console.log(`MongoDB Error: ${error}`);
    process.exit(1);
  }
}
