import React from "react";
import { useHistory } from "react-router-dom";

const SignoutBtn = () => {
  let history = useHistory();
  //TODO: Destroy jwt cookie
  //TODO: Redirect to login page
  const handleClick = () => history.push("/");
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      Sign out{" "}
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
