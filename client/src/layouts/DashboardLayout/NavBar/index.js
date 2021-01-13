/** @jsxImportSource @emotion/react */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const sideBar = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  zIndex: 100,
  padding: "72px 0 0",
  boxShadow: "inset -1px 0 0 rgba(0, 0, 0, .1)",
  navLink: {
    fontWeight: 500,
    color: "#333",
  },
};

const NavBar = (onMobileNavOpen, ...props) => {
  const { logout } = useAuth0();
  return (
    <nav
      css={sideBar}
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              css={sideBar.navLink}
              className="nav-link active"
              aria-current="page"
              href="/"
            >
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a css={sideBar.navLink} className="nav-link" href="/">
              <span data-feather="file"></span>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a css={sideBar.navLink} className="nav-link" href="/">
              <span data-feather="shopping-cart"></span>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a css={sideBar.navLink} className="nav-link" href="/">
              <span data-feather="users"></span>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a css={sideBar.navLink} className="nav-link" href="/">
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a css={sideBar.navLink} className="nav-link" href="/">
              <span data-feather="layers"></span>
              Integrations
            </a>
          </li>
          <li className="nav-item d-md-none collapsed">
            <button css={sideBar.navLink} className="nav-link" onClick={logout}>
              <span data-feather="layers"></span>
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
