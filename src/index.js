import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Redirect
} from "react-router-dom";

import { Header } from "./components";

const App = () => {
  return (
    <div id="App">
      <h1>Hello, World!!!!</h1>
      <Header />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);