import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav">
        <h2 className="logo">Super App</h2>
        <div className="actions">
          <Link to="/">
            <button className="btn">ToDo</button>
          </Link>
          <Link to="/test">
            <button className="btn">Weather</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
