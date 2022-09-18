"use strict";
const { connectMongo } = require("./db/connect");
require("dotenv").config();
const { Product } = require("./db/productModel");

const getProduct = async (event) => {
  await connectMongo();
  const products = await Product.find().select({ __v: 0, _id: 0 });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      products: products,
    }),
  };
};

module.exports = {
  getProduct,
};
