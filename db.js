const mongoose = require("mongoose");
console.log("connected");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    email : {type: String , unique: true},
    password : String,
    firstName : String
})

const AdminSchema = new Schema({
    email : {type: String , unique: true},
    password : String,
    firstName : String
})

const CourseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjectId
})

const PurchaseSchema = new Schema({
    courseId : ObjectId,
    userId : ObjectId
})

//we can add references in mongo schema later on

const UserModel = mongoose.model("users" , UserSchema);
const AdminModel = mongoose.model("admin" , AdminSchema);
const CourseModel = mongoose.model("courses" , CourseSchema);
const PurchaseModel = mongoose.model("purchases" , PurchaseSchema);

module.exports = {
    UserModel : UserModel,
    AdminModel : AdminModel,
    CourseModel : CourseModel,
    PurchaseModel : PurchaseModel
}

