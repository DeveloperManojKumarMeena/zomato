
const foodModel = require("../module/fooditeam.module")

async function createFood(req,res) {
  
    return res.status(200).json({
        message:"You Can add food in web page",
        user : req.foodPartner
       
    })
}

module.exports = {
    createFood
}
