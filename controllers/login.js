const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

const authHelper = require("../utils/authHelper");

// Login - Validate an existing user and issue a JWT
router.post(
  "/login",
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 3, max: 20 }),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          res
            .status(401)
            .json({ success: false, msg: "email or password is incorrect" });
        }

        const isValid = authHelper.validPassword(
          req.body.password,
          user.hash,
          user.salt
        );

        if (isValid) {
          const jwt = authHelper.issueJWT(user);

          res.status(200).json({
            success: true,
            user: {
              _id: user._id,
              email: user.email,
            },
            token: jwt.token,
            expiresIn: jwt.expires,
          });
        } else {
          res
            .status(401)
            .json({ success: false, msg: "you entered the wrong password" });
        }
      })
      .catch((err) => {
        res.status(400).send("There was an error: ", err.message);
      });
  }
);

module.exports = router;
