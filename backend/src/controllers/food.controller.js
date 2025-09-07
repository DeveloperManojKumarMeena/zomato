const foodModel = require("../module/fooditeam.module")
const storageServices = require("../services/stroage.service")
const {v4 : uuid} = require("uuid")

async function createFood(req,res) {
  
    const fileUploadResult = await storageServices.UploadFile(req.file.buffer,uuid());
    console.log(fileUploadResult.url)

    

    // const foodIteam =  await foodModel.create({
    //     name:req.body.name,
    //     caption: req.body.caption,
    //     video: fileUploadResult.url,
    //     foodPartner:req.foodPartner._id
    // })

    res.status(201).json({
      
        message:"New Iteam Added Successfully!",
       
    })
   
}

module.exports = {
    createFood
}
