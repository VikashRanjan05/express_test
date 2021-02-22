const express = require("express");
const app = express();
const Port = 3005;
app.use(express.json());


// Routes
app.use('/api',require('./routes/api.js'));



app.get("/",(req , res)=>{
    res.send("HEllo this is homepage")
})



app.listen(Port,()=>{
    console.log("server started")
})