import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

import { BrowserRouter as Route } from "react-router-dom";

ReactDOM.render(
  <Route>
    <App />
  </Route>,
  document.getElementById("root")
);
