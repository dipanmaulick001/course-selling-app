const express = require("express");
//const Router = express.Router;
const {Router} = require("express");
const {UserModel} = require("../db");
const bcrypt = require("bcrypt");

const userRouter = Router();

userRouter.post("/signup" , async function(req ,res){
    const email = req.body.email;
    const password = req.body.password;

    let errorThrown = false;
    try{
        const hashedPassword = bcrypt.hash(password, 5);

        await UserModel.create({
            email : email,
            password : hashedPassword
        })

    }catch(e){
        res.json({
            message : "error"
        })
        errorThrown = true;

    }

    if(!errorThrown){
        res.json({
            message : "account created"
        })
    }
        
})

userRouter.post("/login" , async function(req ,res){
    const email = req.body.email;
    const password = req.body.password;

    let response = await UserModel.findOne({
        email : email
    })

    if(!response){
        res.json({
            message : "invalid email"
        })
    }

    const passwordMatch = bcrypt.compare(password,response.password);

    if(passwordMatch){
        const token = jwt.sign({
                id : response._id.toString()
        },process.env.JWT_SECRET);

        return res.json({
            token : token
        })
    }else{
        res.json({
            message : "Incorrect credentials"
        })
    }

    
        
})

userRouter.get("/purchases", function(req ,res){
    res.json({
        message : "these are your courses"
    })
})

module.exports = {
    userRouter : userRouter
}