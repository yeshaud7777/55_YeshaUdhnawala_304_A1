const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/gethello",(req,res)=>{
    res.send("This is a static javascript File!");
});

app.listen(3000,()=>{
    console.log("Server Running : http://localhost:3000");
});