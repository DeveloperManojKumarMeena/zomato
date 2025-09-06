const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const partnerModel = require("../module/partner.module");


async function registerPartner(req,res) {
const{name,email, password} = req.body;

const isPartnerExist = await partnerModel.findOne({
    email
})
if(isPartnerExist){
    return res.status(409).json({
        message:"partner all ready register..."
    })
}

const hashedPassword = await bcrypt.hash(password ,10)

const FoodPartner = await partnerModel.create({
    name,
    email,
    password:hashedPassword
})

const token = jwt.sign({
    id:FoodPartner._id,
},process.env.jwt_Secreate)

res.cookie("token",token)

res.status(201).json({
    message:"Welcome Food Partner You Registered successfully.",
    FoodPartner:{
        id:FoodPartner._id,
        name:FoodPartner.name,
        email:FoodPartner.email
    }
})

}


async function LoginPartner(req ,res) {
    const{email , password}= req.body;

    const user = await partnerModel.findOne({
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
    message:`welcome back ${user.name} you logged in successfully`,
    user:{
        _id:user._id,
        email:user.email,
        fullName:user.name
    }
})

}

module.exports ={
    registerPartner,
    LoginPartner
}