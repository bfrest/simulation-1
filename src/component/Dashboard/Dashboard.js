import React, { Component } from "react";

import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p>This is the dashboard</p>
        {this.props.inventoryList.map(item => {
          return <Product item={this.props.item} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
