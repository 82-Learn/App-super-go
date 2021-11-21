import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/footer/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/login/SignUp";
import Purpose from "../pages/footer/Purpose";
import Main from "../topics/Main";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/purpose" component={Purpose} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/dash" component={Main} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
