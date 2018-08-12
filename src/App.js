import React, { Component } from "react";
import "./App.css";

// Components
import Header from "./component/Header/Header";
import routes from "./routes.js";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { inventory, selected } = this.state;
    return (
      <div className="App-Wrapper">
        <Header />
        <div className="App">{routes}</div>
      </div>
    );
  }
}

export default App;
