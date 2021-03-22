//Check if request has signed cookie
module.exports = function (req, res, next) {
  // console.log("req.signedCookies: ", req.signedCookies.testSiteCookie);
  const cookie = req.signedCookies.testSiteCookie;
  if (cookie === undefined) {
    res.status(401).send({
      success: false,
      message: "Not Authenticated",
    });
  } else {
    next();
  }
};
