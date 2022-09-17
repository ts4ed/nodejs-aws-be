const mongoose = require("mongoose");
const randomstring = require("randomstring");

const productShema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  id: {
    type: Number,
    default: randomstring.generate({ length: 5, charset: "numeric" }),
  },
});

const Product = mongoose.model("product", productShema);

module.exports = {
  Product,
};
