import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
// import { createBrowserHistory } from "history";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import history from "./utils/history";

// const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
