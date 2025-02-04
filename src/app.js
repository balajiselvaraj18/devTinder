const express = require("express");

const app = express();



//this will only handle GET call
app.get("/user",(req,res)=>{
    res.send({firstname:"Balaji", lastname:"Selvaraj"});
});


app.post("/user",(req,res)=>{
    res.send("Data saved to the Database.");
});

app.delete("/user",(req,res)=>{
    res.send("Deleted sucessfully");
});


//this will match all the http method API call to test
app.use("/test",(req, res)=> {
    res.send("Vanakamda thambi, am from server!")
});


app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
});