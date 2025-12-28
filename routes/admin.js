const express = require("express");
const {Router} = require("express");

const adminRouter = Router();

adminRouter.post("/signup" , function(req ,res){
    res.json({
        message : "admin acc created"
    })
})

adminRouter.post("/login" , function(req ,res){
    res.json({
        message : "admin has logged in"
    })
})

//admin creates course

adminRouter.post("/course" , function(req ,res){
    res.json({
        message : "Admin has created a course"
    })
})

adminRouter.put("/course" , function(req ,res){
    res.json({
        message : "admin has modified the course"
    })
})

adminRouter.get("/course", function(req ,res){
    res.json({
        message : "these are the courses"
    })
})

//now here also /course is common after /admin


module.exports = {
    adminRouter : adminRouter
}