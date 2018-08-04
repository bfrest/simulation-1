import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  deleteProduct(id) {
    axios.delete(`http://localhost:3001/api/products?product_id=${id}`).then(res => {
      console.log(res);
    });
  }

  render() {
    const { inventoryList, getSelectedProduct, getAllProducts } = this.props;
    return (
      <div className="dashboard-wrapper">
        {inventoryList.map(item => {
          return <Product item={item} deleteProduct={this.deleteProduct} getAllProducts={getAllProducts} getSelectedProduct={getSelectedProduct} key={item.id} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
