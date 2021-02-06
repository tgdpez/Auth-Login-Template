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

  console.log("Validated credentials: ", value);

  if (!value.error) {
    const alreadyExists = await User.findOne({ email: req.body.email });
    console.log("alreadyExistsVariable: ", alreadyExists);
    //Check if user already exists
    if (alreadyExists) {
      //Return error
      return res.status(409).send({ message: "User already exists" });
    } else {
      try {
        //Encrypt credentials
        console.log("value before generatePasswrod: ", value);
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
          //Issue JWT - Send to client
          const jwt = authHelper.issueJWT(user);
          res.json({
            success: true,
            user: {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
            token: jwt.token,
            expiresIn: jwt.expires,
          });
        });
      } catch (err) {
        return res.json({ success: false, msg: err });
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
