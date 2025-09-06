const mongoose = require("mongoose")

const partnerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const partnerModel = mongoose.model("FoodPartner",partnerSchema)

module.exports = partnerModel;