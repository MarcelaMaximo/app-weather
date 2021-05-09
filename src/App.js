import React from "react";
import './App.css';
import Weather from "./Weather";

export default  function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>  
        <footer>
          <a
            href="https://github.com/MarcelaMaximo/app-weather"
            target="_blank"
            rel="noopener noreferrer"
          > Open-source 
          </a>
          {" "} coded by Marcela Máximo
        </footer>
      </div>
    </div>
  );
}

