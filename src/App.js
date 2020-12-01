import React, { Component } from "react";
import PizarraComponent from "./Components/PizarraComponent";
const axios = require("axios").default;
class App extends Component {
trailers = axios.get(`http:localhost:3050/`)
              .then((res) => res.data)

  }

  render() {
    return (
      <div>
        <PizarraComponent trailer={this.state.trailers} />
      </div>
    );
  }
}

export default App;
