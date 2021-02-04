const express = require("express");
const router = express.Router();
const Joi = require("joi");
const User = require("../models/User");
const authHelper = require("../utils/authHelper");

const schema = Joi.object({
  password: Joi.string().empty().pattern(
    //REGEX: Min five characters, max fifteen characters,
    //at least one uppercase letter, one lowercase letter,
    //one number and one special character:
    new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{5,15}$"
    )
  ),
  email: Joi.string().empty().email().min(3).max(15),
});

router.post("/signup", async function (req, res, next) {
  //Check if input is valid - sanitize (optional)
  try {
    const value = await schema.validate({
      email: req.body.email,
      password: req.body.password,
    });

    if (value) {
      const alreadyExists = await User.findOne({ email: req.body.email });

      //Check if user already exists
      if (alreadyExists) {
        //Return error
        res.status(409).json({ error: "User already exists" });
      } else {
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

        try {
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
          res.json({ success: false, msg: err });
        }
      }
    } else {
      next();
    }
  } catch (err) {
    next({ error: err });
  }
});

module.exports = router;
