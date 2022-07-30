import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Body/Homepage";
import { BrowserRouter } from "react-router-dom";
import User_homepage from "./userComponents/Homepage/User_homepage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Homepage />
          {/* <User_homepage /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
