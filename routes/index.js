const express = require("express");
const router = express.Router();

const userLogin = require("../controllers/login");
const userSignup = require("../controllers/signup");
const protectedResource = require("../controllers/protectedResource");

//Login users
router.use("/users", userLogin);

//Register users
router.use("/users", userSignup);

//Protected route
router.use("/protected", protectedResource);

module.exports = router;
