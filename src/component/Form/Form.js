import React, { Component } from "react";
import mainUrl from "./img.js";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgUrl: mainUrl,
      name: "",
      price: "",
      url: ""
    };
    this.handleUrl = this.handleUrl.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.createProduct = this.createProduct.bind(this);
    //this.handleAddToInventory = this.handleAddToInventory.bind(this);
  }

  handleUrl(event) {
    this.setState({ imgUrl: event.target.value });
    // sets the image back to the no image available
    if (event.target.value === "") {
      this.setState({ imgUrl: mainUrl });
    }
  }

  handleName(event) {
    this.setState({ newName: event.target.value });
  }

  handlePrice(event) {
    this.setState({ newPrice: event.target.value });
  }

  clearInputs(event) {
    const productName = document.querySelector(".productName");
    const priceInput = document.querySelector(".price");
    const url = document.querySelector(".url");

    productName.value = "";
    priceInput.value = "";
    url.value = "";
    this.setState({ imgUrl: mainUrl });
  }

  createProduct() {
    axios.post(`http://localhost:3001/api/products?name=${this.state.name}&price=${this.state.price}&image_url=${this.state.url}`);
    this.props.getAllProducts();
    this.clearInputs();
  }

  render() {
    const productName = document.querySelector(".productName");
    const priceInput = document.querySelector(".price");
    const url = document.querySelector(".url");
    return (
      <div>
        <img src={this.state.imgUrl} alt="picture of the product" />
        <p>Product Name:</p>
        <input type="text" onChange={this.handleName} className="productName" />
        <p>Price</p>
        <input type="text" onChange={this.handlePrice} placeholder="0" className="price" />
        <p>Image URL:</p>
        {/*TODO: Make the image stay the same size no matter what*/}
        <input type="text" onChange={this.handleUrl} className="url" />
        <button onClick={this.clearInputs}>Cancel</button>
        <button onClick={this.createProduct}>Add to inventory</button>
      </div>
    );
  }
}

export default Form;
