const express =require("express")
const userModel = require("../module/user.module")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


async function registerUser(req ,res) {
    
    const {fullName , email , password} = req.body;

    const isUserExisst = await userModel.findOne({
        email
    })
    if(isUserExisst){
        return res.status(400).json({
            message: "User already exists try with new email"
        })
    }

    const hashePassword = await bcrypt.hash(password ,10);

    const user = await userModel.create({
        fullName,
        email,
        password:hashePassword
    })
    const token = jwt.sign({
        id:user._id,
    },process.env.jwt_Secreate)
    res.cookie("token", token)

    res.status(201).json({
        message:"User register successfully",
        email: user.email,
        fullName:user.fullName
    })
}

async function Login(req , res) {
    const { email , password}= req.body;

    const user = await userModel.findOne({
        email
    })
    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const isPasswordValid = await bcrypt.compare(password , user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email and password.."
        })
    }
    const token = jwt.sign({
        id:user._id,
},process.env.jwt_Secreate)

res.cookie("token",token)

res.status(200).json({
    message:"User logged in successfully",
    user:{
        _id:user._id,
        email:user.email,
        fullName:user.fullName
    }
})

}
async function logoutUser(req , res) {
    res.clearCookie("token");
    res.status(200).json({
        message:"User logged out successfully"
    })
}

module.exports = {
    registerUser,
    Login,
    logoutUser
};