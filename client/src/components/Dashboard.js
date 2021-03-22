import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/provideAuth";

const SignoutBtn = () => {
  let auth = useAuth();
  const history = useHistory();

  const handleClick = () => {
    auth.logout((data) => {
      console.log({ data });
      history.push("/login");
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      <h5>Sign out</h5>
    </button>
  );
};

// React.useEffect(() => {
//   //TODO: Check for jwt (Authenticate)
// });

export default function Dashboard() {
  return (
    <div>
      <h1>You've accessed the dashboard</h1>
      {/* <button onClick={LogOut}>Log out</button> */}
      <SignoutBtn />
    </div>
  );
}
