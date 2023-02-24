import React from "react";
import "./App.css";
import { Home } from "./screens";
import { Provider } from "react-redux";
import store from "./redux/index";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
