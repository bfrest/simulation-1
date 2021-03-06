import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";
import axios from "axios";
import { setTimeout } from "timers";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
    this.getAllProducts = this.getAllProducts.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  }

  getAllProducts() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  }

  deleteProduct(id) {
    axios.delete(`http://localhost:3001/api/products?product_id=${id}`).then(res => {
      console.log(res);
    });
    this.getAllProducts();
  }

  render() {
    const { inventory } = this.state;
    setTimeout(this.getAllProducts(), 50);
    return (
      <div className="dashboard-wrapper">
        {inventory.map(item => {
          return <Product item={item} deleteProduct={this.deleteProduct} getAllProducts={this.getAllProducts} key={item.id} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
