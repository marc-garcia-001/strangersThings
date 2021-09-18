import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //   import { registerUser } from "../api";
  // import { storeToken } from "../auth";

  return (
    <div className="register-main-container">
      <form
        id="register"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);

          try {
            const results = await registerUser(userName, password);
            storeToken(results.data.token);
            setIsLoggedIn(true);

            setUserName("");
            setPassword("");
          } catch (err) {
            console.log(err);
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

        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
