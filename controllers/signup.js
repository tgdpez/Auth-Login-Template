const express = require("express");
const router = express.Router();
const Joi = require("joi");
const User = require("../models/User");
const authHelper = require("../utils/authHelper");

const schema = Joi.object({
  email: Joi.string().empty().email().min(3).max(30),
  password: Joi.string()
    .empty()
    //REGEX: Min five characters, max fifteen characters,
    //at least one uppercase letter, one lowercase letter,
    //one number and one special character:
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,15}$"
      )
    ),
});

router.post("/signup", async function (req, res, next) {
  //Check if input is valid - sanitize (optional)
  const value = await schema.validate({
    email: req.body.email,
    password: req.body.password,
  });

  if (!value.error) {
    //Check if user already exists
    const alreadyExists = await User.findOne({ email: req.body.email });
    if (alreadyExists) {
      //Return error
      return res.status(409).send({ message: "User already exists" });
    } else {
      try {
        //Encrypt credentials
        const saltHash = authHelper.generatePassword(req.body.password);
        const salt = saltHash.salt;
        const hash = saltHash.hash;
        //Create in DB
        const newUser = new User({
          email: req.body.email,
          hash: hash,
          salt: salt,
        });
        //Save user to database
        newUser.save().then((user) => {
          //Signs jwt with the helper function
          const jwt = authHelper.issueJWT(user);
          //Signs cookie through cookie-parser secret in server.js
          res
            .cookie("token", jwt, {
              //1hour in milliseconds
              maxAge: 3600000,
              httpOnly: true,
              signed: true,
            })
            .status(202)
            .json({
              success: true,
              message: "Signup Successful",
            });
        });
      } catch (err) {
        return res.json({ success: false, message: err });
      }
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "Your email or password do not meet format requirements",
      error: value.error,
    });
  }
});

module.exports = router;
