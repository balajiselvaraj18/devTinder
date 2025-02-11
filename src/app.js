const express = require("express");

const app = express();

const { adminAuth } = require("./middlewares/auth");




//this will only handle GET call
///user/:userID/:name/:password - this is called dynamic routing
// app.get("/user/:userID/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send({firstname:"Balaji", lastname:"Selvaraj"});
// });


app.use("/admin", adminAuth);


app.use("/admin/getAllData", (req,res,next)=>{
    res.send("All Data");
    }

);

app.use("/admin/DeleteAllData", (req,res,next)=>{
    res.send("Delete Data");
    }

);



app.get(
    "/user", 
    (req, res, next) => {
        console.log("Routing Handler 1");
        next(); // Pass control to the next handler
    },
    (req, res) => { // No need for "next" here since it's the final response
        console.log("Routing Handler 2");
        res.send("Response 2!!!");
    }
);







app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
});