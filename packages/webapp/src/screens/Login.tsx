import React from "react";
import { Button } from "reactstrap";

const Login = () => {
  const baseURL = "http://127.0.0.1:3002";

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Form submitted");
    fetch(`${baseURL}/auth`, {
      method: "POST",
      body: JSON.stringify({
        un: formData.get("username"),
        pw: formData.get("password"),
      }),
    })
      .then((res) => {
        let token = res.json();
        console.log(token);
      })
      .catch((error) => console.error(error));
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
          <Button block>Login</Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
