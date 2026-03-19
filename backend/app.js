const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("Hello from Node + MongoDB 🚀");
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});