/**
 *  db.js
 *  in this file there is function connectDB()
 *  which lets us connect to MongoDB database
**/

import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  }
  catch (error) {
    console.log(`MongoDB Error: ${error}`);
    process.exit(1);
  }
};
