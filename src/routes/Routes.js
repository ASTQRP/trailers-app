import React from "react";
import { BrowserRouter as Router, Swith, Route } from "react-router-dom";
import login from "../Components/LoginComponent";

function routes() {
  return (
    <Router>
      <switch>
        <Route exact path="/login" component={login} />{" "}
      </switch>
    </Router>
  );
}

export default routes;
