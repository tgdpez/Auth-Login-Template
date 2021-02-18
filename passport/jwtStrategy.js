const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require("fs");
const path = require("path");
const User = require("../models/User");

const pathToPublicKey = path.join(__dirname, "..", "public_key.pem");
const PUB_KEY = fs.readFileSync(pathToPublicKey, "utf8");

//Use cookieParser to get the token from req.signedCookies
//instead of req.cookies (More secure)
const cookieExtractor = (req) => {
  let jwtToken = null;
  if (req && req.signedCookies) {
    jwtToken = req.signedCookies["token"]["token"];
  } else {
    return { message: "cookie error" };
  }
  return jwtToken;
};

const options = {
  //Alternate Bearer <token> method (Would need to also update the sign jwt method in authHelper.js)
  // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  jwtFromRequest: cookieExtractor,
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

module.exports = function (passport) {
  passport.use(
    "jwt",
    new JwtStrategy(options, function (jwt_payload, done) {
      //Check cookie jwt payload sub matches user from database
      User.findOne({ _id: jwt_payload.sub }, function (err, user) {
        console.log("Logging the user: ", user);
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      });
    })
  );
};
