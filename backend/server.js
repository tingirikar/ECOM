/**
 *  server.js
**/

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/error.middleware.js';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // converts json body into javascript object
app.use(errorHandler); // global error handling
app.use('/images', express.static(path.join(
  import.meta.dirname, '../assets/images'
)));
app.use('/api/products', productRoutes);

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
