import React, { useState } from "react";

// import { loginUser } from "../api"
// import { storeToken } from "../auth"

const Login = ({ setIsLoading, setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-main-container">
      <form
        id="login"
        // ask about on submit and the try catch block
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);

          try {
            const resuls = await loginUser(userName, password);
            storeToken(results.data.token);
            setIsLoggedIn(true);

            setUserName("");
            setPassword("");
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
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            id="password"
            value={password}
          />
        </fieldset>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
