import React, { Component } from "react";
import Home from "./Components/HomeComponent";
import Login from "./Components/LoginComponent";
import NavbarC from "./Components/NavbarComponent";
import AddTrailerComponent from "./Components/AddTrailerComponent";
import Registry from "./Components/RegistryComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const axios = require("axios").default;

class App extends Component {
  state = {
    trailers: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:3050/").then((res) => {
      const trailersGot = res.data;
      this.setState({ trailers: trailersGot });
    });
  }

  render() {
    return (
      <div className="main-container">
        <NavbarC />
        <Router>
          <Switch>
            <Route path="/register" component={Registry}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/add" component={AddTrailerComponent}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
