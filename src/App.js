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
      selected: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.getSelectedProduct = this.getSelectedProduct.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  }

  getSelectedProduct(product_id, name, price, image_url) {
    this.setState({ selected: { product_id, name, price, image_url } });
  }

  // cancels the edit on a product
  cancelEdit() {
    this.setState({ selected: "" });
  }

  render() {
    const { inventory } = this.state;
    return (
      <div className="App">
        <Header />
        <Form getAllProducts={this.componentDidMount} cancelEdit={this.cancelEdit} />
        <Dashboard inventoryList={inventory} mountComponent={this.componentDidMount} getSelectedProduct={this.getSelectedProduct} />
        {console.log(this.state.selected)}
      </div>
    );
  }
}

export default App;
