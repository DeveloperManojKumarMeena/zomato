const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../module/partner.module");
const userModel = require("../module/user.module")

async function authfoodpartnermiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Please Login First"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.jwt_Secreate)

        const foodPartner = await foodPartnerModel.findById(decoded.id);

        if (!foodPartner) {
            return res.status(409).json({
                message: "User Account Can't Access this api..."
            })
        }

        req.foodPartner = foodPartner

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Invalid User Token"
        })
    }
}

async function authUserMiddleware(req, res, next) {
    
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Authentication failed. No token provided."
        });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.jwt_Secreate);

        

        const user = await userModel.findById(decodedToken.id);

        if (!user) {
            return res.status(403).json({
                message: "Access forbidden. User account not found."
            });
        }

        // Attach the authenticated user object to the request
        req.user = user; 

        next();

    } catch (error) {
        console.error("Token verification failed:", error); // Log the error for debugging
        return res.status(401).json({
            message: "Authentication failed. Invalid token.",
            error: error.message
        });
    }
}

module.exports = {
    authfoodpartnermiddleware,
    authUserMiddleware
}