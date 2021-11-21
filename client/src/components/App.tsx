import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./pages/footer/Footer";

import Layout from "./pages/Layout";
import { GlobalStyle } from "./styles/global.styles";
import Routes from "./routes/index";

function App() {
  return (
    <div>
      <GlobalStyle />
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Layout />
      )}
      <Router>
        <Routes />
      </Router>
      {location.pathname !== "/login" &&
        location.pathname !== "/users" &&
        location.pathname !== "/dash" &&
        location.pathname !== "/signup" && <Footer />}
    </div>
  );
}

export default App;
