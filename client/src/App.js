import * as React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { useAuth } from "./utils/provideAuth";

function App() {
  let auth = useAuth();

  function CustomRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user._id ? (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location },
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  }

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user._id ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              Test Site
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <CustomRoute exact path="/">
                <Login />
              </CustomRoute>
              <CustomRoute exact path="/login">
                <Login />
              </CustomRoute>
              <CustomRoute path="/signup">
                <Signup />
              </CustomRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/*">
                <Dashboard />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
