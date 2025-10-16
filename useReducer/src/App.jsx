import React, { useReducer } from "react";
import Counter from "./Counter";

import "./App.css";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return <Counter counter={counter} dispatch={dispatch} />;
}

export default App;
