import React from "react";
import "./Product.css";

// destructures the props
const Product = ({ item, getSelectedProduct, deleteProduct, getAllProducts }) => {
  return (
    <div className="product-item">
      <img src={item.img_url} alt="item" className="form-img" />
      <li>name: {item.name} </li>
      <li>price: {item.price}</li>

      <button
        onClick={() => {
          deleteProduct(item.id);
          getAllProducts();
        }}>
        delete
      </button>

      <button
        onClick={() => {
          getSelectedProduct(item.id);
        }}>
        Edit
      </button>
    </div>
  );
};

export default Product;
