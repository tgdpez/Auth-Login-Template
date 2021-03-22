import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/provideAuth";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let history = useHistory();
  let auth = useAuth();
  let error = auth.error;

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    auth.login(credentials, () => {
      history.push("/dashboard");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        onSubmit={handleSubmit}
        className="btn btn-dark btn-lg btn-block"
      >
        Sign in
      </button>
      <p className="forgot-password text-right"></p>
      <p className="error">{error}</p>
    </form>
  );
}
