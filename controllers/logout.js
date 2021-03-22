const express = require("express");
const router = express.Router();

router.get("/logout", function (req, res, next) {
  res
    .status(200)
    .clearCookie("testSiteCookie", {
      httpOnly: true,
      path: "/",
    })
    .json({
      success: true,
      message: "Sucessfully logged out",
    });
});

module.exports = router;
