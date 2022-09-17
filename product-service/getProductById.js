"use strict";
const { connectMongo } = require("./db/connect");
require("dotenv").config();
const { Product } = require("./db/productModel");

module.exports.getProductById = async (event) => {
  const { productId: id } = event.pathParameters;
  console.log(event);
  await connectMongo();
  const products = await Product.findOne({ id: id });
  return {
    statusCode: 200,
    body: JSON.stringify({
      products: products,
    }),
  };
};
