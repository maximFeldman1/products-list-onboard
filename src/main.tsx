import React from "react";
import ReactDOM from "react-dom";
import { worker } from "./mockserver";
import { App } from "./App";

import "./index.css";

const createApp = async () => {
  await worker.start();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

createApp();
