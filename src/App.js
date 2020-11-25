import React, { Component } from "react";
import { Button } from "reactstrap";
import PizarraComponent from "./Components/PizarraComponent";
const axios = require("axios").default;

class App extends Component {
  getVideos() {
    console.log("tango hambre");
  }
  render() {
    return (
      <div>
        <PizarraComponent />
      </div>
    );
  }
}

export default App;
