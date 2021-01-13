import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import { AuthenticatedApp } from "./Authenticated-app";

function App() {
  const { isAuthenticated, loginWithRedirect, isLoading, error } = useAuth0();

  if (error) {
    return <div>There was an error... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? <AuthenticatedApp /> : loginWithRedirect();
}

export default App;
