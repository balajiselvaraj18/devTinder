const express = require("express");

const app = express();



//this will only handle GET call
///user/:userID/:name/:password - this is called dynamic routing
// app.get("/user/:userID/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send({firstname:"Balaji", lastname:"Selvaraj"});
// });

app.use("/user", 
    
  [  
    (req, res, next)=>{
    console.log("Routing Handler 1");
    res.send("Response!!!");
    next();
},
(req, res)=>{

    console.log("Routing Handler 2");
    res.send("Response 2");
},
  ],


(req, res)=>{

    console.log("Routing Handler 3");
    res.send("Response 3");
});





app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
});