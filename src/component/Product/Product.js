import React, { Component } from "react";

const Product = ({ item }) => {
  return (
    <div>
      <h3>product: </h3>
      <li>name:{item.name} </li>
      <li>price: </li>
      <li>image: </li>
    </div>
  );
};

export default Product;
