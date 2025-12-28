const express = require("express");
const {Router} = require("express");
const {AdminModel} = require("../db");
const bcrypt = require("bcrypt");

const adminRouter = Router();

adminRouter.post("/signup" , async function(req ,res){
        const email = req.body.email;
        const password = req.body.password;

        let errorThrown = false;
        try{
            const hashedPassword = await bcrypt.hash(password, 5);

            await AdminModel.create({
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
                message : "admin account created successfully"
            })
        }
})

adminRouter.post("/login" , async function(req ,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await AdminModel.findOne({
        email : email
    })

    if(!user){
        res.json({
            message : "no such admin exists"
        })
    }

    const passwordMatch = bcrypt.compare(password , user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id : user._id.toString()
        },process.env.JWT_SECRET)
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