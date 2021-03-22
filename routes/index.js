const express = require("express");
const router = express.Router();

const userLogin = require("../controllers/login");
const userSignup = require("../controllers/signup");
const userLogout = require("../controllers/logout");
const protectedResource = require("../controllers/protectedResource");
const authenticated = require("../controllers/authenticated");

//Login users
router.use("/users", userLogin);

//Logout users
router.use("/users", userLogout);

//Register users
router.use("/users", userSignup);

//Protected route
router.use("/protected", protectedResource);

//Checks Authentication
router.use("/auth", authenticated);

module.exports = router;
