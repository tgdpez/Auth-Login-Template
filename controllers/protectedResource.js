const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/resource123",
  passport.authenticate("authenticateJWT", { session: false }),
  (req, res, next) => {
    res.status(200).json({
      success: true,
      msg: "Access to resource granted",
      profile: req.user
    });
  }
);

module.exports = router;
