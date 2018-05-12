import React, { Component } from "react";

import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    const { inventoryList } = this.props;
    return (
      <div>
        <p>This is the dashboard</p>
        {inventoryList.map(item => {
          return <Product item={item} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
