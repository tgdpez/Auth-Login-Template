import * as React from "react";
import { keyframes } from "@emotion/react";
import { Button as MaterialButton } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import { Link as RouterLink } from "react-router-dom";
import * as colors from "../styles/colors";
import * as mq from "../styles/media-queries";
import { FaSpinner } from "react-icons/fa";

const btnVariants = makeStyles({
  primary: {
    backgroundColor: "black",
    color: "orange",
  },
  secondary: {
    color: "green",
    "&:hover": {
      backgroundColor: "red",
    },
  },
});

const Button = ({ variant = "contained", className, children }) => {
  return (
    <MaterialButton variant={variant} className={btnVariants()[className]}>
      {children}
    </MaterialButton>
  );
};

export { Button };
