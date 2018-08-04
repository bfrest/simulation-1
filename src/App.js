import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// Components
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      deleted: null,
      selected: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.getSelectedProduct = this.getSelectedProduct.bind(this);
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

  getSelectedProduct(id) {
    this.setState({ selected: id });
  }

  // cancels the edit on a product
  cancelEdit() {
    this.setState({ selected: null });
  }

  render() {
    const { inventory, selected } = this.state;
    return (
      <div className="App-Wrapper">
        <Header />
        <div className="App">
          <Dashboard inventoryList={inventory} getAllProducts={this.getAllProducts} getSelectedProduct={this.getSelectedProduct} />
          <Form getAllProducts={this.getAllProducts} cancelEdit={this.cancelEdit} selectedProduct={selected} />
        </div>
      </div>
    );
  }
}

export default App;
