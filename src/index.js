import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "./index.css";

import Landing from "components/landing/Landing.js";
import Login from "components/auth/Login.js";
import Profile from "components/Profile/Profile.js";
import Register from "components/auth/Register.js";
import Regulation from "components/Regulation/Regulation";
import Admin from "./components/Admin/Admin";
import RecoveryPassword from "components/auth/RecoveryPassword";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route path="/recovery-password/:token" exact render={props => <RecoveryPassword {...props} />} />
      <Route path="/admin" exact render={props => <Admin {...props} />} />
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
      <Route
        path="/reglamento"
        exact
        render={props => <Regulation {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
