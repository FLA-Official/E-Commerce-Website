const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path"); // to get backend directory in this app
const fs = require("fs");
const { type } = require("os");
const { log } = require("console");

app.use(express.json()); // Required for parsin JSON requests
app.use(cors());

//Database Connection With MongoDB

require('dotenv').config(); // providing credentials through .env file security purpose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//API Creation

app.get("/", (req, res) => {
  res.send("API is Running"); // Don't repeat res.send as it doesn't take repeatative response
});

//image storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploadPath = "./upload/images";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const upload = multer({ storage: storage });

//Creating Upload Endpoint for Image
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }

  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Schema for creating products

const Product = mongoose.model("product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Endpoint for addproduct
//here try-catch method used to catch error
app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({}); // creating an array where product id will be stored
    let id;
    if (products.length > 0) {
      let las_product_array = products.slice(-1);
      let last_product = las_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log(product);
    await product.save();
    console.log("Saved");

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (err) {
    console.error("Error saving product:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

//API for deleting product
// By providing ID, the product will be removed from database
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  //response for frontend
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Creating API for getting all products
app.get("/allproducts", async (req, res) => {
  try {
    let products = await Product.find({});
    console.log("All Products Fetched");
    //response for frontend
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, (error) => {
  if (error) {
    console.log("Error:" + error);
  }
  console.log("Server is running on port", port);
});
