"use strict";
const { connectMongo } = require("./db/connect");
require("dotenv").config();
const { Product } = require("./db/productModel");

const getProductById = async (event) => {
  const { productId: id } = event.pathParameters;

  await connectMongo();
  const product = await Product.findOne({ id: id });
  if (!product) {
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Not Found",
      }),
    };
  }
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

module.exports = {
  getProductById,
};
