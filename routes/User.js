const express = require("express");
const router = express.Router();
const User = require("../mongo/User");
router.get("/login", async (req, res) => {
  try {
    const data = await User.find();
    res.status("200").json(data);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const newuser = await newUser.save();
    res.status("200").json(newuser);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
