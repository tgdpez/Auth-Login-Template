/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

import * as React from "react";
import Button from "@material-ui/core/Button";
import * as mq from "./styles/media-queries";
import { useAuth0 } from "@auth0/auth0-react";

function AuthenticatedApp() {
  const { logout, user } = useAuth0();
  return (
    <React.Fragment>
      <div>
        {/* {user.username} */}
        <h1>Hello {user.name}</h1>
        <h1>You have logged into the application</h1>
      </div>
      <Button
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Logout
      </Button>
    </React.Fragment>
  );
}

export { AuthenticatedApp };
