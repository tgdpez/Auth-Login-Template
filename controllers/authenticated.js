const express = require("express");
const router = express.Router();
const passport = require("passport");
const checkSignedCookie = require("../utils/checkSignedCookie");

router.post(
  "/authenticated",
  checkSignedCookie,
  passport.authenticate("authenticateJWT", { session: false }),
  (req, res) => {
    res
      .status(200)
      .json({
        success: true,
        msg: "You are authenticated",
        data: req.user,
      })
      .end();
  }
);

module.exports = router;
