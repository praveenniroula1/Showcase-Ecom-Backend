import app from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
dotenv.config({ path: "backend/config/config.env" });

import { connectDB } from "./config/dataBase.js";
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// listening the port
app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});
