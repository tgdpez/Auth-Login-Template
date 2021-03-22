const express = require("express");
const router = express.Router();
const Joi = require("joi");
const User = require("../models/User");
const authHelper = require("../utils/authHelper");

const schema = Joi.object({
  email: Joi.string().empty().email().min(3).max(30),
  password: Joi.string().empty().min(3).max(30),
});

router.post("/login", async function (req, res, next) {
  const value = await schema.validate({
    email: req.body.email,
    password: req.body.password,
  });

  // console.log("Verifying the value: ", value);

  if (!value.error) {
    User.findOne({ email: req.body.email })
      .then((user) => {
        const isValid = authHelper.validPassword(
          req.body.password,
          user.hash,
          user.salt
        );

        if (isValid) {
          //Issue JWT - Send to client
          const jwt = authHelper.issueJWT(user);

          res
            .cookie("testSiteCookie", jwt, {
              //1hour in milliseconds
              maxAge: 3600000,
              httpOnly: true,
              signed: true,
            })
            .status(200)
            .json({
              success: true,
              message: "Login Successful",
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              expiresIn: jwt.expires,
            });
        }
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          message: "Email or password is incorrect",
        });
      });
  } else {
    res.status(401).json({
      success: false,
      message: "Your email or password do not meet format requirements",
      error: value.error,
    });
  }
});

module.exports = router;
