const express = require("express");
const Router = express.Router();
const User = require("../mongo/User");

Router.post("/", (req, res) => {
  console.log(req.body.name);
  User.findOne({ name: req.body.name }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      res.json(data);
    }
  });
});

module.exports = Router;
