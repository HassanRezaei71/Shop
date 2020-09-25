import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DefaultContainer from "./container";

function App() {
  return (
    <div className="App">
      <Router>
        <DefaultContainer />
      </Router>
    </div>
  );
}

export default App;
