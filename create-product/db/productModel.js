const mongoose = require("mongoose");

const productShema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  authtor: { type: String },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  id: { type: String },
  title: { type: String, required: true },
  count: { type: Number, default: 1 },
  image: { type: String, required: true },
  yearCreation: { type: Number, required: true },
});

const Product = mongoose.model("product", productShema);

module.exports = {
  Product,
};
