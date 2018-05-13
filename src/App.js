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
      inventory: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form getAllProducts={this.componentDidMount} />
        <Dashboard inventoryList={this.state.inventory} mountComponent={this.componentDidMount} />
        {console.log(this.state.inventory)}
      </div>
    );
  }
}

export default App;
