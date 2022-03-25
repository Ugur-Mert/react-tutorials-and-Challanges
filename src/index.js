import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

function Header() {
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

function MainContent() {
  return (
    <div>
      <h1>Why I am excited to learn react </h1>

      <ul>
        <li>Because so handy and useful</li>
        <li>More work opportunity</li>
        <li>Better than vue.</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Ozder development. All rights reserved</small>
    </footer>
  );
}

function WhyExcited() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>{<WhyExcited />}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
