import express from "express";
const app = express();
app.use(express.json());

// importing routes
import product from "./routes/productRoutes.js";
app.use("/api/v1", product);

export default app;
