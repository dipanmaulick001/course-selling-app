require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");


const app = express();
const jwt = require("jsonwebtoken");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");

app.use(express.json()); //to parse json data in the body

app.use("/user" , userRouter);
app.use("/admin",adminRouter);
app.use("/course" , courseRouter);


async function main(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to db");
    app.listen(process.env.PORT, ()=>{
        console.log(`listening on port ${process.env.PORT}`);
    });
    //the backend should run only when we are connected to the db, so await
}
main();