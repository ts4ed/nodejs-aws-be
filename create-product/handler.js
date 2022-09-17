"use strict";
const { connectMongo } = require("./db/connect");
require("dotenv").config();
const { Product } = require("./db/productModel");

module.exports.hello = async (event) => {
  const { name, price, description } = JSON.parse(event.body);
  await connectMongo();
  const product = new Product({
    productName: name,
    price: price,
    description: description,
  });
  await product.save();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: product,
    }),
  };
};
