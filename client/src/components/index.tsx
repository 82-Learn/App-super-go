import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

axios.defaults.baseURL = "http://localhost:3000/";

ReactDOM.render(<App />, document.getElementById("root"));
