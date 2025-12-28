const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

app.post("/user-signup" , function(req ,res){

})

app.post("/user-login" , function(req ,res){

})

app.post("/buy-a-course" , function(req ,res){

})



app.prependOnceListener(3006);