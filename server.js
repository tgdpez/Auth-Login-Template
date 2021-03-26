require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;
const pathToKey = path.join(__dirname, "private_key.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

require("./config/database");

app.use(cookieParser(PRIV_KEY));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

require("./passport/authenticateJWT")(passport);
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, "/client/public")));

app.use("/", require("./routes/index"));

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
