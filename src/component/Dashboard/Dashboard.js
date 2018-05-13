import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    const { inventoryList, mountComponent } = this.props;
    return (
      <div>
        <p>This is the dashboard</p>
        {inventoryList.map(item => {
          return <Product item={item} mountComponent={mountComponent} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
