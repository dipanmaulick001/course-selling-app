const express = require("express");
const {Router} = require("express");
const {AdminModel, CourseModel} = require("../db");
const bcrypt = require("bcrypt");
const {z} = require("zod");
const jwt = require("jsonwebtoken");

const {adminMiddleware} = require("../middlewares/admin");

const adminRouter = Router();

adminRouter.post("/signup" , async function(req ,res){
    //input validation

        const requiredAdminBody = z.object({
            email : z.email(),
            password : z.string().min(5).max(30),
            firstName : z.string().min(2).max(50),
            lastName  : z.string().min(2).max(50)
        })

        const parsedAdminDataWithSucc = requiredAdminBody.safeParse(req.body);

        if(!parsedAdminDataWithSucc.success){
                res.json({
                    message : "invalid format"
                })
        }

        //if correct format

        const {email , password ,firstName , lastName} = req.body;

        let errorThrown = false;
        try{
            const hashedPassword = await bcrypt.hash(password, 5);

            await AdminModel.create({
                email : email,
                password : hashedPassword,
                firstName : firstName,
                lastName : lastName
            })
        }catch(e){
            res.json({
                message : "error"
            })
            errorThrown = true;
        }

        if(!errorThrown){
            res.json({
                message : "admin account created successfully"
            })
        }
})

adminRouter.post("/login" , async function(req ,res){
    const {email , password} = req.body;

    const admin = await AdminModel.findOne({
        email : email
    })

    if(!admin){
        res.json({
            message : "no such admin exists"
        })
    }

    const passwordMatch = bcrypt.compare(password , admin.password);

    if(passwordMatch){
        const token = jwt.sign({
            id : user._id.toString()
        },process.env.JWT_ADMIN_SECRET)
        res.json({
            token : token
        })
    }else{
        res.json({
            message : "invalid credentials"
        })
    }
})

//admin creates course

adminRouter.post("/course" , adminMiddleware, async function(req ,res){
    const adminId = req.adminId;
    const {title , description, price , imageURL} = require("../db");

    //admin creates a course
    const course = await CourseModel.create({
        title : title,
        description : description,
        price : price,
        imageURL : imageURL,
        creatorId : adminId
    })

    res.json({
        message : "course created",
        courseId : course._id
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