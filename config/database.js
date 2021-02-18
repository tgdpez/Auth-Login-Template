const mongoose = require("mongoose");

const Kitten = require("../models/kittySchema");
const User = require("../models/User");

const devConnection = process.env.DB_STRING;
const prodConnection = process.env.DB_STRING_PROD;

function connectToMongoose(environment) {
  mongoose.connect(environment, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.on("connected", () => {
    console.log("DB connected correctly to server");
  });
  // db.once("open", function () {
  //   const silence = new Kitten({ name: "Silence" });
  //   console.log(silence.name); // 'Silence'

  //   const fluffy = new Kitten({ name: "fluffy" });
  //   fluffy.speak(); // "Meow name is fluffy"
  // });
}

if (process.env.NODE_ENV === "production") {
  connectToMongoose(prodConnection);
} else {
  connectToMongoose(devConnection);
}
