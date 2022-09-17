"use strict";
const { connectMongo } = require("./db/connect");
require("dotenv").config();
const { Product } = require("./db/productModel");

module.exports.getProductById = async (event) => {
  const { productId: id } = event.pathParameters;

  await connectMongo();
  const product = await Product.findOne({ id: id });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      product: product,
    }),
  };
};
