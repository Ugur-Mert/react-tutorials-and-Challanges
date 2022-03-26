import React from "react";
import logo from "../images/logo192.png";

export default function Navbar() {
  return (
    <nav>
      <img className="react-logo" src={logo} alt="react-logo" />
      <h3 className="react-head">ReactFacts</h3>
      <h4 className="nav-text">React Course - Project 1</h4>
    </nav>
  );
}
