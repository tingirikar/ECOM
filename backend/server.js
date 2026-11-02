/**
 *  server.js
 *  BACKEND PORT : 5000 (default)
**/

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/error.middleware.js';
import productRoutes from './routes/product.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// it means: "it's ok!, trust request from vite frontend (5173 port)"
app.use(cors({
  origin: [
    'http://localhost:5173',
    process.env.CLIENT_URL
  ]
}));

app.use(express.json()); // converts json body into javascript object

app.use('/images', express.static(path.join(
  import.meta.dirname, '../assets/images'
)));

app.use('/api/products', productRoutes);

app.use('/api/auth', authRoutes);

app.use(errorHandler); // error handling

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
}

startServer();
