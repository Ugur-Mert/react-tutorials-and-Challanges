import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="react-img" src="../logo512.png" alt="react-logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
