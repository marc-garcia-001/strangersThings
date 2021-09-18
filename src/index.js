import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Redirect
} from "react-router-dom";

import { Posts } from './components';
import { NavBar } from './components';

const App = () => {
  return (
    <div id="App">
      <h1>Hello, World!!!!</h1>
      <NavBar />
      <Posts />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);