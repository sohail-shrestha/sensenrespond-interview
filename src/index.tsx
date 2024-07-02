import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Home } from "./features/home/Home";
import { store } from "./store/store";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
);
