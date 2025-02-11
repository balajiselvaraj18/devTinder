const express = require("express");

const app = express();


app.use("/",(err, req, res, next)=>{


    if(err){
        res.status(500).send("Something wrong");
    
    }
    });

app.get(
    "/getUserData", 
    (req, res, next) => {

        try{

       
        throw new Error("Error");
        
        res.send("User Data sent!");
    }
    catch(err){
        res.status(500).send("Something wrong balaji"); 
    }
       
    }
);







app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
});