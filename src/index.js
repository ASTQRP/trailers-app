import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes/Routes";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router routes={routes}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
