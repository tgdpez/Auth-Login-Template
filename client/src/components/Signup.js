import React from "react";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [error, setError] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      firstname: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    try {
      let res = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      let data = await res.json();

      //Check response - if error, display it
      if (res.status !== 202 || data.success === false) {
        setError(data.message);
        return;
      } else {
        //Token coming back is stored in cookie
        console.log("Data coming back: ", data);
        // history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
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

      <button
        type="submit"
        // enabled={Boolean(error).toString()}
        className="btn btn-dark btn-lg btn-block"
      >
        Submit
      </button>
      <p className="error">{error}</p>
    </form>
  );
}
