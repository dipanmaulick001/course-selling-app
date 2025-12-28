const express = require("express");
const Router = express.Router;
const {CourseModel} = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase" , function(req ,res){
    res.json({
        message : "purchase"
    })
})

courseRouter.get("/preview" , function(req , res){
    res.json({
        message : "these are courses you can buy"
    })
})

module.exports = {
    courseRouter : courseRouter
}