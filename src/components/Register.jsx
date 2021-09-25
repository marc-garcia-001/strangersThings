import React, { useState } from "react";
import { registerUser } from "../api";
import { storeToken, clearCurrentUser } from "../auth";
import { useHistory } from "react-router-dom";

const Register = ({ isLoggedIn, setIsLoading, setIsLoggedIn, setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  return (
    <div className="register-main-container">
      {isLoggedIn ? (
        <>
          <h1>Welcome</h1>
          <button
            className="logoutButton"
            onClick={(e) => {
              e.preventDefault();
              setIsLoggedIn(false);
              clearCurrentUser();
              setToken("");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <form
          id="register"
          onSubmit={async (event) => {
            event.preventDefault();
            setIsLoading(true);

            try {
              const results = await registerUser(userName, password);
              storeToken(results.data.token);
              setToken(results.data.token);
              setIsLoggedIn(true);
              setUserName("");
              setPassword("");
            } catch (err) {
              console.log(err);
            } finally {
              setIsLoading(false);
            }

            history.push('/profile')
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

          <button>Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;
