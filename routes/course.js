const express = require("express");
const Router = express.Router;
const {CourseModel, PurchaseModel} = require("../db");
const { userMiddleware } = require("../middlewares/user");

const courseRouter = Router();

courseRouter.post("/purchase" , userMiddleware ,async function(req ,res){
    //user purchases a course
    const userId = req.userId;
    const courseId = req.body.courseId;
    //just the course gets added to the purchase model in db
    await PurchaseModel.create({
        courseId : courseId,
        userId: userId
    })

    res.json({
           message : 'You have successfully bought the course'
    })
})

courseRouter.get("/preview" , async function(req , res){
    //user can see all the available courses
    //we dont need authentication to see all the courses avaialble
    //logged in our logged out doesn't matter
    const courses = await CourseModel.find({});
    res.json({
        courses : courses,
        message : "These are all the courses available"
    })
})

module.exports = {
    courseRouter : courseRouter
}