const express = require("express");

const app = express();

app.use("/test",(req, res)=> {
    res.send("Vanakamda thambi, am from server!")
});

app.use("/hello",(req, res)=> {
    res.send("Hello thambi, am from server!")
});

app.use("/dashboard",(req, res)=> {
    res.send("Hello Dashboard, am from server!")
});

app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
});