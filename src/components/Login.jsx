import React, { useState } from "react";
import { Redirect } from "react-router";
import { loginUser, getCurrentUser } from "../api";
import { storeToken, clearCurrentUser } from "../auth";

const Login = ({ isLoggedIn, setIsLoading, setIsLoggedIn, token, setToken, currentUser, setCurrentUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-main-container">
      {isLoggedIn ? (
        <>
          <h1>Welcome Back { userName }!</h1>
          <button
            className="logoutButton"
            onClick={(e) => {
              e.preventDefault();
              setIsLoggedIn(false);
              clearCurrentUser();
              setToken("");
              setUserName("");
              setPassword("");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <form
          id="login"
          // ask about on submit and the try catch block
          onSubmit={async (event) => {
            event.preventDefault();
            setIsLoading(true);

            try {
              const results = await loginUser(userName, password);
              storeToken(results.data.token);
              setToken(results.data.token);
              setIsLoggedIn(true);
              
            } catch (error) {
              console.log(error);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          <fieldset>
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              min="8"
              id="userName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </fieldset>

          <button>Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
