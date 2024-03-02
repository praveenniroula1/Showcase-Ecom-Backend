import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`mongodb connected ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
