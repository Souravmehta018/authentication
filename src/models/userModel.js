const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : [true, "Please prvide usrname"],
        unique: true
    },
    email: {
        type: String,
        required : [true, "Please prvide usrname"],
        unique: true        
    },
    password: {
        type: String,
        required : [true, "Please prvide usrname"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})
//userSchema here are the checks done before storing user info

 const User = mongoose.models.users || mongoose.model ("users", userSchema)

// give User the value of users database in mongooseDB 
//and if this database doese not exist, create "users" database first
export default User;