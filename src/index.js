import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getCurrentUser } from "./api";
import { getToken } from "./auth";

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
  const [messageTarget, setMessageTarget] = useState('');
  const [postIDforMessage, setPostIDforMessage] = useState('');

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  })

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
          <Posts 
            messageTarget={ messageTarget }
            setMessageTarget={ setMessageTarget }
            setPostIDforMessage={ setPostIDforMessage }
          />
        </Route>
        <Route path='/profile'>
          <Profile 
            token={ token }
            messageTarget={ messageTarget }
            setMessageTarget={ setMessageTarget }
          />
        </Route>
        <Route path="/MessageForm">
          <MessageForm 
            messageTarget={ messageTarget }
            postIDforMessage={ postIDforMessage }
          />
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
