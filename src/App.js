import React, { Component } from "react";
import Home from "./Components/HomeComponent";
import NavbarC from "./Components/NavbarComponent";
import AddTrailerComponent from "./Components/AddTrailerComponent";
import EditTrailerComponent from "./Components/EditTrailerComponent";
import TrailerListComponent from "./Components/TrailerListComponent";
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
            <Route path="/list" component={TrailerListComponent}></Route>
            <Route path="/add" component={AddTrailerComponent}></Route>
            <Route path="/edit/:id" component={EditTrailerComponent}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
