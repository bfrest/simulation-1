import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

// destructures the props
const Product = ({ item, deleteProduct, getAllProducts }) => {
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

      <Link to={`/edit/${item.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Product;
