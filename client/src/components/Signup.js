import React from "react";

export default function Signup() {
  const [error, setError] = React.useState(null);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      firstname: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    console.log("Credentials being sent: ", credentials);

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
      console.log(data);
      return data;
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
      <p className="forgot-password text-right"></p>
    </form>
  );
}
