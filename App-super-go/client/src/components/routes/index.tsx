import * as React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/footer/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/login/SignUp";
import Purpose from "../pages/footer/Purpose";
import Main from "../topics/Main";
import Test from "../topics/Test";
import Footer from "../pages/footer/Footer";

const Routes = withRouter(({ location }) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/purpose" component={Purpose} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/dash" component={Main} />
        <Route path="/test" component={Test} />
        <Route component={NotFound} />
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </>
  );
});

export default Routes;
