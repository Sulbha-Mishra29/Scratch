import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
const store = createStore(
  // Creating instance of store.
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
