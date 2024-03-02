import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter description"],
  },
  price: {
    type: Number,
    required: [true, "please enter price"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter Category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter stock"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
