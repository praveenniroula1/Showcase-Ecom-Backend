import Product from "../models/productModel.js";
import ApiFeatures from "../utils/apiFeatures.js";

// create product-Admin
export const createProduct = async (req, res, next) => {
  req.body.user = req.user.id;
  const products = await Product.create(req.body);
  res.status(201).json({
    success: true,
    products,
  });
};

export const getAllProducts = async (req, res) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
  });
};

// get single product details
export const getProductDetais = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

export const updateProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run validators for update operations
      useFindAndModify: false, // Use `findOneAndUpdate()` instead of `findAndModify()`
    });

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await product.deleteOne();
  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};

// create new review or update reviews
export const createProductReview = async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.body._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) rev.rating = rating;
      rev.comment = comment;
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });
  res.json({
    success: true,
  });
};

// get all review of a product
export const getProductReviews = async (req, res) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  res.json({
    success: true,
    reviews: product.reviews,
  });
};

// delete review of a product
export const deleteReview = async (req, res) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  const ratings = avg / product.reviews.length;
  const numOfReviews = reviews.length;
  await product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    { new: true }
  );

  res.json({
    success: true,
    reviews: product.reviews,
  });
};
