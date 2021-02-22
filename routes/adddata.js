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
      res.status(400).json({
        mongoose.connect(process.env.DB_Connect, { useNewUrlParser: true }, () => {
          console.log("database is connected");
        });
        
        app.get("/", (req, res) => {
          res.send("Hello this is homepage");
        });
        
        app.listen(Port, () => {
          console.log("server started");
        });
        
      // res.json({ msg: "new will be added now" });
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
