
const foodModel = require("../module/fooditeam.module")
const storageServices = require("../services/stroage.service")
const {v4 : uuid} = require("uuid")

async function createFood(req,res) {
  
    const fileUploadResult = await storageServices.UploadFile(req.file.buffer,uuid());

    console.log(fileUploadResult)
   
}

module.exports = {
    createFood
}
