import React, { Component } from "react";
import mainUrl from "./img.js";
import "./Form.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgUrl: mainUrl,
      name: null,
      price: null,
      editing: false
    };

    this.handleUrl = this.handleUrl.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    //this.handleAddToInventory = this.handleAddToInventory.bind(this);
  }

  componentDidMount() {
    let currentPath = this.props.location.pathname;
    if (currentPath !== "/") {
      const id = this.props.match.params.id;
      axios.get(`http://localhost:3001/api/product?id=${id}`).then(res => {
        const data = res.data[0];
        this.setState({ id: id, name: data.name, price: data.price, imgUrl: data.img_url, editing: true });
      });
    } else if (currentPath === "/") {
      this.setState({
        imgUrl: mainUrl,
        name: "",
        price: "",
        editing: false
      });
    }
  }

  handleUrl(event) {
    const { name, price } = this.state;

    this.setState({ imgUrl: event.target.value, name: name, price: price });
    // sets the image back to the no image available
    if (event.target.value === "") {
      this.setState({ imgUrl: mainUrl, name: name, price: price });
    }
  }

  handleName(event) {
    const { imgUrl, price } = this.state;
    this.setState({ name: event.target.value, price: price, imgUrl: imgUrl });
  }

  handlePrice(event) {
    const { imgUrl, name } = this.state;
    this.setState({ price: event.target.value, name: name, imgUrl: imgUrl });
  }

  clearInputs(event) {
    const productName = document.querySelector(".productName");
    const priceInput = document.querySelector(".price");
    const url = document.querySelector(".url");

    productName.value = "";
    priceInput.value = "";
    url.value = "";
    this.setState({
      imgUrl: mainUrl,
      name: "",
      price: "",
      id: ""
    });

    this.updateProduct = this.updateProduct.bind(this);
  }

  createProduct() {
    const { imgUrl, name, price } = this.state;

    axios.post(`http://localhost:3001/api/product?name=${name}&price=${price}&img_url=${imgUrl}`).then(() => {
      this.setState({ imgUrl: mainUrl, name: "", price: "", editing: false });
      this.props.getAllProducts();
      this.clearInputs();
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.location.pathname !== "/add" && this.props.history.location.pathname === "/add") {
      this.clearInputs();
    }
  }

  updateProduct(id, name, price, imgUrl) {
    axios
      .put(`http://localhost:3001/api/editProduct?id=${id}&name=${name}&price=${price}&imgUrl=${imgUrl}`)
      .then(this.setState({ id: null, name: "", price: "", imgUrl: mainUrl }));
  }

  render() {
    const { id, name, price, imgUrl } = this.state;

    let actionButton = this.state.editing ? (
      <button onClick={() => this.updateProduct(id, name, price, imgUrl)} className="form-button">
        Update Product
      </button>
    ) : (
      <button onClick={this.createProduct} className="form-button">
        Add to inventory
      </button>
    );

    let urlValue;
    if (imgUrl === mainUrl) {
      urlValue = "";
    } else {
      urlValue = imgUrl;
    }
    return (
      <div className="form">
        {console.log(this.props)}
        <img src={imgUrl} alt="product" className="form-img" />
        <p>Product Name:</p>
        <input type="text" onChange={this.handleName} className="productName" value={name} />
        <p>Price</p>
        <input type="text" onChange={this.handlePrice} className="price" value={price} />
        <p>Image URL:</p>
        <input type="text" onChange={this.handleUrl} className="url" value={urlValue} />
        <br />
        <Link to="/">
          <button className="form-button">Cancel</button>
        </Link>
        {/*TODO: make sure if the person is editing a product, the button says 'Save changes'*/}
        <Link to="/">{actionButton}</Link>
      </div>
    );
  }
}

export default Form;
