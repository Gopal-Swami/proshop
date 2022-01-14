import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc fetch all products
// @route GET api products
// @access public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc fetch single product
// @route GET api products/:id
// @access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc fetch single product
// @route DELETE api products/:id
// @access Private / Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc create single product
// @route POST api products
// @access Private / Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Product",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Product Description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc update single product
// @route PUT api products
// @access Private / Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, countInStock, image, brand, category } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.countInStock = countInStock;
    product.brand = brand;
    product.category = category;
    product.image = image;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
