import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContainer } from "./context";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);
