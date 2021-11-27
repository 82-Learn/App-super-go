import * as React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./pages/footer/Footer";

import Layout from "./pages/Layout";
import { GlobalStyle } from "./styles/global.styles";
import Routes from "./routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        {location.pathname !== "/signup" && location.pathname !== "/login" && (
          <Layout />
        )}

        <Routes />

        {location.pathname !== "/login" &&
          location.pathname !== "/users" &&
          location.pathname !== "/dash" &&
          location.pathname !== "/signup" && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
