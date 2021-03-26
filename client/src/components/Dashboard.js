import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/provideAuth";

export default function Dashboard() {
  const auth = useAuth();
  const history = useHistory();

  console.log("Auth: ", auth.user);

  const SignoutBtn = () => {
    const handleClick = () => {
      auth.logout((data) => {
        console.log(data);
        history.push("/login");
      });
    };

    return (
      <button type="button" onClick={handleClick}>
        <h5>Sign out</h5>
      </button>
    );
  };

  return (
    <div>
      <h1>You've accessed the dashboard</h1>
      <h6>{`Hello ${auth.user.firstName} ${auth.user.lastName}`}</h6>
      <h6>{`ID: ${auth.user._id}`}</h6>
      <h6>{`Email: ${auth.user.email}`}</h6>
      <SignoutBtn />
    </div>
  );
}
