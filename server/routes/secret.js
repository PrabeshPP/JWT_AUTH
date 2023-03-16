const express = require("express")
const router = express.Router()
const {verifyToken}=require("../utils/token");


router.get("/",(req,res)=>{
    const header=req.headers.authorization;
    const token=header.split(" ")[1]
    const result=verifyToken({"token":token});
    if(result!=null){
        res.status(200)
        res.json({"message":"Welcome to the Secret Page of this webiste!"})
    }else{
        res.status(403)
        res.json({"message":"Not Authorized"})
    }

})

module.exports=router;