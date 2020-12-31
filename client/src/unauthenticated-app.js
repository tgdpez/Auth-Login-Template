/** @jsxImportSource @emotion/react */
import * as React from "react";
import { jsx } from "@emotion/react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { Modal, ModalContents, ModalOpenButton } from "./components/modal";
import { Logo } from "./components/logo.js";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";

function handleSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
}

function onChange(event) {
  console.log(event.target.value);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Delta+LLC
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="contained"
      css={{ marginTop: "1rem" }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

function UnauthenticatedApp({ login, register }) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} className={classes.formContainer}>
        <div className={classes.paper}>
          <Logo />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              variant="filled"
              margin="normal"
              onChange={onChange}
            />
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              variant="filled"
              margin="normal"
            />
            <LoginButton />
          </form>
        </div>
        <div css={{ position: "absolute", bottom: "1.2rem" }}>
          <Copyright />
        </div>
      </Grid>
    </Grid>
  );
}

export { UnauthenticatedApp };
