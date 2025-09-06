const express= require("express")
const foodcontroller = require("../controllers/food.controller")
const router = express.Router();
const AuthPartnerFoodMiddleware = require("../middlewares/auth.middleware")

router.post('/',AuthPartnerFoodMiddleware.authfoodpartnermiddleware, foodcontroller.createFood)


module.exports=router