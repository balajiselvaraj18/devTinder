const express = require("express");

const app = express();



//this will only handle GET call
///user/:userID/:name/:password - this is called dynamic routing
app.get("/user/:userID/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstname:"Balaji", lastname:"Selvaraj"});
});





app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
});