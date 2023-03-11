const express = require("express")
const router = express.Router()
const User = require("../model/User");
const {hashPassword,comparePassword}=require("../utils/hash");
const {registrationSchema,loginSchema}=require("../utils/validation");
const jwt=require('jsonwebtoken')


router.post('/register', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const validation = registrationSchema.validate({ name: name, email: email, password: password })

    if (!validation.error) {
        const userFound=await User.findOne({email:email})
        if(userFound){
            res.status(400);
            res.json({"message":"Email Already Exists!"})
        }else{
            const hashedPassword=await hashPassword(password);
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword
            })
    
            try {
                const savedUser = await user.save()
                res.json(savedUser)
            } catch {
                res.status(400).send(err)
            }
        }
        
    } else {
        res.status(400);
        res.json({ "message": validation.error.message })
    }

})

router.post("/login", async(req, res) => {
    const email=req.body.email
    const password=req.body.password

    const validation=loginSchema.validate({email:email,password:password})

    if(!validation.error){
        const foundUser=await User.findOne({email:email})
        if(foundUser){
            const result=await comparePassword(password,foundUser.password)
            if(result){
                res.status(200)
                res.json({"message":"Successfully Logged In"})
            }else{
                res.status(403)
                res.json({"message":"Password do not match"})
            }
        }else{
            res.status(403);
            res.json({"message":"No email associate with this account!"})
        }
    }

})

module.exports = router