import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        <Form />
        <Dashboard />
      </div>
    );
  }
}

export default App;
