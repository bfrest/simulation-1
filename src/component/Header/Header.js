import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2>Shelfie Logo</h2>
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/add">
        <button>Add Inventory</button>
      </Link>
    </div>
  );
};

export default Header;
