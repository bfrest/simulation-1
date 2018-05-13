import React, { Component } from "react";
import "./Product.css";
import axios from "axios";

const Product = ({ item, mountComponent }) => {
  return (
    <div className="product-item">
      <img src={item.image_url} alt="item image" className="form-img" />
      <li>name: {item.name} </li>
      <li>price: {item.price}</li>
      <button
        onClick={id => {
          axios.delete(`http://localhost:3001/api/products?product_id=${item.product_id}`).then(mountComponent);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Product;
