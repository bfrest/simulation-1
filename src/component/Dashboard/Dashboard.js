import React, { Component } from "react";

import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>This is the dashboard</p>
        <Product />
      </div>
    );
  }
}

export default Dashboard;
