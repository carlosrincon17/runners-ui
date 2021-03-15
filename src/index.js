import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "./index.css";

import Index from "views/Index.js";
import Landing from "components/landing/Landing.js";
import Login from "components/auth/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "components/auth/Register.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/registro/:distance"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
