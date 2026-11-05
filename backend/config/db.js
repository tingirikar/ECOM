/**
 * db.js
 * ee file la connectDB() function untadhi
 * using this, manam MongoDB ki connect aitham
 * 
**/

import mongoose from 'mongoose';

export async function connectDB() {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected');
  }
  catch (error) {
    console.log(`MongoDB Error: ${error}`);
    process.exit(1);
  }
}
