import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DefaultContainer from "./container";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <DefaultContainer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
