import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/provideAuth";

export default function Signup() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let history = useHistory();
  let auth = useAuth();
  const error = auth.error;

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    auth.signup(credentials, () => {
      //Redirect to dashboard - Because of context - the app will know to
      //allow the user to reach the page - or redirect them to login.
      history.push("/dashboard");
    });
  };

  //Run input validation
  // const handleChange = ()=>{

  // }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          onChange={(event) => setLastName(event.target.value)}
          className="form-control"
          placeholder="Last name"
        />
      </div>

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

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Submit
      </button>
      <p className="error">{error}</p>
    </form>
  );
}
