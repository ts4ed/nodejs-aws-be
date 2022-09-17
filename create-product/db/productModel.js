const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productShema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  authtor: { type: String },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  id: {
    type: String,
    default: uuidv4(),
  },
  title: { type: String, required: true },
  count: { type: Number, default: 1 },
  image: { type: String, required: true },
  yearCreation: { type: Number, required: true },
});

const Product = mongoose.model("product", productShema);

module.exports = {
  Product,
};
