import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <form action="">
          <h1 className="login-head">Login</h1>
          <label for="id">ID</label>
          <input
            type="text"
            placeholder="Enter your ID"
            id="id"
            name="id"
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            required
          />
          <button className="login-page-bt" type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
