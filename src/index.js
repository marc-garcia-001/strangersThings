import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { NavBar, Home, Login, Register, Posts } from "./components";

const App = () => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('isLoggedIn', isLoggedIn);
  return (
    <div id="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login 
            isLoggedIn={ isLoggedIn }
            setIsLoading={ setIsLoading } 
            setIsLoggedIn={ setIsLoggedIn } 
            setToken={ setToken }
          />
        </Route>
        <Route path="/register">
          <Register 
            isLoggedIn={ isLoggedIn }
            setIsLoading={ setIsLoading } 
            setIsLoggedIn={ setIsLoggedIn } 
            setToken={ setToken }
          />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
