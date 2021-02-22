const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Port = 3005;

app.use(express.json());

// Routes
app.use("/api", require("./routes/api.js"));
app.use("/addData", require("./routes/adddata.js"));
app.use("/userdetails", require("./routes/alluser"));
app.use("/updatedetails", require("./routes/updatedetail"));
app.use("/deletedata", require("./routes/deletedata"));

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_Connect, { useNewUrlParser: true }, () => {
  console.log("database is connected");
});

app.get("/", (req, res) => {
  res.send("Hello this is homepage");
});

app.listen(Port, () => {
  console.log("server started");
});
