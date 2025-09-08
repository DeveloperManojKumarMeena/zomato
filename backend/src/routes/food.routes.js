const express= require("express")
const foodcontroller = require("../controllers/food.controller")
const router = express.Router();
const AuthPartnerFoodMiddleware = require("../middlewares/auth.middleware")
const multer = require("multer")


const upload = multer({
    storage:multer.memoryStorage(),
})

router.post('/',AuthPartnerFoodMiddleware.authfoodpartnermiddleware,upload.single("video") ,foodcontroller.createFood)


router.get('/', AuthPartnerFoodMiddleware.authUserMiddleware,
    foodcontroller.getFoodItems
)


module.exports=router
