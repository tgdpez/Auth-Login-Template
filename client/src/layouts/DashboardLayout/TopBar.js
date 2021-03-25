import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Logo from "../../components/logo";

const navbarToggler = {
  top: ".25rem",
  right: "1rem",
};

const TopBar = (onMobileNavOpen, ...props) => {
  const { logout } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light flex-md-nowrap shadow">
      <div className="container-fluid">
        <div className="navbar-brand col-md-3 col-lg-2 px-3">
          <Logo to="/" />
        </div>
        <button
          className="navbar-toggler d-md-none collapsed"
          type="button"
          css={navbarToggler}
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav px-3 d-none d-sm-block d-sm-none d-md-block">
          <div className="nav-item text-nowrap">
            <button
              css={{ backgroundColor: "unset" }}
              className="nav-link border-0"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
