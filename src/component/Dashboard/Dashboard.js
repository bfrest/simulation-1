import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
    this.getAllProducts = this.getAllProducts.bind(this);
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
  }

  render() {
    const { inventory } = this.state;
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
