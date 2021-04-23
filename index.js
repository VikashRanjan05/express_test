const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Port = 3005;

app.use(express.json());

// Routes
app.use("/user", require("./routes/User.js"));

dotenv.config();

// Connect to DB
// mongoose.connect(process.env.DB_Connect, { useNewUrlParser: true }, () => {
//   console.log("database is connected");
// });

mongoose.connect(
  "mongodb://127.0.0.1/Test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database is connected");
  }
);

app.get("/", (req, res) => {
  res.send("Hello this is homepage");
});

app.listen(Port, () => {
  console.log("server started");
});
