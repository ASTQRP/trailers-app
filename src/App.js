import React, { Component } from "react";
import CarouselPage from "./Components/MainMovieComponent";
import NavbarComponent from "./Components/NavbarComponent";
import TrailersContainer from "./Components/TrailersContainer";
import Home from "./Components/HomeComponent";
import Login from "./Components/LoginComponent";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
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
        <Router>
          <Switch>
            <Route path="/register">Pagina de registro</Route>
            <Route path="/login" component={Login}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
