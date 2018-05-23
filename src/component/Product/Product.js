import React from "react";
import "./Product.css";
import axios from "axios";

// destructures the props
const Product = ({ item, mountComponent, getSelectedProduct }) => {
  return (
    <div className="product-item">
      <img src={item.image_url} alt="item" className="form-img" />
      <li>name: {item.name} </li>
      <li>price: {item.price}</li>

      <button
        onClick={id => {
          axios.delete(`http://localhost:3001/api/products?product_id=${item.product_id}`).then(mountComponent);
        }}
      >
        delete
      </button>

      <button
        onClick={() => {
          getSelectedProduct(item.product_id, item.name, item.price, item.image_url);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default Product;
