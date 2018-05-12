import React, { Component } from "react";
import "./Product.css";
const Product = ({ item }) => {
  return (
    <div className="product-item">
      <img src={item.image_url} alt="item image" className="form-img" />
      <li>name: {item.name} </li>
      <li>price: {item.price}</li>
    </div>
  );
};

export default Product;
