const express = require("express");
const passport = require("passport");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

require("./config/database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("./utils/passport")(passport);
app.use(passport.initialize());

// app.use(express.static(path.join(__dirname, "/client/public")));

app.use("/", require("./routes/index"));

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));