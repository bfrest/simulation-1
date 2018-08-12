import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

// destructures the props
const Product = ({ item, deleteProduct, getAllProducts }) => {
  return (
    <div className="product-item">
      <img src={item.img_url} alt="item" className="form-img" />
      <div className="info">
        <li>{item.name} </li>
        <li>${item.price}</li>
      </div>
      <div className="productButtons">
        <button
          onClick={() => {
            deleteProduct(item.id);
            getAllProducts();
          }}>
          delete
        </button>
      </div>

      <Link to={`/edit/${item.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Product;
