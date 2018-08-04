import React, { Component } from "react";
import mainUrl from "./img.js";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      product: {
        imgUrl: mainUrl,
        name: null,
        price: null
      }
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
    const { name, price } = this.state.product;

    this.setState({ product: { imgUrl: event.target.value, name: name, price: price } });
    // sets the image back to the no image available
    if (event.target.value === "") {
      this.setState({ product: { imgUrl: mainUrl, name: name, price: price } });
    }
  }

  handleName(event) {
    const { imgUrl, name, price } = this.state.product;
    this.setState({ product: { name: event.target.value, price: price, imgUrl: imgUrl } });
  }

  handlePrice(event) {
    const { imgUrl, name } = this.state.product;
    this.setState({ product: { price: event.target.value, name: name, imgUrl: imgUrl } });
  }

  clearInputs(event) {
    const productName = document.querySelector(".productName");
    const priceInput = document.querySelector(".price");
    const url = document.querySelector(".url");

    productName.value = "";
    priceInput.value = "";
    url.value = "";
    this.setState({
      product: {
        imgUrl: mainUrl,
        name: null,
        price: null
      }
    });
    //TODO: See if this invoke works
    this.props.cancelEdit();
  }

  createProduct() {
    const { imgUrl, name, price } = this.state.product;

    axios.post(`http://localhost:3001/api/product?name=${name}&price=${price}&img_url=${imgUrl}`).then(() => {
      this.setState({ product: { imgUrl: mainUrl, name: "", price: "" } });
      this.props.getAllProducts();
      this.clearInputs();
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedProduct !== prevProps.selectedProduct) {
      const { selectedProduct } = this.props;

      axios.get(`http://localhost:3001/api/product?id=${selectedProduct}`).then(res => {
        this.setState({ product: { name: res.data[0].name, price: res.data[0].price, imgUrl: res.data[0].img_url } });
        console.log(this.state.product);
      });
    }
  }

  render() {
    let thisObject;
    const { name, price, img_url } = this.state.product;

    return (
      <div className="form">
        <img src={this.state.product.imgUrl} alt="product" className="form-img" />
        <p>Product Name:</p>
        <input type="text" onChange={this.handleName} className="productName" />
        <p>Price</p>
        <input type="text" onChange={this.handlePrice} placeholder="0" className="price" />
        <p>Image URL:</p>
        <input type="text" onChange={this.handleUrl} className="url" />
        <br />
        <button onClick={this.clearInputs} className="form-button">
          Cancel
        </button>
        {/*TODO: make sure if the person is editing a product, the button says 'Save changes'*/}
        <button onClick={this.createProduct} className="form-button">
          Add to inventory
        </button>
      </div>
    );
  }
}

export default Form;
