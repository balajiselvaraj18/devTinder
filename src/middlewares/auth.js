
const adminAuth = (req,res,next)=>{

    const token = "xyzdf";

    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
        res.status(401).send("UnAuthorized request");
    }else{
        next();
    }

};

module.exports = {
    adminAuth,
};