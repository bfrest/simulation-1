import React, { Component } from "react";
import mainUrl from "./img.js";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgUrl: mainUrl
    };
    this.handleUrl = this.handleUrl.bind(this);
  }

  handleUrl(event) {
    this.setState({ imgUrl: event.target.value });
  }

  clearInputs(event) {
    const productName = document.querySelector(".productName");
    const priceInput = document.querySelector(".price");
    const url = document.querySelector(".url");

    productName.value = "";
    priceInput.value = 0;
    //url.value = "";
    //this.setState({imgUrl: })

    //TODO: make the cancel button work this.setState({ imgUrl: mainUrl });
  }

  render() {
    const UrlCopy = this.state.imgUrl;
    return (
      <div>
        <img src={this.state.imgUrl} />
        <p>Product Name:</p>
        <input name="name" type="text" className="productName" />
        <p>Price</p>
        <input name="price" type="text" placeholder="0" className="price" />
        <p>Image URL:</p>
        {/*TODO: Make the image stay the same size no matter what*/}
        <input name="url" type="text" onChange={this.handleUrl} />
        <button onClick={this.clearInputs}>Cancel</button>
        <button>Add to inventory</button>
        {}
      </div>
    );
  }
}

export default Form;
