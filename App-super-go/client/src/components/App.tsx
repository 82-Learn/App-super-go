import * as React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import { GlobalStyle } from "./styles/global.styles";
import Routes from "./routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Layout />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
