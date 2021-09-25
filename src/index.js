import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getCurrentUser } from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { NavBar, Home, Login, Register, Posts, MessageForm, Profile } from "./components";

const App = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="App">
      <NavBar isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/login">
          <Login 
            isLoggedIn={ isLoggedIn }
            setIsLoading={ setIsLoading } 
            setIsLoggedIn={ setIsLoggedIn } 
            token={ token }
            setToken={ setToken }
            currentUser={ currentUser } 
            setCurrentUser={ setCurrentUser }
          />
        </Route>
        <Route path="/register">
          <Register 
            isLoggedIn={ isLoggedIn }
            setIsLoading={ setIsLoading } 
            setIsLoggedIn={ setIsLoggedIn } 
            token={ token }
            setToken={ setToken }
            currentUser={ currentUser } 
            setCurrentUser={ setCurrentUser }
          />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route>
          <Profile 
            token={ token }
          />
        <Route path="/MessageForm">
          <MessageForm />
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
