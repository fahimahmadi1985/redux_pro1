import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import face from "./reducers";
import Emoji from "./components/Emoji";

const store = createStore(face);
const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <Emoji
      emoji={store.getState()}
      smiling={() => store.dispatch({ type: "HAPPY" })}
      crying={() => store.dispatch({ type: "SAD" })}
    />,
    rootElement
  );
};

render();

store.subscribe(render);
