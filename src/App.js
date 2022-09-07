import React from "react";
import "./App.css";
import Barchart from "./Barchart";
import Scatterplot from "./Scatterplot";

function App() {
  return (
    <div className="App">
      <div>
        <Scatterplot />
        <h3>Scatterplot between Color Intensity and Hue</h3>
      </div>
      <div>
        <Barchart />
        <h3>Barchart between Alcohol category and Malic acid</h3>
      </div>
    </div>
  );
}

export default App;
