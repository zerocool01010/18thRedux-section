import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import storeRedux from './store/indexStore'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>
);
