const express = require("express");
//const Router = express.Router;
const {Router} = require("express");
const {UserModel, PurchaseModel} = require("../db");
const bcrypt = require("bcrypt");
const {z} = require("zod"); //for input validation
const jwt = require("jsonwebtoken");

const {userMiddleware} = require("../middlewares/user");
const user = require("../middlewares/user");

const userRouter = Router();

userRouter.post("/signup" , async function(req ,res){
    const requiredBody = z.object({
        email : z.email(),
        password : z.string().min(5).max(20),
        firstName : z.string().min(2).max(50),
        lastName : z.string().min(2).max(50)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
            res.json({
                message : "incorrect format",
                error : parsedDataWithSuccess.error
            })
    }
    //if correct format

    const {email , password , firstName , lastName} = req.body;

    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({
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
            message : "account created"
        })
    }
        
})

userRouter.post("/login" , async function(req ,res){
    const {email , password} = req.body

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
        },process.env.JWT_USER_SECRET);

        return res.json({
            token : token
        })
    }else{
        res.json({
            message : "Incorrect credentials"
        })
    }
       
})

userRouter.get("/purchases",userMiddleware, async function(req,res){
    //user sees all his/her purchases
    const userId = req.userId;
    const purchases  = await PurchaseModel.find({
        userId : userId
    })

    res.json({
        purchases : purchases
    })
})

module.exports = {
    userRouter : userRouter
}