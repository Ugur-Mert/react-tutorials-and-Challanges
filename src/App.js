import React from "react";
import MainContent from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <MainContent />
    </div>
  );
}
