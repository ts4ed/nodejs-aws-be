"use strict";
const { connectMongo } = require("./db/connect");
require("dotenv").config();
const { Product } = require("./db/productModel");
const { v4: uuidv4 } = require("uuid");

module.exports.createProduct = async (event) => {
  const { name, price, description, yearCreation, authtor, title, image } =
    JSON.parse(event.body);
  await connectMongo();
  const product = new Product({
    productName: name,
    price: price,
    description: description,
    yearCreation: yearCreation,
    authtor: authtor,
    title: title,
    image: image,
    id: uuidv4(),
  });
  await product.save();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: product,
    }),
  };
};
