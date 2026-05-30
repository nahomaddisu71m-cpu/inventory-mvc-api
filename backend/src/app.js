import express from "express";

const app = express();

app.use(express.json());

// Import routes
import productRouter from './routes/product.route.js';

// Routes
app.use("/api/products", productRouter);

app.get('/', (req, res) => {
  res.json({ message: "Welcome to Inventory Management API" });
  });

  export default app;