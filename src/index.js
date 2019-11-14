import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducers";
import App from "./components/App";

const store = createStore(counter);
const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <App
      value={store.getState().counter}
      Inc={() => store.dispatch({ type: "INCREMENT" })}
      Dec={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootElement
  );
};

render();

store.subscribe(render);
