const express = require("express");
//const Router = express.Router;
const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup" , function(req ,res){
        res.json({
            message : "you have signed up"
        })
})

userRouter.post("/login" , function(req ,res){
        res.json({
            message : "you have logged in"
        })
})

userRouter.get("/purchases", function(req ,res){
    res.json({
        message : "these are your courses"
    })
})

module.exports = {
    userRouter : userRouter
}