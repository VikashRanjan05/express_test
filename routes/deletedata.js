const express = require("express");
const { data } = require("../Data/testdata");
const Router = express.Router();
const User = require("../mongo/User");

Router.post("/", (req, res) => {
  User.findOne({ name: req.body.name }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      User.deleteOne({ name: req.body.name }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json({ msg: "User Deleted" });
        }
      });
    } else {
      res.json({ msg: "user not Found" });
    }
  });
});

module.exports = Router;
