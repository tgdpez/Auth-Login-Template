const express = require("express");
const router = express.Router();
const expressValidator = require("express-validator");
const passport = require("passport");

router.get(
  "/resource123",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).json({
      success: true,
      profile: req.user.profile,
      msg: "You are successfully authenticated to this route!",
    });
  }
);

module.exports = router;
