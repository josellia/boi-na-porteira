import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// ESTUDAR ISSO:https://thiagolima.blog.br/parte-5-pagina%C3%A7%C3%A3o-ordena%C3%A7%C3%A3o-e-filtros-em-apis-restful-3045d88b4114
