import React from "react";
import HelloWorld from "./HelloWorld";

//import reducer
import reducer from "./reducers";
import { createStore } from "redux";
const initialState = "React";
const store = createStore(reducer, initialState);

const App = () => {
  return <HelloWorld tech={store.getState()} />;
};

export default App;
