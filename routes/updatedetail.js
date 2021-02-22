const express = require("express");
const { data } = require("../Data/testdata");
const { findOne } = require("../mongo/User");
const Router = express.Router();
const User = require("../mongo/User");

Router.post("/", (req, res) => {
  User.findOne({ name: req.body.name }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      if (data.age == req.body.newage) {
        res.json({ msg: "new age is same as last age" });
      } else {
        User.updateOne(
          { name: req.body.name },
          { age: req.body.newage },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.json({ msg: "data updated" });
            }
          }
        );
      }
    } else {
      res.json({ msg: "User Not found" });
    }
  });
});

module.exports = Router;
