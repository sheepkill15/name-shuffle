import { initializeIcons } from "@fluentui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

initializeIcons();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
