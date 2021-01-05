import { createMuiTheme } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";
import jsonTheme from "./themeJson.json";

const customTheme = JSON.parse(JSON.stringify(jsonTheme));

const theme = createMuiTheme({
  customTheme,
  shadows,
  typography,
});

export default theme;
