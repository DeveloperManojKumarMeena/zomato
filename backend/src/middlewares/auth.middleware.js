const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../module/partner.module");

async function authfoodpartnermiddleware(req,res,next) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Please Login First"
        })
    }

    try {
       const decoded = jwt.verify(token, process.env.jwt_Secreate)

       const foodPartner = await foodPartnerModel.findById(decoded.id);

       req.foodPartner = foodPartner

       next()

    } catch (error) {
        return res.status(401).json({
            message:"Invalid User Token"
        })
    }
}

module.exports ={
    authfoodpartnermiddleware
}