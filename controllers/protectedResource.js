const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/resource123",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).json({
      success: true,
      profile: {
        _id: req.user._id,
        email: req.user.email,
        createdOn: req.user.createdOn,
      },
      msg: "You are successfully authenticated to this route!",
    });
  }
);

module.exports = router;
