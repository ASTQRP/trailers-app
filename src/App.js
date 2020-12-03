import React, { Component } from "react";
import CarouselPage from "./Components/MainMovieComponent";
import NavbarComponent from "./Components/NavbarComponent";
import TrailersContainer from "./Components/TrailersContainer";
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
        <NavbarComponent />
        <Router>
          <div>
            <Route
              path="/"
              component={() => (
                <TrailersContainer
                  trailerArray={this.state.trailers}
                ></TrailersContainer>
              )}
            ></Route>
            <Route path="/login" component={CarouselPage}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
