const foodModel = require("../module/fooditeam.module")
const storageServices = require("../services/stroage.service")
const {v4 : uuid} = require("uuid")

async function createFood(req,res) {
  
    const fileUploadResult = await storageServices.UploadFile(req.file.buffer,uuid());
    

    // const url = JSON.stringify(fileUploadResult.url)

    const foodIteam =  await foodModel.create({
        name:req.body.name,
        caption: req.body.caption,
        video: fileUploadResult.url,
        foodPartner:req.foodPartner._id
    })

    res.status(201).json({
      
        message:"New Iteam Added Successfully!",
        Food:foodIteam
    })
   
}

module.exports = {
    createFood
}
