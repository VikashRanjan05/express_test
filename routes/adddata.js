const express = require("express");
const Router = express.Router();
const User = require("../mongo/User");

Router.post("/", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  User.findOne({ name: name }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      res.json({ msg: "user already exist" });
    } else {
      const user = new User({
        name: name,
        age: age,
      });
      try {
        const saveuser = user.save();
        res.send("user added");
      } catch (err) {
        res.status(400).send(err);
      }
    }
  });
});

module.exports = Router;
