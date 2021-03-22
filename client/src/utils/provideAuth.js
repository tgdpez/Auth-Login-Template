import { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const isAuthenticated = async () => {
  try {
    const res = await fetch("http://localhost:5000/auth/authenticated", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const history = useHistory();
  const [user, setUser] = useState({ success: false });
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    //Check if client already has signed cookie
    isAuthenticated().then((result) => {
      console.log("Checking auth result inside provide auth: ", result);
      if (result.success) {
        setAuthenticated(true);
      }
    });
  }, [history]);

  const login = async (credentials, cb) => {
    try {
      let res = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      let data = await res.json();
      console.log("Login Hook: ", data);

      if (data.success) {
        setUser({ data });
        cb();
      } else if (!data.success) {
        //Display error
        setError(data.message);
      } else {
        console.log("There was a problem with the login request: ", data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const signup = async (credentials, cb) => {
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

      const data = await res.json();
      console.log("Singup Hook: ", data);

      if (data.success) {
        setUser({ data });
        cb();
      } else if (!data.success) {
        //Display error
        setError(data.message);
      } else {
        console.log("There was a problem with the signup request: ", data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const logout = async (cb) => {
    try {
      let res = await fetch("http://localhost:5000/users/logout", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUser({ success: false });
      cb(data);
    } catch (err) {
      console.log("There was an error with the logout request: ", { err });
    }
  };

  // Return the user object and auth methods
  return {
    authenticated,
    user,
    login,
    signup,
    logout,
    error,
  };
}
