const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const pathToKey = path.join(__dirname, "..", "private_key.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

function validPassword(password, hash, salt) {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
}

function generatePassword(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const generateHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: generateHash,
  };
}

//Set the JWT `sub` payload property to the MongoDB user ID
function issueJWT(user) {
  const expiresIn = "1d";
  const payload = {
    //Mongodb automatically creates _id
    //Store this along with email inside cookie to later verify against
    sub: user._id,
    email: user.email,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  //NOT prepending "Bearer " to signedToken because this is not being sent in the authorization header.
  //Instead, it's being stored and sent as a cookie to the client.
  return {
    token: signedToken,
  };
}

module.exports = {
  validPassword: validPassword,
  generatePassword: generatePassword,
  issueJWT: issueJWT,
};
