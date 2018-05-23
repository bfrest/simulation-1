import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    const { inventoryList, mountComponent, getSelectedProduct } = this.props;
    return (
      <div>
        <p>This is the dashboard</p>
        {inventoryList.map(item => {
          return <Product item={item} mountComponent={mountComponent} getSelectedProduct={getSelectedProduct} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
