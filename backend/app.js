import express from "express";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());

// importing routes
import product from "./routes/productRoutes.js";
import user from "./routes/userRoutes.js";
app.use("/api/v1", product);
app.use("/api/v1", user);

export default app;
