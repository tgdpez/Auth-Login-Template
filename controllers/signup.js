const express = require("express");
const router = express.Router();
const expressValidator = require("express-validator");
const User = require("../models/User");

// Register a new user
router.post("/signup", function (req, res, next) {
  const saltHash = authHelper.generatePassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    email: req.body.email,
    hash: hash,
    salt: salt,
  });

  //TODO: Make sure input is valid
  //TODO: If valid, check to see if user exists
  //TODO: If user is new, fill in fields with data sent in the body request
  //(name, email, password. Use bcrypt to hash the password before storing it in database)
  //TODO: If user already exists, send back notice

  try {
    newUser.save().then((user) => {
      //TODO: Redirect user automatically and log them in
      const jwt = authHelper.issueJWT(user);
      res.json({
        success: true,
        user: user,
        token: jwt.token,
        expiresIn: jwt.expires,
      });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
});

module.exports = router;
