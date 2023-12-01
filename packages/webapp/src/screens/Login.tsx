import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const baseURL = "http://127.0.0.1:3002";
  const navigate = useNavigate();
  const [error, isError] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    fetch(`${baseURL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        un: formData.get("username"),
        pw: formData.get("password"),
      }),
    })
      .then((res) => {
        if (res.ok) {
          isError(false);
          return res.json();
        }
        throw new Error(`${res.status}`);
      })
      .then((token) => {
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => {
        isError(true);
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-style">
        <h2 className="form-title">Login</h2>

        <div className="form-field">
          <label htmlFor="title">Username</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            required
          />
        </div>

        <div>
          {error ? <span>Please try again.</span> : null}
          <Button block>Login</Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
