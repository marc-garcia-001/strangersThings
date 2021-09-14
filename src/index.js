import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Redirect
} from "react-router-dom";

import { NavBar } from "./components";


const App = () => {
  return (
    <div id="App">
      <NavBar />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);